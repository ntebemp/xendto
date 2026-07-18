import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  onPress?: () => void;
  backgroundColor?: string;
}

export default function BottomButton({
  title,
  icon = "repeat-outline",
  onPress,
  backgroundColor = "#2F8CD8",
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.button,
        {
          backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={22} color="#FFF" />

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,

    marginHorizontal: 16,
    marginBottom: 30,

    borderRadius: 18,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#2F8CD8",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 5,
  },

  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
});
