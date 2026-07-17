import HeaderImage from "@/components/header/HeaderImage";
import { styles } from "@/constants/style/style";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { JSX } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingScreen(): JSX.Element {
  return (
    <>
      <HeaderImage onPress={() => router.back()} />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/onboarding4.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.title}>
          Join Us And Experience Smarter Money Transfers
        </Text>

        <View style={styleWelcome.container}>
          <View style={styles.authButtons}>
            <LinearGradient
              colors={["#18C776", "#2F8CD8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.loginButton, { flex: 1, marginRight: 10 }]}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => router.push("/(auth)/login")}
              >
                <Text style={styles.loginText}>Log in</Text>
              </TouchableOpacity>
            </LinearGradient>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => router.push("/(auth)/register")}
            >
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styleWelcome = StyleSheet.create({
  container: {
    paddingBottom: 80,
  },
});
