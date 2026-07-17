import CustomButton from "@/components/button";
import HeaderTitle from "@/components/header/Header";
import { stylesOTP } from "@/constants/style/style";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function OTPScreenEmail() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resentCode, setResentCode] = useState<string | null>(null);

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const value = text.replace(/[^0-9]/g, "");

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.join("").length === 4) {
      Keyboard.dismiss();
    }
  };

  const handleBackspace = (index: number) => {
    if (otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    const code = otp.join("");

    // Remplace par la vérification de ton API
    if (code.length === 4) {
      router.push("/(auth)/reset-password");
    }
  };

  return (
    <>
      {/* Header */}
      <HeaderTitle
        headerTitle={"OTP Verification"}
        onPress={() => router.back()}
      />

      <View style={stylesOTP.container}>
        {/* Illustration */}
        <Image
          source={require("@/assets/images/otp-email.png")}
          style={stylesOTP.image}
        />
        {/* <OtpImg style={styles.image} /> */}

        <Text style={stylesOTP.description}>
          Check your email for password reset OTP code
        </Text>

        {/* OTP */}

        <View style={stylesOTP.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              value={digit}
              keyboardType="number-pad"
              maxLength={1}
              style={stylesOTP.otpInput}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  handleBackspace(index);
                }
              }}
            />
          ))}
        </View>

        {/* Button */}
        <CustomButton title="Continue" onPress={handleContinue} />
        <Text style={stylesOTP.resend}>
          Didn't get your OTP?{" "}
          <TouchableOpacity
            onPress={() => setResentCode("mariepaulentebe@gmail.com")}
          >
            <Text style={stylesOTP.resendLink}>RESEND IT</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
}
