import CustomButton from "@/components/button";
import { styles } from "@/constants/style/style";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { JSX, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Slide {
  id: number;
  image: ImageSourcePropType;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: require("@/assets/images/onboarding1.png"),
    title: "Welcome to the future of money transfers",
    description:
      "Experience the future of borderless finance with real-time global settlements.",
  },
  {
    id: 2,
    image: require("@/assets/images/onboarding2.png"),
    title: "Bank-grade security",
    description:
      "Your funds and data are protected by the world's most advanced security protocols.",
  },
  {
    id: 3,
    image: require("@/assets/images/onboarding3.png"),
    title: "Empower your payments",
    description:
      "Reach your loved ones or institutions instantly, safely and reliably.",
  },
];

export default function OnboardingScreen(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      router.push("/starting/welcome");
    }
  };

  const previousSlide = () => {
    if (currentSlide === 0) {
      router.back(); // retourne à Language
      return;
    }

    setCurrentSlide((prev) => prev - 1);
  };

  const slide = slides[currentSlide];

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={previousSlide}>
          <Ionicons name="chevron-back" size={22} color="#111827" />
        </TouchableOpacity>

        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />

        <View style={{ width: 42 }} />
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={slide.image} style={styles.image} />
        </View>

        <Text style={styles.title}>{slide.title}</Text>

        <Text style={styles.description}>{slide.description}</Text>

        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentSlide === index && styles.activeDot]}
            />
          ))}
        </View>

        <View style={{ marginBottom: 15 }}>
          {currentSlide === slides.length - 1 ? (
            <View style={styles.footer}>
              <CustomButton title={"Get Started"} onPress={nextSlide} />
            </View>
          ) : (
            <CustomButton title={"Continue"} onPress={nextSlide} />
          )}
        </View>

        {currentSlide < slides.length - 1 && (
          <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
