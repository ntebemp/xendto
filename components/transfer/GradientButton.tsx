import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function GradientButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <LinearGradient
        colors={["#19D17D", "#3498DB"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,

    marginHorizontal: 18,

    marginTop: 24,

    borderRadius: 28,

    justifyContent: "center",
    alignItems: "center",

    elevation: 4,
  },

  text: {
    color: "#FFF",

    fontSize: 17,

    fontWeight: "700",
  },
});
