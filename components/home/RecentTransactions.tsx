import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import TransactionItem from "./TransactionItem";

const transactions = [
  {
    id: "1",
    name: "Marie Ndzié",
    date: "Aujourd'hui • 11:24",
    amount: "-120 CAD",
    status: "Completed",
    type: "debit",
  },
  {
    id: "2",
    name: "Orange Money",
    date: "Aujourd'hui • 09:15",
    amount: "+300 CAD",
    status: "Completed",
    type: "credit",
  },
  {
    id: "3",
    name: "School Fees",
    date: "Hier • 16:40",
    amount: "-560 CAD",
    status: "Pending",
    type: "debit",
  },
  {
    id: "4",
    name: "MTN Mobile Money",
    date: "Hier • 09:10",
    amount: "+80 CAD",
    status: "Completed",
    type: "credit",
  },
];

export default function RecentTransactions() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Transactions</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => <TransactionItem item={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  seeAll: {
    color: "#2F8CD8",
    fontWeight: "600",
    fontSize: 13,
  },
});
