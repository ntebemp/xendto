import KycImg from "@/assets/images/kyc.svg";
import CustomButton from "@/components/button";
import HeaderSkip from "@/components/header/HeaderSkip";
import { Ionicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function KYCScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderSkip
        headerTitle="KYC Verification"
        onPress={() => router.back()}
        onPressSkip={() => router.replace("/(tabs)/home")}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 20, paddingHorizontal: 25 }}
      >
        {/* Illustration */}

        {/* <Image
          source={require("@/assets/images/kyc.png")}
          style={styles.image}
        /> */}
        <View style={styles.imageContainer}>
          <KycImg style={styles.image} />
        </View>
        {/* Title */}

        <Text style={styles.title}>
          One last step to unlock{"\n"}your account
        </Text>

        {/* Subtitle */}

        <Text style={styles.subtitle}>
          We'll guide you through a few simple steps to verify your identity. It
          only takes a few minutes and your data stays protected at every step
        </Text>

        {/* Step 1 */}

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Ionicons name="person" size={22} color="#2F8CD8" />
          </View>

          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>
              Share your personal informations
            </Text>

            <Text style={styles.itemDescription}>
              Share your personal information with us to create your account and
              enjoy a secure experience.
            </Text>
          </View>
        </View>

        {/* Step 2 */}

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Ionicons name="image-outline" size={22} color="#2F8CD8" />
          </View>

          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Upload valid ID documents</Text>

            <Text style={styles.itemDescription}>
              Your ID will be used to verify your identity and keep your account
              secure.
            </Text>
          </View>
        </View>

        {/* Step 3 */}

        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Ionicons name="camera-outline" size={22} color="#2F8CD8" />
          </View>

          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Take a selfie of yourself</Text>

            <Text style={styles.itemDescription}>
              To match your face to your Passport or ID photo.
            </Text>
          </View>
        </View>

        {/* Security Card */}

        <View style={styles.securityCard}>
          <Text style={styles.securityTitle}>Secure Verification</Text>

          <Text style={styles.securityText}>
            Your data is encrypted end-to-end and is never shared with third
            parties without your express consent.
          </Text>
        </View>

        {/* Footer */}

        <View style={styles.footerInfo}>
          <Fontisto name="locked" size={11} color="#898A8D" />

          <Text style={styles.footerInfoText}>
            Your info's will be encrypted and stored securely
          </Text>
        </View>

        {/* Button */}
        <CustomButton
          title="Get Started"
          onPress={() => router.push("/kyc/step1")}
        />

        {/* Skip */}

        <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
          <Text style={styles.skipBottom}>I'll do it later</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
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

  skip: {
    fontSize: 15,
    color: "#9CA3AF",
    fontWeight: "500",
  },

  imageContainer: {
    width: "100%",
    height: 180, // hauteur visible
    overflow: "hidden",
  },

  image: {
    width: "100%",
    marginBottom: -100, // déplace le SVG vers le haut
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 15,
    lineHeight: 40,
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 35,
    paddingHorizontal: 10,
  },

  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },

  itemContent: {
    flex: 1,
    marginLeft: 14,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F3F6F9",
    justifyContent: "center",
    alignItems: "center",
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  itemDescription: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },

  securityCard: {
    backgroundColor: "#EAF6FF",
    borderRadius: 18,
    padding: 18,
    marginTop: 12,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: "#D8EBFA",
  },

  securityTitle: {
    color: "#2F8CD8",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
  },

  securityText: {
    color: "#6B7280",
    lineHeight: 22,
    fontSize: 14,
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

  button: {
    height: 58,
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",

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

  skipBottom: {
    textAlign: "center",
    color: "#2F8CD8",
    marginTop: 20,
    marginBottom: 40,
    fontWeight: "600",
    fontSize: 15,
  },
});
