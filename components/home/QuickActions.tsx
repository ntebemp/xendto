import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const actions = [
  {
    title: "Transfer",
    icon: <Ionicons name="paper-plane-outline" size={22} color="#2F8CD8" />,
  },
  {
    title: "School",
    icon: <Ionicons name="school-outline" size={22} color="#2F8CD8" />,
  },
  {
    title: "Invoices",
    icon: <Feather name="file-text" size={22} color="#2F8CD8" />,
  },
  {
    title: "Scanner",
    icon: (
      <MaterialCommunityIcons name="qrcode-scan" size={22} color="#2F8CD8" />
    ),
  },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>Actions rapides</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>Tout afficher</Text>
        </TouchableOpacity>
      </View>

      {/* Actions */}

      <View style={styles.actionsRow}>
        {actions.map((item) => (
          <TouchableOpacity key={item.title} style={styles.action}>
            <View style={styles.iconCircle}>{item.icon}</View>

            <Text style={styles.actionText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  seeAll: {
    fontSize: 13,
    color: "#2F8CD8",
    fontWeight: "600",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    alignItems: "center",
    width: 72,
  },

  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#F2F7FC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  actionText: {
    fontSize: 12,
    color: "#374151",
    textAlign: "center",
  },
});
