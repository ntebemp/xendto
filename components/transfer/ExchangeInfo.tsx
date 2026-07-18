import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ExchangeInfo() {
  return (
    <View style={styles.card}>
      <View style={styles.leftBar} />

      <View style={styles.content}>
        <Row text="Official Market Rate" value="1 EUR = 655.957 XOF" />

        <Row text="XendTo Rate" value="1 CAD = 448.24 XOF" />

        <Row text="Transfer Fee" value="2.99 CAD" />
      </View>
    </View>
  );
}

function Row({ text, value }: { text: string; value: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <Ionicons name="information-circle" size={14} color="#60A5FA" />

        <Text style={styles.text}>{text}</Text>
      </View>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",

    marginHorizontal: 24,

    marginBottom: 18,
  },

  leftBar: {
    width: 3,

    borderRadius: 2,

    backgroundColor: "#1FC7A1",

    marginRight: 10,
  },

  content: {
    flex: 1,
  },

  row: {
    marginBottom: 10,
  },

  rowLeft: {
    flexDirection: "row",

    alignItems: "center",
  },

  text: {
    marginLeft: 6,

    fontSize: 12,

    color: "#64748B",
  },

  value: {
    marginLeft: 20,

    marginTop: 2,

    fontWeight: "700",

    color: "#111827",

    fontSize: 12,
  },
});
