import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  limit: string;
}

export default function LimitCard({ limit }: Props) {
  return (
    <View style={styles.card}>
      <Ionicons name="information-circle" size={18} color="#3B82F6" />

      <Text style={styles.text}>
        Transaction limit:
        <Text style={styles.bold}> {limit}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 18,
    marginTop: 18,

    backgroundColor: "#F4F7FB",

    borderRadius: 12,

    padding: 14,

    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    marginLeft: 10,
    color: "#64748B",
    fontSize: 13,
  },

  bold: {
    fontWeight: "700",
    color: "#111827",
  },
});
