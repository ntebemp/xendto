import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Status = "success" | "pending" | "failed";

interface Props {
  status: Status;
  amount: string;
  recipient: string;
}
type IoniconName = React.ComponentProps<typeof Ionicons>["name"];
type StatusConfig = {
  bg: string;
  iconBg: string;
  icon: IoniconName;
  iconColor: string;
  title: string;
  titleColor: string;
};

export default function StatusCard({ status, amount, recipient }: Props) {
  const config: Record<Status, StatusConfig> = {
    success: {
      bg: "#67E8B5",
      iconBg: "#4ADE80",
      icon: "checkmark-circle",
      iconColor: "#0F5132",
      title: "SUCCESSFUL TRANSFER",
      titleColor: "#00A651",
    },

    pending: {
      bg: "#FFF5D8",
      iconBg: "#FFE8A3",
      icon: "hourglass",
      iconColor: "#B45309",
      title: "TRANSFER IN PROGRESS",
      titleColor: "#F4A000",
    },

    failed: {
      bg: "#FCE4E4",
      iconBg: "#F8B4B4",
      icon: "alert-circle",
      iconColor: "#C1121F",
      title: "TRANSFER FAILED",
      titleColor: "#FF0000",
    },
  };

  const current = config[status];

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: current.bg,
          },
        ]}
      >
        <View
          style={[
            styles.iconCircle,
            {
              backgroundColor: current.iconBg,
            },
          ]}
        >
          <Ionicons
            name={current.icon as any}
            size={32}
            color={current.iconColor}
          />
        </View>
      </View>

      <Text
        style={[
          styles.status,
          {
            color: current.titleColor,
          },
        ]}
      >
        {current.title}
      </Text>

      <Text style={styles.amount}>{amount}</Text>

      <Text style={styles.recipient}>Sent to {recipient}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    paddingVertical: 18,

    alignItems: "center",

    marginHorizontal: 16,

    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 3,
  },

  circle: {
    width: 60,
    height: 60,

    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 14,
  },

  iconCircle: {
    width: 38,
    height: 38,

    borderRadius: 19,

    justifyContent: "center",
    alignItems: "center",
  },

  status: {
    fontSize: 12,

    letterSpacing: 1.8,

    fontWeight: "700",

    marginBottom: 8,
  },

  amount: {
    fontSize: 42,

    fontWeight: "800",

    color: "#222222",
  },

  recipient: {
    marginTop: 6,

    color: "#555",

    fontSize: 15,
  },
});
