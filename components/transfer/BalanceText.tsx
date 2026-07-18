import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  balance: string;
}

export default function BalanceText({ balance }: Props) {
  return (
    <Text style={styles.text}>
      Your remaining balance:
      <Text style={styles.amount}> {balance}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,

    marginTop: 18,

    color: "#374151",

    fontSize: 14,
  },

  amount: {
    fontWeight: "700",
  },
});
