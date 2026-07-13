import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <View style={[{ paddingBottom: useSafeAreaInsets().bottom }]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      >
        <LinearGradient
          colors={["#18C776", "#244e9b"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 342,
    alignSelf: "center",
  },
  button: {
    height: 57,
    borderRadius: 30,
    // paddingLeft: 16,
    // paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 3,
  },

  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});
