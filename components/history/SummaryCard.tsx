import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  balance?: string;
  income?: string;
  expense?: string;
  transactions?: number;
};

export default function SummaryCard({
  balance = "€3,284.75",
  income = "+€1,540.00",
  expense = "-€895.25",
  transactions = 28,
}: Props) {
  return (
    <LinearGradient
      colors={["#18C776", "#2F8CD8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.label}>Total Balance</Text>

          <Text style={styles.balance}>{balance}</Text>
        </View>

        <View style={styles.iconContainer}>
          <Feather name="credit-card" size={24} color="#FFF" />
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Income</Text>

          <Text style={styles.income}>{income}</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statLabel}>Expenses</Text>

          <Text style={styles.expense}>{expense}</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statLabel}>Transactions</Text>

          <Text style={styles.transactions}>{transactions}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 22,
    marginBottom: 28,
    elevation: 5,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
    marginBottom: 6,
  },

  balance: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
  },

  separator: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.20)",
    marginVertical: 22,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stat: {
    flex: 1,
  },

  statLabel: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    marginBottom: 6,
  },

  income: {
    color: "#D9FFE8",
    fontSize: 18,
    fontWeight: "700",
  },

  expense: {
    color: "#FFE2E2",
    fontSize: 18,
    fontWeight: "700",
  },

  transactions: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
