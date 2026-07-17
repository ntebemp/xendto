import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import BalanceCard from "@/components/home/BalanceCard";
import HomeHeader from "@/components/home/HomeHeader";
import QuickActions from "@/components/home/QuickActions";
import RecentTransactions from "@/components/home/RecentTransactions";
import ReferralCard from "@/components/home/ReferralCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />

        <BalanceCard />

        <QuickActions />

        <ReferralCard />

        <RecentTransactions />
      </ScrollView>

      {/* <BottomNavigation /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
