import Logo from "@/assets/images/logo.svg";
import CustomButton from "@/components/button";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

const LANGUAGES = [
  { id: "en", label: "English", country: "UNITED STATES" },
  { id: "fr", label: "Français", country: "FRANCE" },
  // { id: "es", label: "Español", country: "ESPAÑA" },
  // { id: "de", label: "Deutsch", country: "DEUTSCHLAND" },
  // { id: "pt", label: "Português", country: "BRASIL" },
  // { id: "ar", label: "العربية", country: "SAUDI ARABIA" },
  // { id: "zh", label: "中文", country: "CHINA" },
  // { id: "hi", label: "हिन्दी", country: "INDIA" },
  // { id: "ru", label: "Русский", country: "RUSSIA" },
  // { id: "ja", label: "日本語", country: "JAPAN" },
];

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  reactLogo: {
    width: 150,
    height: 41,
  },

  content: {
    flex: 1,
  },

  containerText: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },

  footer: {
    paddingBottom: 60,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: "#F3F6FA",
  },

  itemSelected: {
    borderWidth: 2,
    borderColor: "#18c776",
    backgroundColor: "#EAF7FF",
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  code: {
    fontWeight: "600",
    fontSize: 12,
    color: "#1f2937",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  country: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },

  check: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Starting = () => {
  const [selected, setSelected] = useState("en"); // English par défaut

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Logo style={styles.reactLogo} />
      </View>

      {/* Contenu central */}
      <View style={styles.content}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Choose your language</Text>
          <Text>Select your preferred language to continue.</Text>
        </View>

        <FlatList
          data={LANGUAGES}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 20 }}
          renderItem={({ item }) => {
            const isSelected = selected === item.id;

            return (
              <Pressable
                onPress={() => setSelected(item.id)}
                style={[styles.item, isSelected && styles.itemSelected]}
              >
                <View style={styles.circle}>
                  <Text style={styles.code}>{item.id.toUpperCase()}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>{item.label}</Text>
                  <Text style={styles.country}>{item.country}</Text>
                </View>

                {isSelected && (
                  <LinearGradient
                    colors={["#18c776", "#2f8cd8"]}
                    style={styles.check}
                  >
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  </LinearGradient>
                )}
              </Pressable>
            );
          }}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <CustomButton
          title="Continue"
          onPress={() => {
            router.push("/starting/onboarding");
          }}
        />
      </View>
    </View>
  );
};

export default Starting;
