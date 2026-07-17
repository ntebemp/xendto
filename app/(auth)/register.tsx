import EnvelopeIcon from "@/assets/icons/Envelope.svg";
import PhoneIcon from "@/assets/icons/Phone.svg";
import UserIcon from "@/assets/icons/Profile.svg";
import EyeIcon from "@/assets/icons/visibility.svg";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [country, setCountry] = useState({
    value: "CM",
    code: "+237",
  });

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
          <Text>
            <UserIcon width={20} height={20} />
          </Text>
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
          <Text>
            <EnvelopeIcon width={20} height={20} />
          </Text>
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
        <Text style={styles.label}>Password:</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeIcon width={20} height={20} />
            ) : (
              <EyeCloseIcon width={20} height={20} />
            )}
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>Password Confirm:</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Confirm your password"
            secureTextEntry={!showConfirmPassword}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeIcon width={20} height={20} />
            ) : (
              <EyeCloseIcon width={20} height={20} />
            )}
          </TouchableOpacity>
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

        <View style={{ paddingTop: 20 }}>
          <CustomButton
            title="Register"
            onPress={() => router.push("/(auth)/otp-phone")}
          />
        </View>
        {/* Sign In */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => router.push("/(auth)/login")}
            >
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
    fontWeight: "600",
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
    fontSize: 15,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
