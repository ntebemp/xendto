import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export default function RegisterScreen({ onPress }: ButtonProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [accepted, setAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Create an Account</Text>

      <Text style={styles.subtitle}>
        Join thousands of users sending money
        {"\n"}
        across borders with zero hassle.
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("@/assets/images/google-logo.png")}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("@/assets/images/apple-logo.png")}
              style={{ width: 20, height: 20, marginRight: 8 }}
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

        {/* Full Name */}
        <Text style={styles.label}>Full Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="John Owono"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
          />
          <Text>👤</Text>
        </View>

        {/* Email */}
        <Text style={styles.label}>Email Address:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="example@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <Text>✉️</Text>
        </View>

        {/* Phone */}
        <Text style={styles.label}>Phone Number:</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>🇨🇲 ▼</Text>

          <TextInput
            placeholder="+237"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={[styles.input, { marginLeft: 10 }]}
          />
          <Text>📞</Text>
        </View>

        {/* Password */}
        <Text style={styles.label}>Password:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="****************"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <Text>👁️</Text>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>Password Confirm:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="****************"
            secureTextEntry
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            style={styles.input}
          />
          <Text>👁️</Text>
        </View>

        {/* Terms */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setAccepted(!accepted)}
        >
          <View style={styles.checkbox}>
            {accepted && <View style={styles.checked} />}
          </View>

          <Text style={styles.termsText}>
            I have read and accept the{" "}
            <Text style={styles.link}>Terms & Conditions</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        {/* Register */}
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [styles.container, pressed && styles.pressed]}
        >
          <LinearGradient
            colors={["#18C776", "#244e9b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.registerButton}
          >
            <Text style={styles.registerText}>Register</Text>
          </LinearGradient>
        </Pressable>

        {/* Sign In */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Have an account?{" "}
            <Text style={styles.link} onPress={() => router.push("/login")}>
              Sign in
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
    textAlign: "center",
    color: "#111",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 22,
  },

  label: {
    marginBottom: 8,
    fontWeight: "500",
    color: "#111",
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

  countryCode: {
    fontWeight: "600",
  },

  checkboxRow: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#999",
    marginRight: 10,
    marginTop: 2,
  },

  checked: {
    flex: 1,
    backgroundColor: "#18C776",
  },

  termsText: {
    flex: 1,
    fontSize: 12,
    color: "#555",
  },

  link: {
    color: "#2F8CD8",
  },

  registerButton: {
    height: 58,
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 3,
  },

  registerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDD",
  },

  dividerText: {
    marginHorizontal: 10,
    color: "#777",
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

  socialText: {
    fontSize: 16,
    fontWeight: "500",
  },

  footer: {
    marginTop: 25,
    alignItems: "center",
    paddingBottom: 30,
  },

  footerText: {
    color: "#666",
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
