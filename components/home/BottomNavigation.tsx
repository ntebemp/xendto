import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

// Associe chaque nom de route (= nom de fichier dans app/(tabs)/) à son
// libellé et à son icône. Le nom DOIT correspondre exactement au nom
// du fichier de la route (ex: "history" pour app/(tabs)/history.tsx).
const TAB_CONFIG: Record<
  string,
  {
    label: string;
    icon: (color: string) => React.ReactNode;
  }
> = {
  home: {
    label: "Home",
    icon: (color) => <Ionicons name="home" size={22} color={color} />,
  },
  history: {
    label: "History",
    icon: (color) => <Feather name="clock" size={22} color={color} />,
  },
  cards: {
    label: "Cards",
    icon: (color) => <Ionicons name="card-outline" size={22} color={color} />,
  },
  profile: {
    label: "Profile",
    icon: (color) => (
      <MaterialCommunityIcons name="account-outline" size={24} color={color} />
    ),
  },
};

// Le nom de la route qui doit s'afficher comme le gros bouton central
// avec dégradé, au lieu d'un item de tab normal.
const CENTER_ROUTE_NAME = "transfer";

export default function BottomNavigation({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          // On laisse React Navigation émettre l'événement standard
          // "tabPress" (permet à un écran d'intercepter/annuler la
          // navigation si besoin), puis on navigue nous-mêmes.
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Bouton central "Send", avec son propre style (dégradé, taille, etc.)
        if (route.name === CENTER_ROUTE_NAME) {
          return (
            <TouchableOpacity
              key={route.key}
              style={styles.centerButton}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityLabel={
                descriptors[route.key]?.options.title ?? "Send"
              }
            >
              <LinearGradient
                colors={["#18C776", "#2F8CD8"]}
                style={styles.gradientButton}
              >
                <Ionicons name="paper-plane" size={28} color="#FFF" />
              </LinearGradient>
            </TouchableOpacity>
          );
        }

        const config = TAB_CONFIG[route.name];

        // Si une route n'a pas de config associée (ex: écran caché volontairement
        // du tab bar), on ne l'affiche simplement pas.
        if (!config) return null;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.item}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={config.label}
          >
            {isFocused ? (
              <View style={styles.activeIcon}>{config.icon("#FFF")}</View>
            ) : (
              config.icon("#94A3B8")
            )}

            <Text style={isFocused ? styles.activeText : styles.text}>
              {config.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 90,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    elevation: 15,
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },

  activeIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#2F8CD8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },

  activeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2F8CD8",
  },

  text: {
    marginTop: 4,
    color: "#94A3B8",
    fontSize: 12,
  },

  centerButton: {
    marginTop: -35,
  },

  gradientButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 8,
  },
});
