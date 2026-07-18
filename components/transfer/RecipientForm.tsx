import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function RecipientForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>

      <View style={styles.input}>
        <TextInput
          placeholder="John Owono"
          placeholderTextColor="#94A3B8"
          style={styles.textInput}
        />

        <Ionicons name="person" color="#1FC7A1" size={18} />
      </View>

      <Text style={[styles.label, { marginTop: 18 }]}>Phone Number</Text>

      <View style={styles.input}>
        <Text style={styles.flag}>🇨🇲</Text>

        <Text style={styles.countryCode}>+237</Text>

        <TextInput
          placeholder="6 77 12 34 56"
          keyboardType="phone-pad"
          style={[styles.textInput, { marginLeft: 10 }]}
        />

        <Ionicons name="call" size={18} color="#1FC7A1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 8,
  },

  input: {
    height: 52,

    backgroundColor: "#EFF7FD",

    borderRadius: 26,

    paddingHorizontal: 16,

    flexDirection: "row",

    alignItems: "center",
  },

  textInput: {
    flex: 1,

    fontSize: 14,

    marginLeft: 10,
  },

  flag: {
    fontSize: 18,
  },

  countryCode: {
    marginLeft: 8,
    fontWeight: "600",
  },
});
