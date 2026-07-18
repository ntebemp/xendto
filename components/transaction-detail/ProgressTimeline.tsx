import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Status = "success" | "pending" | "failed";

interface Props {
  status: Status;
}

const steps = [
  {
    label: "Initiated",
    time: "Today,10:00",
  },
  {
    label: "Processed",
    time: "Today,10:30",
  },
  {
    label: "Transferred",
    time: "Today,11:00",
  },
  {
    label: "Credited",
    time: "Today,11:20",
  },
];

export default function ProgressTimeline({ status }: Props) {
  const getStepState = (index: number) => {
    switch (status) {
      case "success":
        return "success";

      case "pending":
        return index < 3 ? "success" : "pending";

      case "failed":
        return index < 2 ? "success" : "failed";
    }
  };

  const getColor = (state: string) => {
    switch (state) {
      case "success":
        return "#16C784";

      case "pending":
        return "#F4A000";

      case "failed":
        return "#FF3B30";

      default:
        return "#D1D5DB";
    }
  };

  const getIcon = (state: string) => {
    switch (state) {
      case "success":
        return "checkmark";

      case "pending":
        return "time";

      case "failed":
        return "close";

      default:
        return "ellipse";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {steps.map((step, index) => {
          const state = getStepState(index);

          return (
            <View key={index} style={styles.item}>
              {/* Ligne */}
              {index < steps.length - 1 && (
                <View
                  style={[
                    styles.line,
                    {
                      backgroundColor: getColor(state),
                    },
                  ]}
                />
              )}

              <Text style={styles.time}>{step.time}</Text>

              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: getColor(state),
                  },
                ]}
              >
                <Ionicons name={getIcon(state) as any} size={11} color="#FFF" />
              </View>

              <Text style={styles.label}>{step.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
  },

  item: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  time: {
    fontSize: 10,
    color: "#94A3B8",
    marginBottom: 10,
  },

  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  line: {
    position: "absolute",
    top: 34, // centre vertical du cercle
    left: "70%",
    right: -25,
    height: 3,
    borderRadius: 2,
    zIndex: 1,
  },

  label: {
    marginTop: 10,
    fontSize: 11,
    color: "#334155",
    textAlign: "center",
  },
});
