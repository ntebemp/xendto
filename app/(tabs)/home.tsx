import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import BalanceCard from "@/components/home/BalanceCard";
import HomeHeader from "@/components/home/HomeHeader";
import QuickActions from "@/components/home/QuickActions";
import RecentTransactions from "@/components/home/RecentTransactions";
import ReferralCard from "@/components/home/ReferralCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BalanceCard />

        <QuickActions />

        <ReferralCard />

        <RecentTransactions />
      </ScrollView>

      {/* <BottomNavigation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
