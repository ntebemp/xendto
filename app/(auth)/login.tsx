import EnvelopeIcon from "@/assets/icons/Envelope.svg";
import PhoneIcon from "@/assets/icons/Phone.svg";
import EyeOpenIcon from "@/assets/icons/visibility.svg";
import EyeCloseIcon from "@/assets/icons/visibility_off.svg";
import CustomButton from "@/components/button";
import CountryPicker from "@/components/CountryPicker";

import { router } from "expo-router";

import React, { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [remember, setRemember] = useState(false);

  const [country, setCountry] = useState({
    value: "CM",
    code: "+237",
  });

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Welcome Back</Text>

      <Text style={styles.subtitle}>
        Login to continue sending money
        {"\n"}
        safely across the world.
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Google / Apple */}

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("@/assets/images/google-logo.png")}
              style={styles.socialIcon}
            />

            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("@/assets/images/apple-logo.png")}
              style={styles.socialIcon}
            />

            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}

        <View style={styles.dividerContainer}>
          <View style={styles.line} />

          <Text style={styles.dividerText}>Or continue with</Text>

          <View style={styles.line} />
        </View>

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

        {/* Phone */}

        <Text style={styles.label}>Phone Number:</Text>
        <View style={styles.inputContainer}>
          <CountryPicker onChange={(item) => setCountry(item)} />
          <TextInput
            placeholder="Phone number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
          <Text>
            <PhoneIcon width={20} height={20} />
          </Text>
        </View>

        {/* Password */}

        <Text style={styles.label}>Password</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="**************"
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

        {/* Remember */}

        <View style={styles.optionsRow}>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setRemember(!remember)}
          >
            <View style={styles.checkbox}>
              {remember && <View style={styles.checked} />}
            </View>

            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/forgot-password")}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login */}

        <CustomButton
          title="Login"
          onPress={() => router.replace("/kyc/kyc")}
        />
        {/* Footer */}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => router.push("/(auth)/register")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 20,
  },

  logo: {
    width: 140,
    height: 45,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 22,
    fontSize: 15,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingRight: 5,
    paddingLeft: 5,
  },

  socialButton: {
    width: "47%",
    height: 55,
    borderRadius: 14,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  socialText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  dividerText: {
    marginHorizontal: 12,
    color: "#777",
    fontSize: 14,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDD",
  },

  label: {
    marginBottom: 8,
    color: "#111",
    fontWeight: "500",
    fontSize: 15,
  },

  inputContainer: {
    height: 55,
    backgroundColor: "#F2F7FC",
    borderWidth: 1,
    borderColor: "#DCE8F3",
    borderRadius: 28,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },

  input: {
    flex: 1,
  },

  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 25,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#AAA",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  checked: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: "#18C776",
  },

  rememberText: {
    color: "#555",
    fontSize: 14,
  },

  forgotText: {
    color: "#2F8CD8",
    fontWeight: "600",
    fontSize: 14,
  },

  loginButton: {
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

  loginText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  footer: {
    marginTop: 30,
    alignItems: "center",
    paddingBottom: 30,
  },

  footerText: {
    color: "#666",
    fontSize: 15,
  },

  link: {
    color: "#2F8CD8",
    fontWeight: "600",
  },
});
