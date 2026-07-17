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

export default function VerificationSuccess() {
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
        {/* SUCCESS ICON */}

        <View style={styles.successCircle}>
          <Ionicons name="checkmark-circle" size={58} color="white" />
        </View>

        <Text style={styles.title}>Verification{"\n"}approved</Text>

        <Text style={styles.subtitle}>
          Your identity has been successfully verified. You can now take
          advantage of all the features.
        </Text>

        {/* ACCOUNT STATUS */}

        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Ionicons name="shield-checkmark" size={26} color="#18C776" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.statusLabel}>ACCOUNT STATUS</Text>

            <Text style={styles.statusValue}>Verified Account</Text>
          </View>
        </View>

        {/* LIMITS */}

        <View style={styles.limitCard}>
          <Text style={styles.limitTitle}>New Limits</Text>

          <View style={styles.limitRow}>
            <MaterialCommunityIcons
              name="bank-transfer"
              size={18}
              color="#2F8CD8"
            />

            <Text style={styles.limitLabel}>Daily transfer</Text>

            <Text style={styles.limitValue}>€5 000</Text>
          </View>

          <View style={styles.limitRow}>
            <Ionicons name="wallet-outline" size={18} color="#2F8CD8" />

            <Text style={styles.limitLabel}>Monthly limit</Text>

            <Text style={styles.limitValue}>€25 000</Text>
          </View>

          <View style={styles.limitRow}>
            <Ionicons name="flash-outline" size={18} color="#2F8CD8" />

            <Text style={styles.limitLabel}>Transfer speed</Text>

            <Text
              style={[
                styles.limitValue,
                {
                  color: "#18C776",
                },
              ]}
            >
              Instant
            </Text>
          </View>
        </View>

        {/* PROMO */}

        <LinearGradient
          colors={["#2F8CD8", "#4AA7F8"]}
          style={styles.promoCard}
        >
          <Text style={styles.promoSmall}>Ready for your first transfer?</Text>

          <Text style={styles.promoTitle}>
            Zero fees on your{"\n"}
            first transfer
          </Text>
        </LinearGradient>

        {/* BUTTON */}

        <Pressable onPress={() => router.replace("/home")}>
          <LinearGradient colors={["#18C776", "#2F8CD8"]} style={styles.button}>
            <Text style={styles.buttonText}>Start to send</Text>
          </LinearGradient>
        </Pressable>
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
    alignItems: "center",
    justifyContent: "space-between",
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

  successCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 35,
    marginBottom: 25,

    backgroundColor: "#18C776",

    shadowColor: "#18C776",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
    lineHeight: 42,
  },

  subtitle: {
    marginTop: 15,
    textAlign: "center",
    color: "#6B7280",
    lineHeight: 23,
    paddingHorizontal: 35,
    marginBottom: 30,
  },

  statusCard: {
    marginHorizontal: 22,

    backgroundColor: "#FFF",

    borderRadius: 16,

    padding: 18,

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  statusIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,

    backgroundColor: "#F1FFF7",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 15,
  },

  statusLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#18C776",
    marginBottom: 4,
  },

  statusValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  limitCard: {
    marginTop: 25,
    marginHorizontal: 22,

    backgroundColor: "#EFF7FF",

    borderRadius: 16,

    padding: 18,
  },

  limitTitle: {
    fontWeight: "700",
    fontSize: 18,
    color: "#111827",
    marginBottom: 18,
  },

  limitRow: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFF",

    borderRadius: 12,

    padding: 14,

    marginBottom: 12,
  },

  limitLabel: {
    flex: 1,

    marginLeft: 10,

    color: "#374151",

    fontSize: 14,
  },

  limitValue: {
    fontWeight: "700",
    color: "#111827",
    fontSize: 15,
  },

  promoCard: {
    marginHorizontal: 22,

    marginTop: 24,

    borderRadius: 16,

    padding: 18,
  },

  promoSmall: {
    color: "#DCEEFF",
    fontSize: 12,
    marginBottom: 6,
  },

  promoTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
  },

  button: {
    height: 58,

    marginHorizontal: 22,

    marginTop: 28,

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
});
