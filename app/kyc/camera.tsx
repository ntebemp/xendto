// camera.tsx
import CameraOverlay from "@/components/CameraOverlay";
import { getFrameRect } from "@/utils/Framegeometry";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
    LayoutChangeEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Passe à true si, en testant, le cadre rogné apparaît décalé/inversé
// horizontalement avec la caméra frontale (ça arrive sur certains
// appareils Android selon la façon dont le driver caméra gère le miroir).
const MIRROR_FRONT_CAMERA_CROP = false;

export default function CameraScreen() {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();

  // Taille réelle du conteneur qui contient la CameraView + l'overlay.
  // On mesure une seule fois ici et on la réutilise pour dessiner le
  // cadre ET pour rogner la photo, afin qu'ils soient toujours identiques.
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const onContainerLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setContainerSize({ width, height });
  };

  if (!permission) return null;

  if (!permission.granted) {
    return (
      <View style={styles.permission}>
        <Text style={styles.permissionText}>Camera permission required.</Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  async function takePicture() {
    if (!cameraRef.current) return;
    const { width: containerWidth, height: containerHeight } = containerSize;
    if (containerWidth === 0 || containerHeight === 0) return;

    // On ne met plus skipProcessing:true car on a besoin d'une image
    // correctement orientée/traitée avant de la rogner.
    const photo = await cameraRef.current.takePictureAsync({ quality: 1 });
    if (!photo || !photo.width || !photo.height) return;

    const croppedUri = await cropToFrame(
      photo,
      containerWidth,
      containerHeight,
    );

    router.replace({
      pathname: "/kyc/step3",
      params: { selfie: croppedUri },
    });
  }

  async function uploadPhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      router.replace({
        pathname: "/kyc/step3",
        params: { selfie: result.assets[0].uri },
      });
    }
  }

  return (
    <View style={styles.container} onLayout={onContainerLayout}>
      <CameraView
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        facing="front"
      />

      <CameraOverlay
        containerWidth={containerSize.width}
        containerHeight={containerSize.height}
      />

      <TouchableOpacity style={styles.close} onPress={() => router.back()}>
        <Ionicons name="close" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Position your face</Text>

      <Text style={styles.subtitle}>
        Keep your face inside the frame and make sure it is clearly visible.
      </Text>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.galleryButton} onPress={uploadPhoto}>
          <Octicons name="image" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.capture} onPress={takePicture}>
          <View style={styles.captureInner} />
        </TouchableOpacity>

        <View style={{ width: 55 }} />
      </View>
    </View>
  );
}

/**
 * Rogne la photo capturée pour ne garder que la zone visible dans le cadre.
 *
 * La CameraView affiche l'aperçu en mode "cover" : l'image du capteur est
 * recadrée pour remplir tout le conteneur, donc la photo brute (photo.width
 * x photo.height) contient souvent PLUS de contenu que ce qui est visible
 * à l'écran. On doit donc :
 *  1) déterminer quelle sous-zone de la photo correspond à ce qui est
 *     réellement affiché (le "visible rect", en simulant le cover-crop),
 *  2) positionner le cadre à l'intérieur de cette sous-zone,
 *  3) convertir le tout en pixels réels de la photo pour le crop final.
 */
async function cropToFrame(
  photo: { uri: string; width: number; height: number },
  containerWidth: number,
  containerHeight: number,
): Promise<string> {
  const {
    x: frameX,
    y: frameY,
    width: frameWidth,
    height: frameHeight,
  } = getFrameRect(containerWidth, containerHeight);

  const containerAspect = containerWidth / containerHeight;
  const photoAspect = photo.width / photo.height;

  let visibleWidth: number;
  let visibleHeight: number;
  let offsetX: number;
  let offsetY: number;

  if (photoAspect > containerAspect) {
    // La photo est "plus large" que le conteneur -> l'aperçu masque
    // les bords gauche/droite de la photo (cover crop horizontal).
    visibleHeight = photo.height;
    visibleWidth = photo.height * containerAspect;
    offsetX = (photo.width - visibleWidth) / 2;
    offsetY = 0;
  } else {
    // La photo est "plus haute" que le conteneur -> l'aperçu masque
    // le haut/bas de la photo (cover crop vertical).
    visibleWidth = photo.width;
    visibleHeight = photo.width / containerAspect;
    offsetX = 0;
    offsetY = (photo.height - visibleHeight) / 2;
  }

  // Échelle entre les points affichés à l'écran et les pixels réels de la photo.
  const scale = visibleWidth / containerWidth; // == visibleHeight / containerHeight

  let originX = offsetX + frameX * scale;
  const originY = offsetY + frameY * scale;
  const cropWidth = frameWidth * scale;
  const cropHeight = frameHeight * scale;

  if (MIRROR_FRONT_CAMERA_CROP) {
    originX = photo.width - originX - cropWidth;
  }

  const result = await ImageManipulator.manipulateAsync(
    photo.uri,
    [
      {
        crop: {
          originX: Math.max(0, Math.round(originX)),
          originY: Math.max(0, Math.round(originY)),
          width: Math.round(cropWidth),
          height: Math.round(cropHeight),
        },
      },
    ],
    { compress: 1, format: ImageManipulator.SaveFormat.JPEG },
  );

  return result.uri;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  permission: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  permissionText: { fontSize: 18, marginBottom: 20 },
  permissionButton: {
    backgroundColor: "#2F8CD8",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
  },
  permissionButtonText: { color: "#fff", fontWeight: "700" },
  close: {
    position: "absolute",
    top: 60,
    left: 20,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,.15)",
  },
  title: {
    position: "absolute",
    top: 120,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    position: "absolute",
    top: 160,
    alignSelf: "center",
    width: "80%",
    textAlign: "center",
    color: "#fff",
    lineHeight: 22,
  },
  bottom: {
    position: "absolute",
    bottom: 55,
    width: "100%",
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  galleryButton: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,.18)",
    justifyContent: "center",
    alignItems: "center",
  },
  capture: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 4,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  captureInner: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: "#fff",
  },
});
