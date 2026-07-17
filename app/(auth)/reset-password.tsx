import EyeOpenIcon from "@/assets/icons/visibility.svg";
import EyeCloseIcon from "@/assets/icons/visibility_off.svg";
import CustomButton from "@/components/button";
import HeaderTitle from "@/components/header/Header";

import { router } from "expo-router";

import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Ici tu pourras appeler ton API

    router.replace({
      pathname: "/(auth)/success",
      params: {
        text: "Your password has been modified successfully !",
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderTitle
        headerTitle={"Reset Password"}
        onPress={() => router.back()}
      />
      <View style={{ paddingHorizontal: 25, paddingTop: 60 }}>
        {/* Description */}

        <Text style={styles.description}>Enter your new password below</Text>

        {/* Password */}

        <Text style={styles.label}>New Password</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your new password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOpenIcon width={20} height={20} />
            ) : (
              <EyeCloseIcon width={20} height={20} />
            )}
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}

        <Text style={styles.label}>Password Confirm</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm your new password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOpenIcon width={20} height={20} />
            ) : (
              <EyeCloseIcon width={20} height={20} />
            )}
          </TouchableOpacity>
        </View>

        {/* Submit */}

        <CustomButton title="Submit" onPress={handleSubmit} />
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
    marginBottom: 45,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  backIcon: {
    fontSize: 28,
    color: "#111",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  description: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 15,
    marginBottom: 45,
    lineHeight: 24,
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
    borderWidth: 1,
    borderColor: "#DCE8F3",
    borderRadius: 28,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 18,

    marginBottom: 22,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#111",
    marginRight: 12,
  },

  submitButton: {
    height: 58,
    borderRadius: 29,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 35,

    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  submitText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
