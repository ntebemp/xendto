import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const tabs = ["All", "Completed", "Pending", "Failed"];

export default function FilterTabs({ value, onChange }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {tabs.map((tab) => {
        const active = value === tab;

        return (
          <TouchableOpacity
            key={tab}
            activeOpacity={0.85}
            style={[styles.tab, active && styles.activeTab]}
            onPress={() => onChange(tab)}
          >
            <Text style={[styles.text, active && styles.activeText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },

  tab: {
    paddingHorizontal: 22,
    height: 42,

    borderRadius: 21,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,

    backgroundColor: "#F3F5F8",

    borderWidth: 1,
    borderColor: "#E8EDF5",
  },

  activeTab: {
    backgroundColor: "#2F8CD8",
    borderColor: "#2F8CD8",
  },

  text: {
    color: "#64748B",
    fontSize: 14,
    fontWeight: "600",
  },

  activeText: {
    color: "#FFF",
    fontWeight: "700",
  },
});
