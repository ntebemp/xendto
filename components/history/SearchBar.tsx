import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
  onFilterPress?: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  onFilterPress,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#94A3B8" />

        <TextInput
          placeholder="Search transactions..."
          placeholderTextColor="#94A3B8"
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        style={styles.filterButton}
        onPress={onFilterPress}
        activeOpacity={0.8}
      >
        <Ionicons name="options-outline" size={22} color="#2F8CD8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  searchContainer: {
    flex: 1,
    height: 54,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F5F7FB",

    borderRadius: 16,

    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: "#E8EDF5",
  },

  input: {
    flex: 1,

    marginLeft: 10,

    fontSize: 15,

    color: "#111827",
  },

  filterButton: {
    width: 54,
    height: 54,

    marginLeft: 12,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#EEF6FF",

    borderRadius: 16,

    borderWidth: 1,
    borderColor: "#D8E9FB",
  },
});
