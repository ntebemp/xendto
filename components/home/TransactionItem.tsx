import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  item: {
    name: string;
    date: string;
    amount: string;
    status: string;
    type: string;
  };
};

export default function TransactionItem({ item }: Props) {
  const credit = item.type === "credit";

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.avatar,
          {
            backgroundColor: credit ? "#DFF8EB" : "#EFF7FF",
          },
        ]}
      >
        <Ionicons
          name={credit ? "arrow-down" : "arrow-up"}
          size={18}
          color={credit ? "#18C776" : "#2F8CD8"}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.date}>{item.date}</Text>

        <View
          style={[
            styles.badge,
            {
              backgroundColor:
                item.status === "Completed" ? "#E8FFF3" : "#FFF7E6",
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: item.status === "Completed" ? "#18C776" : "#D97706",
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>

      <Text
        style={[
          styles.amount,
          {
            color: credit ? "#18C776" : "#111827",
          },
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 15,

    borderBottomWidth: 1,

    borderBottomColor: "#F2F2F2",
  },

  avatar: {
    width: 50,
    height: 50,

    borderRadius: 25,

    justifyContent: "center",

    alignItems: "center",
  },

  info: {
    flex: 1,

    marginLeft: 15,
  },

  name: {
    fontWeight: "700",

    color: "#111827",

    fontSize: 15,
  },

  date: {
    color: "#6B7280",

    marginTop: 3,

    fontSize: 12,
  },

  badge: {
    marginTop: 8,

    alignSelf: "flex-start",

    paddingHorizontal: 10,

    paddingVertical: 4,

    borderRadius: 10,
  },

  badgeText: {
    fontSize: 11,

    fontWeight: "700",
  },

  amount: {
    fontSize: 16,

    fontWeight: "700",
  },
});
