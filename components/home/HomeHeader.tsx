import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      {/* Logo */}

      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />

      {/* Right */}

      <View style={styles.rightContainer}>
        {/* Language */}

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="globe-outline" size={22} color="#111827" />
        </TouchableOpacity>

        {/* Notification */}

        <TouchableOpacity style={styles.iconButton}>
          <Feather name="bell" size={21} color="#111827" />

          <View style={styles.notificationBadge} />
        </TouchableOpacity>

        {/* Avatar */}

        <TouchableOpacity style={styles.avatar}>
          <View style={styles.avatarCircle}>
            <View style={styles.onlineBadge} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,

    paddingHorizontal: 22,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  logo: {
    width: 115,
    height: 42,

    resizeMode: "contain",
  },

  rightContainer: {
    flexDirection: "row",

    alignItems: "center",
  },

  iconButton: {
    width: 38,
    height: 38,

    justifyContent: "center",

    alignItems: "center",

    marginLeft: 8,
  },

  notificationBadge: {
    position: "absolute",

    top: 7,
    right: 7,

    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: "#FF3B30",
  },

  avatar: {
    marginLeft: 12,
  },

  avatarCircle: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: "#EEF4FA",

    justifyContent: "center",

    alignItems: "center",
  },

  onlineBadge: {
    position: "absolute",

    bottom: 2,
    right: 2,

    width: 10,
    height: 10,

    borderRadius: 5,

    backgroundColor: "#2F8CD8",

    borderWidth: 2,

    borderColor: "#FFF",
  },
});
