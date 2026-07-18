import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  initials: string;
  name: string;
  phone: string;
}

export default function RecentRecipientCard({ initials, name, phone }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>{initials}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.phone}>{phone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 82,

    alignItems: "center",
  },

  avatar: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: "#D7ECFA",

    justifyContent: "center",
    alignItems: "center",
  },

  initials: {
    color: "#2563EB",
    fontWeight: "700",
  },

  name: {
    marginTop: 8,

    fontSize: 11,

    fontWeight: "600",
  },

  phone: {
    fontSize: 10,

    color: "#64748B",

    textAlign: "center",
  },
});
