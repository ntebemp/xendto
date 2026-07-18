import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Transaction = {
  id: string;
  name: string;
  type: string;
  amount: string;
  status: "Completed" | "Pending" | "Failed";
  date: string;
  icon: "up" | "down" | "warning";
  color: string;
};

type Props = {
  transaction: Transaction;
};

export default function TransactionCard({ transaction }: Props) {
  const router = useRouter();

  const getIcon = () => {
    switch (transaction.icon) {
      case "up":
        return "arrow-up";

      case "down":
        return "arrow-down";

      default:
        return "alert-circle";
    }
  };

  const getStatusColor = () => {
    switch (transaction.status) {
      case "Completed":
        return "#18C776";

      case "Pending":
        return "#F59E0B";

      default:
        return "#EF4444";
    }
  };

  const goToDetail = () => {
    router.push({
      pathname: "/history/detail",
      params: {
        status: transaction.status,
      },
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={goToDetail}
    >
      {/* Avatar */}

      <View
        style={[
          styles.avatar,
          {
            backgroundColor: transaction.color + "18",
          },
        ]}
      >
        <Ionicons name={getIcon()} size={22} color={transaction.color} />
      </View>

      {/* Infos */}

      <View style={styles.center}>
        <Text style={styles.name}>{transaction.name}</Text>

        <Text style={styles.type}>{transaction.type}</Text>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: getStatusColor() + "18",
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: getStatusColor(),
              },
            ]}
          >
            {transaction.status}
          </Text>
        </View>
      </View>

      {/* Montant */}

      <View style={styles.right}>
        <Text
          style={[
            styles.amount,
            {
              color: transaction.amount.startsWith("+") ? "#18C776" : "#111827",
            },
          ]}
        >
          {transaction.amount}
        </Text>

        <Text style={styles.date}>{transaction.date}</Text>

        <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFF",

    borderRadius: 20,

    padding: 16,

    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#EEF2F7",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 3,
  },

  avatar: {
    width: 58,
    height: 58,

    borderRadius: 29,

    justifyContent: "center",
    alignItems: "center",
  },

  center: {
    flex: 1,

    marginLeft: 15,
  },

  name: {
    fontSize: 16,

    fontWeight: "700",

    color: "#111827",
  },

  type: {
    marginTop: 4,

    color: "#64748B",

    fontSize: 13,
  },

  badge: {
    alignSelf: "flex-start",

    marginTop: 10,

    paddingHorizontal: 10,

    height: 26,

    borderRadius: 13,

    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    fontWeight: "600",

    fontSize: 12,
  },

  right: {
    alignItems: "flex-end",
  },

  amount: {
    fontWeight: "700",

    fontSize: 18,
  },

  date: {
    marginTop: 6,

    marginBottom: 10,

    fontSize: 13,

    color: "#94A3B8",
  },
});
