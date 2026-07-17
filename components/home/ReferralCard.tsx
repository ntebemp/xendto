import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ReferralCard() {
  return (
    <LinearGradient
      colors={["#EAF5FF", "#DDEFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Left */}

      <View style={styles.left}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons
            name="gift-outline"
            size={42}
            color="#18C776"
          />
        </View>
      </View>

      {/* Right */}

      <View style={styles.right}>
        <Text style={styles.title}>Earn €10 for every{"\n"}friend invited</Text>

        <Text style={styles.subtitle}>
          Share your referral code and receive a bonus after their first
          transfer.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share my code</Text>

          <Ionicons name="arrow-forward" size={18} color="#FFF" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 28,

    borderRadius: 22,

    padding: 20,

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  left: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },

  iconCircle: {
    width: 78,
    height: 78,

    borderRadius: 39,

    backgroundColor: "#FFFFFF",

    justifyContent: "center",

    alignItems: "center",
  },

  right: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",

    color: "#111827",

    lineHeight: 28,
  },

  subtitle: {
    marginTop: 8,

    color: "#4B5563",

    lineHeight: 21,

    fontSize: 13,
  },

  button: {
    marginTop: 18,

    alignSelf: "flex-start",

    backgroundColor: "#2F8CD8",

    borderRadius: 25,

    paddingHorizontal: 18,

    height: 42,

    flexDirection: "row",

    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",

    fontWeight: "700",

    marginRight: 8,

    fontSize: 14,
  },
});
