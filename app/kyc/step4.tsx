import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomButton from "@/components/button";
import HeaderTitle from "@/components/header/Header";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function KYCStep4() {
  const statuses = "pending";
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderTitle
        headerTitle={"KYC Verification"}
        onPress={() => router.back()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 20 }}
      >
        {/* Step */}

        <Text style={styles.stepTitle}>Step4 : Verification complete!</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <LinearGradient
              colors={["#18C776", "#2F8CD8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progress}
            />
          </View>

          <Text style={styles.progressText}>4/4</Text>
        </View>

        {/* Illustration */}

        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="timer-sand" size={46} color="#C68A00" />
        </View>

        <Text style={styles.title}>
          Your verification is currently being reviewed.
        </Text>

        <Text style={styles.subtitle}>
          We are reviewing your documents. This process usually takes between 1
          and 24 hours.
        </Text>

        {/* STATUS */}

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>STATUS</Text>

            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>
                {statuses === "pending"
                  ? "Pending"
                  : statuses === "approved"
                    ? "Approved"
                    : "Rejected"}
              </Text>
            </View>
          </View>

          <Text style={styles.cardText}>
            Your identity is currently being verified by our compliance team.
          </Text>

          <View style={styles.separator} />

          <Text style={styles.cardFooter}>
            Current stage : Documents verification.
          </Text>
        </View>

        {/* DOCUMENTS */}

        <Text style={styles.sectionTitle}>Submitted documents</Text>

        <View style={styles.documentCard}>
          <Ionicons name="document-text" size={24} color="#18C776" />

          <View style={styles.documentInfo}>
            <Text style={styles.documentTitle}>Identification document</Text>

            <Text style={styles.documentDate}>Submitted today</Text>
          </View>

          <Ionicons name="checkmark-circle" size={22} color="#18C776" />
        </View>

        <View style={styles.documentCard}>
          <Ionicons name="person" size={24} color="#18C776" />

          <View style={styles.documentInfo}>
            <Text style={styles.documentTitle}>Verification selfie</Text>

            <Text style={styles.documentDate}>Submitted today</Text>
          </View>

          <Ionicons name="checkmark-circle" size={22} color="#18C776" />
        </View>

        <View style={styles.documentCardDisabled}>
          <Ionicons name="home" size={24} color="#A0AEC0" />

          <View style={styles.documentInfo}>
            <Text style={[styles.documentTitle, { color: "#A0AEC0" }]}>
              Proof of address
            </Text>

            <Text style={styles.documentDate}>Not required</Text>
          </View>

          <Ionicons name="lock-closed" size={18} color="#A0AEC0" />
        </View>

        {/* Notification */}

        <View style={styles.notification}>
          <Ionicons name="notifications-outline" size={22} color="#2F8CD8" />

          <View
            style={{
              flex: 1,
              marginLeft: 12,
            }}
          >
            <Text style={styles.notificationTitle}>Notifications enabled</Text>

            <Text style={styles.notificationText}>
              We will notify you as soon as your account has been approved.
            </Text>
          </View>
        </View>

        {/* Button */}
        <View style={{ marginHorizontal: 22 }}>
          <CustomButton
            title="Continue to Home"
            onPress={() => router.push("/home")}
          />
        </View>

        <Text style={styles.support}>
          Need help ?
          <Text
            style={{
              color: "#2F8CD8",
            }}
          >
            {" "}
            Contact support
          </Text>
        </Text>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
    zIndex: 9999,
  },

  backButton: {
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

  stepTitle: {
    marginTop: 18,
    marginHorizontal: 22,
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 22,
    marginTop: 10,
  },

  progressBackground: {
    flex: 1,
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 5,
    overflow: "hidden",
  },

  progress: {
    width: "100%",
    height: "100%",
  },

  progressText: {
    marginLeft: 12,
    fontWeight: "700",
    color: "#111827",
  },

  iconCircle: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "#FFF6D6",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 25,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
    paddingHorizontal: 30,
  },

  subtitle: {
    marginTop: 12,
    textAlign: "center",
    color: "#6B7280",
    lineHeight: 22,
    paddingHorizontal: 30,
    marginBottom: 28,
  },

  card: {
    backgroundColor: "#FFF",

    marginHorizontal: 22,

    borderRadius: 16,

    padding: 18,

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },

  pendingBadge: {
    backgroundColor: "#FFF2D5",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },

  pendingText: {
    color: "#D97706",
    fontWeight: "700",
    fontSize: 12,
  },

  cardText: {
    marginTop: 15,
    color: "#6B7280",
    lineHeight: 21,
  },

  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 15,
  },

  cardFooter: {
    fontWeight: "600",
    color: "#111827",
  },

  sectionTitle: {
    marginHorizontal: 22,
    marginTop: 25,
    marginBottom: 15,
    fontWeight: "700",
    fontSize: 17,
    color: "#111827",
  },

  documentCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F8FBFE",

    marginHorizontal: 22,

    padding: 15,

    borderRadius: 15,

    marginBottom: 12,
  },

  documentCardDisabled: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F6F7F8",

    marginHorizontal: 22,

    padding: 15,

    borderRadius: 15,

    marginBottom: 18,
  },

  documentInfo: {
    flex: 1,
    marginLeft: 15,
  },

  documentTitle: {
    fontWeight: "700",
    color: "#111827",
    marginBottom: 3,
  },

  documentDate: {
    color: "#6B7280",
    fontSize: 12,
  },

  notification: {
    flexDirection: "row",

    marginHorizontal: 22,

    backgroundColor: "#EFF7FF",

    borderRadius: 15,

    padding: 18,

    borderLeftWidth: 4,

    borderLeftColor: "#2F8CD8",

    marginBottom: 28,
  },

  notificationTitle: {
    fontWeight: "700",
    color: "#111827",
    marginBottom: 5,
  },

  notificationText: {
    color: "#6B7280",
    lineHeight: 20,
    fontSize: 13,
  },

  button: {
    height: 58,
    marginHorizontal: 22,
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },

  support: {
    textAlign: "center",
    marginVertical: 25,
    color: "#6B7280",
    fontSize: 13,
    fontWeight: 600,
  },
});
