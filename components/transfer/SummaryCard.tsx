import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Item {
  label: string;
  value: string;
}

interface Props {
  title: string;
  items: Item[];
}

export default function SummaryCard({ title, items }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      {items.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>

          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#EEF2F7",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  label: {
    color: "#64748B",
    fontSize: 14,
  },

  value: {
    fontWeight: "700",
    color: "#111827",
    fontSize: 14,
  },
});
