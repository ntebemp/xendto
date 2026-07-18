import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function TransactionFailedScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Transaction Details</Text>

          <View style={{ width: 42 }} />
        </View>

        {/* Failed Icon */}

        <LinearGradient
          colors={["#EF4444", "#F87171"]}
          style={styles.failedCircle}
        >
          <Ionicons name="close" size={48} color="#FFF" />
        </LinearGradient>

        <Text style={styles.failedTitle}>Transfer Failed</Text>

        <Text style={styles.failedSubtitle}>
          We couldn't complete your transfer. Please try again or contact
          support.
        </Text>

        <Text style={styles.amount}>€16.20</Text>

        <View style={styles.card}>
          <InfoRow label="Recipient" value="Uber Eats" />

          <InfoRow label="Transaction ID" value="TRX-965874123" />

          <InfoRow label="Date" value="15 Jul 2026" />

          <InfoRow label="Time" value="12:30" />

          <InfoRow label="Payment Method" value="Visa **** 2841" />

          <InfoRow label="Reason" value="Insufficient balance" />

          <InfoRow label="Status" value="Failed" failed />
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Ionicons name="refresh-outline" size={20} color="#FFF" />

          <Text style={styles.primaryButtonText}>Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Ionicons name="call-outline" size={20} color="#EF4444" />

          <Text style={styles.secondaryButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
  failed?: boolean;
};

function InfoRow({ label, value, failed = false }: InfoRowProps) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>

      <Text style={[styles.infoValue, failed && styles.failedValue]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  successCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,

    shadowColor: "#22C55E",
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 6,
  },

  successTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  successSubtitle: {
    textAlign: "center",
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
    paddingHorizontal: 25,
    lineHeight: 22,
  },

  amount: {
    textAlign: "center",
    fontSize: 38,
    fontWeight: "800",
    color: "#16C47F",
    marginTop: 26,
    marginBottom: 28,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 22,
    marginBottom: 30,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 3,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 15,

    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  infoLabel: {
    color: "#64748B",
    fontSize: 15,
  },

  infoValue: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "600",
    maxWidth: "55%",
    textAlign: "right",
  },

  successValue: {
    color: "#16C47F",
    fontWeight: "700",
  },

  primaryButton: {
    height: 58,

    borderRadius: 18,

    backgroundColor: "#2F8CD8",

    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 16,
  },

  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },

  secondaryButton: {
    height: 58,

    borderRadius: 18,

    borderWidth: 1.5,
    borderColor: "#2F8CD8",

    backgroundColor: "#FFF",

    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#2F8CD8",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
  failedCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,

    shadowColor: "#EF4444",
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 6,
  },

  failedTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  failedSubtitle: {
    textAlign: "center",
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
    paddingHorizontal: 24,
    lineHeight: 22,
  },

  failedValue: {
    color: "#EF4444",
    fontWeight: "700",
  },
});
