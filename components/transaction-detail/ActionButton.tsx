import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

interface Props {
  icon: IconName;
  title: string;
  color?: string;
  onPress?: () => void;
}

export default function ActionButton({
  icon,
  title,
  color = "#fff",
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.container}
      onPress={onPress}
    >
      <LinearGradient
        colors={["#18C776", "#2F8CD8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.circle}
      >
        <View>
          <Ionicons name={icon} size={24} color={color} />
        </View>
      </LinearGradient>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 90,
  },

  circle: {
    width: 62,
    height: 62,
    borderRadius: 31,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#EEF2F7",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  title: {
    marginTop: 10,
    fontSize: 13,
    color: "#475569",
    textAlign: "center",
    fontWeight: "500",
  },
});
