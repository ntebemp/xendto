import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import HeaderSimple from "@/components/header/HeaderSimple";
import FilterTabs from "@/components/history/FilterTabs";
import SearchBar from "@/components/history/SearchBar";
import SummaryCard from "@/components/history/SummaryCard";
import TransactionCard from "@/components/history/TransactionCard";

export type TransactionStatus = "Completed" | "Pending" | "Failed";

export type TransactionIcon = "up" | "down" | "warning";

export interface Transaction {
  id: string;
  name: string;
  type: string;
  amount: string;
  status: TransactionStatus;
  date: string;
  icon: TransactionIcon;
  color: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    name: "Thomas Martin",
    type: "Transfer Received",
    amount: "+124.50€",
    status: "Completed",
    date: "14:20",
    icon: "down",
    color: "#18C776",
  },
  {
    id: "2",
    name: "Amazon Luxembourg",
    type: "Card Purchase",
    amount: "-42.99€",
    status: "Completed",
    date: "10:35",
    icon: "up",
    color: "#2F8CD8",
  },
  {
    id: "3",
    name: "Sarah Connor",
    type: "Transfer",
    amount: "+85.00€",
    status: "Pending",
    date: "18:45",
    icon: "down",
    color: "#18C776",
  },
  {
    id: "4",
    name: "Uber Eats",
    type: "Payment",
    amount: "-16.20€",
    status: "Failed",
    date: "12:30",
    icon: "warning",
    color: "#EF4444",
  },
  {
    id: "5",
    name: "Loyer Résidence",
    type: "Bank Transfer",
    amount: "-750.00€",
    status: "Completed",
    date: "09:15",
    icon: "up",
    color: "#2F8CD8",
  },
];

export default function HistoryScreen() {
  const [filter, setFilter] = useState("All");

  const filtered = transactions.filter((item) => {
    if (filter === "All") return true;
    return item.status === filter;
  });

  return (
    <View style={styles.container}>
      <HeaderSimple headerTitle="Transaction History" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <SearchBar />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Transactions</Text>

          <Text style={styles.totalValue}>{filtered.length}</Text>
        </View>

        <FilterTabs value={filter} onChange={setFilter} />

        <SummaryCard />

        <Text style={styles.section}>TODAY</Text>

        {filtered.map((item) => (
          <TransactionCard key={item.id} transaction={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 18,
  },

  totalLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  section: {
    marginTop: 24,
    marginBottom: 15,
    color: "#94A3B8",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1,
  },
});
