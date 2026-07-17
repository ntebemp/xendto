import CustomButton from "@/components/button";
import HeaderTitle from "@/components/header/Header";
import { Fontisto } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import * as ImagePicker from "expo-image-picker";

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import React, { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Step2Screen() {
  const [selectedDocument, setSelectedDocument] = useState("id");

  const [frontImage, setFrontImage] = useState<string | null>(null);

  const [backImage, setBackImage] = useState<string | null>(null);

  async function pickImage(type: "front" | "back") {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      if (type === "front") {
        setFrontImage(result.assets[0].uri);
      } else {
        setBackImage(result.assets[0].uri);
      }
    }
  }

  const isFormValid = frontImage !== null && backImage !== null;
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

        <Text style={styles.step}>Step2: Upload valid ID documents</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <LinearGradient
              colors={["#18C776", "#2F8CD8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progress}
            />
          </View>

          <Text style={styles.progressText}>2/4</Text>
        </View>

        <Text style={styles.description}>
          Please upload a clear copy of your official photo ID to verify your
          identity.
        </Text>

        {/* DOCUMENT TYPE */}

        <TouchableOpacity
          onPress={() => setSelectedDocument("id")}
          style={[
            styles.documentCard,
            selectedDocument === "id" && styles.selectedCard,
          ]}
        >
          <FontAwesome name="id-card-o" size={24} color="#2F8CD8" />

          <Text style={styles.documentText}>CNI</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedDocument("passport")}
          style={[
            styles.documentCard,
            selectedDocument === "passport" && styles.selectedCard,
          ]}
        >
          <MaterialCommunityIcons
            name="passport-biometric"
            size={24}
            color="#2F8CD8"
          />

          <Text style={styles.documentText}>Passport</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedDocument("license")}
          style={[
            styles.documentCard,
            selectedDocument === "license" && styles.selectedCard,
          ]}
        >
          <FontAwesome5 name="car" size={24} color="#2F8CD8" />

          <Text style={styles.documentText}>License</Text>
        </TouchableOpacity>

        {/* FRONT */}

        <Text style={styles.uploadTitle}>Front side of document</Text>

        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => pickImage("front")}
        >
          {frontImage ? (
            <Image
              source={{
                uri: frontImage,
              }}
              style={styles.preview}
            />
          ) : (
            <>
              <View style={styles.uploadIconContainer}>
                <MaterialCommunityIcons
                  name="image-plus-outline"
                  size={30}
                  color="#2F8CD8"
                />

                {/* <View style={styles.plusBadge}>
                  <Ionicons name="add" size={12} color="#FFF" />
                </View> */}
              </View>

              <Text style={styles.uploadText}>Click to upload</Text>

              <Text style={styles.uploadSubText}>
                PNG, JPG or PDF (max. 10MB)
              </Text>
            </>
          )}
        </TouchableOpacity>

        {/* BACK */}

        <Text style={styles.uploadTitle}>Back side of document</Text>

        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => pickImage("back")}
        >
          {backImage ? (
            <Image
              source={{
                uri: backImage,
              }}
              style={styles.preview}
            />
          ) : (
            <>
              <View style={styles.uploadIconContainer}>
                <MaterialCommunityIcons
                  name="image-plus-outline"
                  size={30}
                  color="#2F8CD8"
                />
                {/* <View style={styles.plusBadge}>
                  <Ionicons name="add" size={12} color="#FFF" />
                </View> */}
              </View>

              <Text style={styles.uploadText}>Click to upload</Text>

              <Text style={styles.uploadSubText}>
                PNG, JPG or PDF (max. 10MB)
              </Text>
            </>
          )}
        </TouchableOpacity>
        {/* Footer */}
        <View style={styles.footerInfo}>
          <Fontisto name="locked" size={11} color="#898A8D" />
          <Text style={styles.footerInfoText}>
            Your data is encrypted and stored securely
          </Text>
        </View>
        {/* CONTINUE */}
        <View style={{ marginTop: 20, marginBottom: 40 }}>
          <CustomButton
            title="Continue"
            onPress={() => router.push("/kyc/step3")}
            disabled={!isFormValid}
          />
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
    marginBottom: 25,
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  backIcon: {
    fontSize: 28,
    color: "#222",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  step: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 10,
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
    width: "50%",
    height: "100%",
    borderRadius: 3,
  },

  progressText: {
    marginLeft: 12,
    fontWeight: "700",
    color: "#6B7280",
  },

  description: {
    textAlign: "center",
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 25,
    fontSize: 14,
  },

  documentCard: {
    height: 70,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#DCE8F3",
    backgroundColor: "#F5FAFE",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 15,
  },

  selectedCard: {
    borderColor: "#2F8CD8",
    backgroundColor: "#FFF",
  },

  documentText: {
    marginTop: 8,
    fontWeight: "600",
    color: "#111827",
    fontSize: 15,
  },

  uploadTitle: {
    marginTop: 18,
    marginBottom: 10,
    fontWeight: "600",
    color: "#111827",
    fontSize: 15,
  },

  uploadBox: {
    height: 170,

    borderRadius: 18,

    borderWidth: 2,

    borderStyle: "dashed",

    borderColor: "#DCE8F3",

    justifyContent: "center",

    alignItems: "center",

    marginBottom: 20,

    backgroundColor: "#FFF",
  },

  uploadText: {
    fontSize: 16,

    fontWeight: "600",

    color: "#222",

    textAlign: "center",

    marginBottom: 6,
  },

  uploadSubText: {
    fontSize: 13,

    color: "#8E99A8",

    textAlign: "center",

    lineHeight: 20,
  },

  preview: {
    width: "92%",
    height: "88%",
    resizeMode: "contain",
    borderRadius: 12,
  },

  button: {
    height: 58,
    borderRadius: 29,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
    marginBottom: 40,

    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
  buttonDisabled: {
    opacity: 0.8,
  },

  buttonPressed: {
    transform: [{ scale: 0.98 }],
  },
  footerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  footerInfoText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginLeft: 6,
  },
  uploadIconContainer: {
    width: 64,
    height: 64,

    borderRadius: 32,

    backgroundColor: "#EEF7FF",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 18,

    position: "relative",
  },

  plusBadge: {
    position: "absolute",

    top: 14,
    right: 12,

    width: 18,
    height: 18,

    borderRadius: 9,

    backgroundColor: "#2F8CD8",

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 2,
    borderColor: "#EEF7FF",
  },
});
