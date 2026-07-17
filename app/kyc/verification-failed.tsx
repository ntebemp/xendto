import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";

import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function VerificationFailed() {
  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.replace("/home")}
        >
          <Ionicons name="close" size={22} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>KYC Verification</Text>

        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ICON */}

        <View style={styles.errorCircle}>
          <Ionicons name="close" size={60} color="#FFF" />
        </View>

        {/* TITLE */}

        <Text style={styles.title}>Verification{"\n"}Failed</Text>

        <Text style={styles.subtitle}>
          Unfortunately we couldn't verify your identity.
        </Text>

        {/* CARD */}

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Possible reasons</Text>

          {[
            "The document is blurry.",
            "The selfie doesn't match the ID.",
            "Poor lighting conditions.",
            "Part of the document is hidden.",
          ].map((item) => (
            <View key={item} style={styles.reasonRow}>
              <MaterialCommunityIcons
                name="close-circle"
                size={18}
                color="#EF4444"
              />

              <Text style={styles.reasonText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* TIPS */}

        <View style={styles.tipCard}>
          <MaterialCommunityIcons
            name="lightbulb-on"
            size={22}
            color="#18C776"
          />

          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.tipTitle}>Tips</Text>

            <Text style={styles.tipText}>
              Make sure your ID is readable, use good lighting and take a clear
              selfie.
            </Text>
          </View>
        </View>

        {/* BUTTON */}

        <Pressable onPress={() => router.replace("/kyc/step1")}>
          <LinearGradient colors={["#18C776", "#2F8CD8"]} style={styles.button}>
            <Text style={styles.buttonText}>Retry Verification</Text>
          </LinearGradient>
        </Pressable>

        {/* SUPPORT */}

        <TouchableOpacity style={styles.supportButton}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={20}
            color="#2F8CD8"
          />

          <Text style={styles.supportText}>Contact Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingBottom: 18,

    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },

  closeButton: {
    width: 38,
    height: 38,

    borderRadius: 19,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFF",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  errorCircle: {
    width: 90,
    height: 90,

    borderRadius: 45,

    backgroundColor: "#EF4444",

    alignSelf: "center",

    justifyContent: "center",
    alignItems: "center",

    marginTop: 35,

    shadowColor: "#EF4444",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 6,
  },

  title: {
    marginTop: 24,

    textAlign: "center",

    fontSize: 33,

    fontWeight: "700",

    color: "#111827",

    lineHeight: 42,
  },

  subtitle: {
    marginTop: 12,

    textAlign: "center",

    color: "#6B7280",

    lineHeight: 22,

    paddingHorizontal: 35,

    marginBottom: 28,
  },

  card: {
    backgroundColor: "#FFF",

    marginHorizontal: 22,

    borderRadius: 18,

    padding: 20,

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  cardTitle: {
    fontWeight: "700",

    fontSize: 17,

    color: "#111827",

    marginBottom: 16,
  },

  reasonRow: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 14,
  },

  reasonText: {
    marginLeft: 12,

    color: "#374151",

    fontSize: 14,

    flex: 1,

    lineHeight: 20,
  },

  tipCard: {
    marginHorizontal: 22,

    marginTop: 24,

    backgroundColor: "#F0FFF6",

    borderRadius: 16,

    padding: 18,

    flexDirection: "row",

    borderLeftWidth: 4,

    borderLeftColor: "#18C776",
  },

  tipTitle: {
    fontWeight: "700",

    color: "#18C776",

    marginBottom: 5,

    fontSize: 15,
  },

  tipText: {
    color: "#4B5563",

    lineHeight: 20,

    fontSize: 13,
  },

  button: {
    height: 58,

    marginHorizontal: 22,

    marginTop: 30,

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

  supportButton: {
    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    marginTop: 25,

    marginBottom: 35,
  },

  supportText: {
    marginLeft: 8,

    color: "#2F8CD8",

    fontWeight: "600",

    fontSize: 16,
  },
});
