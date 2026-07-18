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

export default function TransactionPendingScreen() {
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

        {/* Pending Icon */}

        <LinearGradient
          colors={["#F59E0B", "#FBBF24"]}
          style={styles.pendingCircle}
        >
          <Ionicons name="time-outline" size={46} color="#FFF" />
        </LinearGradient>

        <Text style={styles.pendingTitle}>Transfer Pending</Text>

        <Text style={styles.pendingSubtitle}>
          Your transfer is currently being processed.
        </Text>

        <Text style={styles.amount}>€85.00</Text>

        <View style={styles.card}>
          <InfoRow label="Recipient" value="Sarah Connor" />

          <InfoRow label="Bank" value="ING Luxembourg" />

          <InfoRow label="Transaction ID" value="TRX-784569123" />

          <InfoRow label="Date" value="15 Jul 2026" />

          <InfoRow label="Time" value="18:45" />

          <InfoRow label="Payment Method" value="Visa **** 2841" />

          <InfoRow label="Status" value="Pending" pending />
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Ionicons name="refresh-outline" size={20} color="#FFF" />

          <Text style={styles.primaryButtonText}>Refresh Status</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Ionicons name="help-circle-outline" size={20} color="#F59E0B" />

          <Text style={styles.secondaryButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
  pending?: boolean;
};

function InfoRow({ label, value, pending = false }: InfoRowProps) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>

      <Text style={[styles.infoValue, pending && styles.pendingValue]}>
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

  pendingCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,

    shadowColor: "#F59E0B",
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 6,
  },

  pendingTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  pendingSubtitle: {
    textAlign: "center",
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
    paddingHorizontal: 24,
    lineHeight: 22,
  },

  pendingValue: {
    color: "#F59E0B",
    fontWeight: "700",
  },
});
