import EnvelopeIcon from "@/assets/icons/Envelope.svg";
import CustomButton from "@/components/button";
import HeaderTitle from "@/components/header/Header";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    // Tu pourras appeler ton API ici
    router.push("/(auth)/otp-email");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderTitle
        headerTitle={"Forgot Password"}
        onPress={() => router.back()}
      />

      {/* Illustration */}
      <View style={{ paddingHorizontal: 25, paddingTop: 60 }}>
        <Text style={styles.description}>
          Enter your email address and we'll send
          {"\n"}
          you a verification code.
        </Text>

        {/* Email */}

        <Text style={styles.label}>Email Address</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="example@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <EnvelopeIcon width={20} height={20} />
        </View>

        {/* Continue */}

        <CustomButton title="Continue" onPress={handleContinue} />
      </View>
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
    marginBottom: 30,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },

  backIcon: {
    fontSize: 28,
    color: "#111",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 25,
  },

  description: {
    textAlign: "center",
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 35,
    fontSize: 15,
  },

  label: {
    marginBottom: 8,
    color: "#111",
    fontWeight: "500",
    fontSize: 15,
  },

  inputContainer: {
    height: 56,
    backgroundColor: "#F5F9FD",
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#DCE8F3",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 35,
  },

  input: {
    flex: 1,
  },

  button: {
    height: 58,
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
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
    fontWeight: "600",
  },
});
