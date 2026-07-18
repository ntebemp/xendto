import CalendarIcon from "@/assets/icons/Calendar.svg";
import CustomButton from "@/components/button";
import HeaderTitle from "@/components/header/Header";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function KYCStep1Screen() {
  const [fullName, setFullName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("Cameroon");
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <HeaderTitle
        headerTitle="KYC Verification"
        onPress={() => router.back()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 20, paddingHorizontal: 22 }}
      >
        {/* STEP */}

        <Text style={styles.step}>Step1: Share your personal informations</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <LinearGradient
              colors={["#18C776", "#2F8CD8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progress}
            />
          </View>

          <Text style={styles.progressText}>1/4</Text>
        </View>
        {/* Full name */}

        <Text style={styles.label}>Full Name</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            placeholderTextColor="#444444"
          />
        </View>

        {/* Birthday */}

        <Text style={styles.label}>Birthday Date</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="21/02/1998"
            value={birthday}
            onChangeText={setBirthday}
            style={styles.input}
            placeholderTextColor="#444444"
          />

          <CalendarIcon width={18} height={18} />
        </View>

        {/* Country */}

        <Text style={styles.label}>Country</Text>

        <TouchableOpacity style={styles.inputContainer}>
          <Text style={styles.country}>🇨🇲 Cameroon</Text>
        </TouchableOpacity>

        {/* Town */}

        <Text style={styles.label}>Town</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Douala"
            value={town}
            onChangeText={setTown}
            style={styles.input}
            placeholderTextColor="#444444"
          />
        </View>

        {/* Address */}

        <Text style={styles.label}>Address</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Logpom..."
            value={address}
            onChangeText={setAddress}
            style={styles.input}
            placeholderTextColor="#444444"
          />
        </View>

        {/* Postal */}

        <Text style={styles.label}>Postal Code</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="13615"
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="number-pad"
            style={styles.input}
            placeholderTextColor="#444444"
          />
        </View>

        {/* INFO */}

        <View style={styles.infoCard}>
          <View style={styles.infoIconContainer}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#2F8CD8"
            />
          </View>

          <Text style={styles.infoText}>
            Please make sure the information matches exactly what is on your
            official ID (passport or ID card).
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footerInfo}>
          <Fontisto name="locked" size={11} color="#898A8D" />
          <Text style={styles.footerInfoText}>
            Your data is encrypted and stored securely
          </Text>
        </View>

        {/* Continue */}
        <CustomButton
          title="Continue"
          onPress={() => router.push("/kyc/step2")}
        />

        <TouchableOpacity>
          <Text style={styles.support}>
            Need help ?
            <Text
              style={{
                color: "#2F8CD8",
              }}
            >
              {" "}
              Contact support
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  footerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E7EAF0",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  backIcon: {
    fontSize: 28,
    color: "#222",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  step: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 12,
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  progressBackground: {
    flex: 1,
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 3,
    overflow: "hidden",
  },

  progress: {
    width: "25%",
    height: "100%",
    borderRadius: 3,
  },

  progressText: {
    marginLeft: 12,
    color: "#6B7280",
    fontWeight: "700",
    fontSize: 14,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
    marginTop: 4,
  },

  inputContainer: {
    height: 54,
    borderRadius: 27,

    borderWidth: 1,
    borderColor: "#DCE8F3",

    backgroundColor: "#F5FAFE",

    paddingHorizontal: 16,

    flexDirection: "row",
    alignItems: "center",

    marginBottom: 18,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#111827",
  },

  country: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "500",
  },
  footerInfoText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginLeft: 6,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#EEF2FA",

    borderRadius: 20,

    paddingVertical: 18,
    paddingHorizontal: 18,

    marginTop: 18,
    marginBottom: 24,
  },
  infoIconContainer: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 14,
  },

  infoText: {
    flex: 1,

    marginLeft: 12,

    color: "#6B7280",

    fontSize: 13,

    lineHeight: 20,
  },

  footer: {
    textAlign: "center",

    color: "#9CA3AF",

    fontSize: 12,

    marginBottom: 24,
  },

  button: {
    height: 58,

    borderRadius: 29,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.18,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  buttonText: {
    color: "#FFF",

    fontSize: 18,

    fontWeight: "700",
  },

  support: {
    textAlign: "center",
    marginVertical: 25,
    color: "#6B7280",
    fontSize: 13,
    fontWeight: 600,
  },
});
