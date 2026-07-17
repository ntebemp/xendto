import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <LinearGradient
      colors={["#20C76F", "#2F8CD8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* Header */}

      <View style={styles.topRow}>
        <View>
          <Text style={styles.label}>Solde disponible</Text>

          <Text style={styles.balance}>
            {showBalance ? "450.00 CAD" : "••••••••"}
          </Text>

          <Text style={styles.currency}>≈ 20.000 XAF</Text>
        </View>

        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          <Ionicons
            name={showBalance ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>

      {/* Buttons */}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="add-circle-outline" size={18} color="#fff" />

          <Text style={styles.buttonText}>Recharger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="document-text-outline" size={18} color="#fff" />

          <Text style={styles.buttonText}>Détails</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 22,

    borderRadius: 22,

    padding: 18,

    shadowColor: "#000",

    shadowOpacity: 0.15,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 5,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  label: {
    color: "rgba(255,255,255,.85)",
    fontSize: 13,
    marginBottom: 6,
  },

  balance: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "700",
  },

  currency: {
    color: "rgba(255,255,255,.85)",
    marginTop: 5,
    fontSize: 14,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  actionButton: {
    width: "47%",

    height: 48,

    borderRadius: 14,

    backgroundColor: "rgba(255,255,255,.25)",

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    marginLeft: 8,
    fontSize: 15,
  },
});
