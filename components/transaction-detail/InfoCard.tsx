import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type IconName = "card-outline" | "person-outline";

interface Props {
  title: string;
  icon: IconName;
  name: string;
  subtitle: string;
}

export default function InfoCard({ title, icon, name, subtitle }: Props) {
  return (
    <View style={styles.card}>
      {/* Header */}

      <View style={styles.header}>
        <Ionicons name={icon} size={14} color="#6B7280" />

        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* Content */}

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    borderWidth: 1,
    borderColor: "#3A3A3A",

    marginHorizontal: 16,
    marginTop: 12,

    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 18,
  },

  headerText: {
    marginLeft: 6,

    fontSize: 11,

    fontWeight: "700",

    color: "#5F6368",

    letterSpacing: 0.6,
  },

  name: {
    fontSize: 18,

    fontWeight: "700",

    color: "#222",
  },

  subtitle: {
    marginTop: 4,

    fontSize: 15,

    color: "#6B7280",
  },
});
