import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  amount: string;
  fees: string;
  total: string;
  currency?: string;
}

export default function AmountCard({
  amount,
  fees,
  total,
  currency = "€",
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>TRANSACTION SUMMARY</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Amount Sent</Text>

        <Text style={styles.value}>
          {amount} {currency}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Service Fee</Text>

        <Text style={styles.value}>
          {fees} {currency}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total Debited</Text>

        <Text style={styles.total}>
          {total} {currency}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EEF7FF",

    borderRadius: 16,

    marginHorizontal: 16,
    marginTop: 16,

    padding: 18,

    borderWidth: 1,
    borderColor: "#D7E9FF",
  },

  title: {
    fontSize: 11,
    fontWeight: "700",
    color: "#2F8CD8",
    letterSpacing: 1,
    marginBottom: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 14,
  },

  label: {
    fontSize: 15,
    color: "#64748B",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  divider: {
    height: 1,
    backgroundColor: "#D7E9FF",
    marginVertical: 4,
    marginBottom: 16,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  total: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2F8CD8",
  },
});
