import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function CustomButton({
  title,
  onPress,
  disabled,
}: ButtonProps) {
  return (
    <View style={[{ paddingBottom: useSafeAreaInsets().bottom }]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed && styles.pressed,
          disabled && styles.buttonDisabled,
        ]}
        disabled={disabled}
      >
        <LinearGradient
          colors={["#18C776", "#2F8CD8"]}
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

  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});
