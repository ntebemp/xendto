import CustomButton from "@/components/button";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

type SuccessProps = {
  onPress?: () => void;
};

export default function SuccessScreen({ onPress }: SuccessProps) {
  const scale = useRef(new Animated.Value(0.5)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const { text } = useLocalSearchParams();
  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Bouton fermer */}

      <Pressable style={styles.closeButton} onPress={onPress}>
        <Ionicons name="close" size={24} color="#222" />
      </Pressable>

      <Animated.View
        style={[
          styles.content,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        {/* Cercle */}

        <LinearGradient
          colors={["#18C776", "#2F8CD8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.circle}
        >
          <Ionicons name="checkmark" size={55} color="#FFF" />
        </LinearGradient>

        {/* Texte */}

        <Text style={styles.title}>Success!</Text>

        <Text style={styles.subtitle}>{text}</Text>

        {/* Bouton */}
        <View style={{ marginTop: 50, width: "100%" }}>
          <CustomButton
            title="Continue"
            onPress={() => router.replace("/(auth)/login")}
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 55,
    paddingHorizontal: 25,
  },
  buttons: {
    width: "100%",
    marginTop: 50,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  closeButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 5,
  },

  title: {
    marginTop: 35,
    fontSize: 38,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "center",
    color: "#6B7280",
    lineHeight: 28,
  },

  button: {
    height: 58,
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18,
  },
});
