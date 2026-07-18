import BottomNavigation from "@/components/home/BottomNavigation";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      // Remplace entièrement la barre d'onglets par défaut par notre
      // composant custom. React Navigation lui passe automatiquement
      // { state, descriptors, navigation, insets }.
      tabBar={(props) => <BottomNavigation {...props} />}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="history" options={{ title: "History" }} />
      <Tabs.Screen name="transfer" options={{ title: "Send" }} />
      <Tabs.Screen name="institution" options={{ title: "Institutions" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
