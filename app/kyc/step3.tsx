import LightIcon from "@/assets/icons/Light.svg";
import FaceImg from "@/assets/images/faceImage.svg";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";

import React from "react";

import HeaderTitle from "@/components/header/Header";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function KYCStep3() {
  const { selfie } = useLocalSearchParams<{
    selfie?: string;
  }>();

  async function uploadPhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      router.replace({
        pathname: "/kyc/step3",
        params: {
          selfie: result.assets[0].uri,
        },
      });
    }
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <HeaderTitle
        headerTitle="KYC Verification"
        onPress={() => router.back()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 20, paddingHorizontal: 22 }}
      >
        {/* STEP */}

        <Text style={styles.stepTitle}>Step3 : Take a selfie of yourself</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <LinearGradient
              colors={["#18C776", "#2F8CD8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progress}
            />
          </View>

          <Text style={styles.progressText}>3/4</Text>
        </View>

        <Text style={styles.description}>
          Verify your identity by taking a photo that matches your ID provided.
        </Text>

        {/* SELFIE */}
        <View
          style={[
            styles.selfieCard,
            selfie ? styles.selfieCardWithPhoto : null,
          ]}
        >
          {selfie ? (
            <>
              <Image source={{ uri: selfie }} style={styles.selfie} />

              {/* Coins en équerre, comme sur l'écran de capture */}
              <View style={[styles.cardCorner, styles.cardCornerTopLeft]} />
              <View style={[styles.cardCorner, styles.cardCornerTopRight]} />
              <View style={[styles.cardCorner, styles.cardCornerBottomLeft]} />
              <View style={[styles.cardCorner, styles.cardCornerBottomRight]} />
            </>
          ) : (
            <FaceImg width={170} height={170} />
          )}

          {!selfie && (
            <View style={styles.detected}>
              <LightIcon width={18} height={18} />
              <Text style={styles.detectedText}>Proper lighting detected</Text>
            </View>
          )}
        </View>

        {/* GRID */}
        {selfie ? (
          <Text></Text>
        ) : (
          <View style={styles.grid}>
            <View style={styles.gridCard}>
              <View style={[styles.iconCircle, { backgroundColor: "#DDEBFF" }]}>
                <Ionicons name="happy-outline" size={26} color="#155EEF" />
              </View>

              <Text style={styles.gridTitle}>Center Face</Text>

              <Text style={styles.gridSubtitle}>
                Keep your face in the center of the frame.
              </Text>
            </View>

            <View style={styles.gridCard}>
              <View style={[styles.iconCircle, { backgroundColor: "#DDF8F1" }]}>
                <Ionicons name="sunny-outline" size={26} color="#0F9D7A" />
              </View>

              <Text style={styles.gridTitle}>Proper Lighting</Text>

              <Text style={styles.gridSubtitle}>
                Avoid backlight and dark rooms.
              </Text>
            </View>

            <View style={styles.gridCard}>
              <View style={[styles.iconCircle, { backgroundColor: "#DDF3F9" }]}>
                <Ionicons name="glasses-outline" size={26} color="#006D77" />
              </View>

              <Text style={styles.gridTitle}>Without accessories</Text>

              <Text style={styles.gridSubtitle}>Remove glasses and hats.</Text>
            </View>

            <View style={styles.gridCard}>
              <View style={[styles.iconCircle, { backgroundColor: "#DDEBFF" }]}>
                <Ionicons name="sparkles-outline" size={26} color="#155EEF" />
              </View>

              <Text style={styles.gridTitle}>Liveness</Text>

              <Text style={styles.gridSubtitle}>
                Follow the displayed instructions.
              </Text>
            </View>
          </View>
        )}

        {/* OPEN CAMERA */}
        {!selfie ? (
          <>
            <Pressable onPress={() => router.push("/kyc/camera")}>
              <LinearGradient
                colors={["#18C776", "#2F8CD8"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.cameraButton}
              >
                <Feather name="camera" size={20} color="white" />

                <Text style={styles.cameraText}>Open Camera</Text>
              </LinearGradient>
            </Pressable>

            {/* GALLERY */}

            <TouchableOpacity
              style={styles.galleryButton}
              onPress={uploadPhoto}
            >
              <MaterialIcons name="upload-file" size={20} color="#2F8CD8" />

              <Text style={styles.galleryText}>Upload a photo</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.retakeButton}
              onPress={() => router.push("/kyc/camera")}
            >
              <Text style={styles.retakeText}>Retake</Text>
            </TouchableOpacity>

            <Pressable onPress={() => router.push("/kyc/step4")}>
              <LinearGradient
                colors={["#18C776", "#2F8CD8"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.continueButton}
              >
                <Text style={styles.continueText}>Continue</Text>
              </LinearGradient>
            </Pressable>
          </View>
        )}

        <View style={styles.footerInfo}>
          <Fontisto name="locked" size={11} color="#898A8D" />
          <Text style={styles.footerInfoText}>
            Your data is encrypted and stored securely
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E6EAF0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  backIcon: {
    fontSize: 28,
    color: "#111827",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  stepTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 12,
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  progressBackground: {
    flex: 1,
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 3,
    overflow: "hidden",
  },

  progress: {
    width: "75%",
    height: "100%",
    borderRadius: 3,
  },

  progressText: {
    marginLeft: 10,
    fontWeight: "700",
    color: "#6B7280",
  },

  description: {
    textAlign: "center",
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 28,
    fontSize: 14,
  },

  selfieCard: {
    alignSelf: "center",
    width: 210,
    height: 210,
    borderRadius: 105,
    borderWidth: 3,
    borderColor: "#2F8CD8",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 35,

    backgroundColor: "#F5FAFE",
  },

  // Quand une photo a été prise : carte rectangulaire (pas un cercle),
  // comme dans la maquette Figma.
  selfieCardWithPhoto: {
    width: 300,
    height: 350,
    borderRadius: 20,
    borderWidth: 0,
    backgroundColor: "#000",
    overflow: "hidden",
  },

  guide: {
    width: 170,
    height: 170,
    resizeMode: "contain",
  },

  selfie: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  // Coins en équerre affichés par-dessus la photo, dans les 4 angles.
  cardCorner: {
    position: "absolute",
    width: 30,
    height: 30,
    borderColor: "#fff",
  },
  cardCornerTopLeft: {
    top: 10,
    left: 10,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 10,
  },
  cardCornerTopRight: {
    top: 10,
    right: 10,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 10,
  },
  cardCornerBottomLeft: {
    bottom: 10,
    left: 10,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 10,
  },
  cardCornerBottomRight: {
    bottom: 10,
    right: 10,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 10,
  },

  detected: {
    position: "absolute",
    bottom: -15,

    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#FFF",

    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: 20,

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 5,

    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  detectedText: {
    marginLeft: 8,
    color: "#111827",
    fontWeight: "600",
    fontSize: 13,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",

    marginBottom: 25,
  },

  gridCard: {
    width: "48%",

    backgroundColor: "#F4F9FF",

    borderRadius: 22,

    padding: 18,

    marginBottom: 16,
  },

  gridTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
  },

  gridSubtitle: {
    color: "#6B7280",
    fontSize: 12,
    lineHeight: 19,
  },

  cameraButton: {
    height: 58,

    borderRadius: 29,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    marginBottom: 15,

    shadowColor: "#000",

    shadowOpacity: 0.18,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  cameraText: {
    marginLeft: 10,
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },

  galleryButton: {
    height: 56,

    borderRadius: 28,

    borderWidth: 1.5,

    borderColor: "#2F8CD8",

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#FFF",
  },

  galleryText: {
    marginLeft: 10,

    color: "#2F8CD8",

    fontWeight: "700",

    fontSize: 16,
  },

  footer: {
    textAlign: "center",

    color: "#9CA3AF",

    marginTop: 22,

    marginBottom: 40,

    fontSize: 12,

    lineHeight: 18,
  },
  footerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    marginBottom: 40,
  },
  footerInfoText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginLeft: 6,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 25,
  },

  retakeButton: {
    width: "45%",
    height: 55,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: "#2F8CD8",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  retakeText: {
    color: "#2F8CD8",
    fontWeight: "700",
    fontSize: 17,
  },

  continueButton: {
    width: 150,
    height: 55,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },
  iconCircle: {
    width: 50,
    height: 50,

    borderRadius: 25,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 14,
  },
});
