import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TransferHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color="#111827" />
      </TouchableOpacity>

      <Text style={styles.title}>Send Money</Text>

      <View style={{ width: 22 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingHorizontal: 18,

    backgroundColor: "#FFF",

    borderBottomWidth: 1,

    borderBottomColor: "#ECECEC",
  },

  title: {
    fontSize: 17,

    fontWeight: "700",

    color: "#111827",
  },
});
