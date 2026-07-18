import React, { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import HeaderSimple from "@/components/header/HeaderSimple";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const categories = ["All", "Schools", "Universities", "Hospitals"];

const institutions = [
  {
    id: "1",
    logo: "https://dummyimage.com/70x70/2ea8df/ffffff.png&text=UCAD",
    name: "UCAD Dakar",
    city: "Avenue Cheikh Anta Diop, Dakar",
    type: "UNIVERSITÉ",
    verified: true,
  },
  {
    id: "2",
    logo: "https://dummyimage.com/70x70/4caf50/ffffff.png&text=HP",
    name: "Hôpital Principal",
    city: "Plateau, Dakar",
    type: "HÔPITAL",
    verified: true,
  },
  {
    id: "3",
    logo: "https://dummyimage.com/70x70/2196f3/ffffff.png&text=CS",
    name: "Cours Sainte Marie",
    city: "Mermoz, Dakar",
    type: "ÉTABLISSEMENT",
    verified: true,
  },
];

export default function InstitutionScreen() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return institutions;

    return institutions.filter((item) =>
      item.type.toLowerCase().includes(category.toLowerCase().slice(0, -1)),
    );
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSimple headerTitle="Directory of Institutions" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Payment</Text>

        <Text style={styles.subtitle}>
          Find and pay verified institutions in Senegal in just a few seconds.
        </Text>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#94A3B8" />

            <TextInput
              placeholder="Search any institution, school, hospital..."
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Type</Text>

            <Ionicons name="options-outline" size={18} color="#3B82F6" />
          </TouchableOpacity>
        </View>

        <Text style={styles.total}>Total Institutions : 7</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 18 }}
        >
          {categories.map((item) => {
            const active = item === category;

            return (
              <TouchableOpacity
                key={item}
                onPress={() => setCategory(item)}
                style={[styles.chip, active && styles.activeChip]}
              >
                <Text
                  style={[styles.chipText, active && styles.activeChipText]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <LinearGradient
          colors={["#18C776", "#2F8CD8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.banner}
        >
          <View>
            <Text style={styles.bannerTitle}>
              School Payments{"\n"}Zero Commission
            </Text>

            <Text style={styles.bannerText}>
              Offer valid through September 30 for all partner schools.
            </Text>

            <View style={styles.bannerIcon}>
              <Ionicons name="information-circle" color="#FFFFFF" size={22} />
            </View>
          </View>
        </LinearGradient>
        <FlatList
          data={filtered}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>
              <Image
                source={{
                  uri: item.logo,
                }}
                style={styles.logo}
              />

              <View style={styles.cardContent}>
                <View style={styles.nameRow}>
                  <Text numberOfLines={1} style={styles.cardTitle}>
                    {item.name}
                  </Text>

                  {item.verified && (
                    <Ionicons
                      name="checkmark-circle"
                      size={16}
                      color="#16A34A"
                    />
                  )}
                </View>

                <View style={styles.locationRow}>
                  <Ionicons name="location-outline" size={13} color="#64748B" />

                  <Text style={styles.location}>{item.city}</Text>
                </View>

                <View style={styles.bottomRow}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.type}</Text>
                  </View>

                  <TouchableOpacity>
                    <Text style={styles.payButton}>Pay &gt;</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      <TouchableOpacity activeOpacity={0.9}>
        <LinearGradient
          colors={["#18C776", "#2F8CD8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.fab}
        >
          <Ionicons name="add" size={34} color="#FFFFFF" />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 18,
    paddingBottom: 150,
  },

  header: {
    height: 60,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingHorizontal: 18,

    borderBottomWidth: 1,

    borderBottomColor: "#ECECEC",

    backgroundColor: "#FFF",
  },

  backButton: {
    width: 34,
    height: 34,

    borderRadius: 17,

    backgroundColor: "#F8FAFC",

    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  title: {
    marginTop: 18,

    fontSize: 38,

    fontWeight: 700,

    color: "#111827",
  },

  subtitle: {
    marginTop: 8,

    marginBottom: 18,

    color: "#64748B",

    lineHeight: 22,

    fontSize: 14,
  },

  searchRow: {
    flexDirection: "row",

    alignItems: "center",

    marginBottom: 16,
  },

  searchBox: {
    flex: 1,

    height: 48,

    borderRadius: 14,

    backgroundColor: "#F8FAFC",

    borderWidth: 1,

    borderColor: "#E5E7EB",

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 14,
  },

  searchInput: {
    flex: 1,

    marginLeft: 10,

    fontSize: 14,
  },

  filterButton: {
    marginLeft: 10,

    height: 48,

    paddingHorizontal: 16,

    borderRadius: 14,

    borderWidth: 1,

    borderColor: "#60A5FA",

    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#FFF",
  },

  filterText: {
    marginRight: 6,

    color: "#2563EB",

    fontWeight: "600",
  },

  total: {
    marginBottom: 14,

    fontWeight: "700",

    color: "#111827",
  },

  chip: {
    paddingHorizontal: 18,

    height: 38,

    borderRadius: 19,

    justifyContent: "center",

    backgroundColor: "#F3F4F6",

    marginRight: 10,
  },

  activeChip: {
    backgroundColor: "#2F80ED",
  },

  chipText: {
    color: "#64748B",

    fontWeight: "600",
  },

  activeChipText: {
    color: "#FFFFFF",
  },

  banner: {
    height: 140,

    borderRadius: 22,

    padding: 18,

    marginBottom: 22,

    backgroundColor: "#20C997",

    justifyContent: "space-between",

    overflow: "hidden",
  },

  bannerTitle: {
    color: "#FFF",

    fontSize: 24,

    fontWeight: "800",
  },

  bannerText: {
    width: "80%",

    color: "#EAFBF5",

    lineHeight: 20,
  },

  bannerIcon: {
    position: "absolute",

    right: 20,

    top: 20,

    width: 38,

    height: 38,

    borderRadius: 19,

    backgroundColor: "rgba(255,255,255,0.20)",

    justifyContent: "center",

    alignItems: "center",
  },
  card: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 14,

    borderWidth: 1,

    borderColor: "#E5E7EB",

    shadowColor: "#000",

    shadowOpacity: 0.06,

    shadowRadius: 12,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  logo: {
    width: 58,

    height: 58,

    borderRadius: 29,

    resizeMode: "cover",

    backgroundColor: "#F8FAFC",

    borderWidth: 1,

    borderColor: "#E5E7EB",
  },

  cardContent: {
    flex: 1,

    marginLeft: 14,
  },

  nameRow: {
    flexDirection: "row",

    alignItems: "center",
  },

  cardTitle: {
    flex: 1,

    fontSize: 16,

    fontWeight: "700",

    color: "#111827",

    marginRight: 5,
  },

  locationRow: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: 5,
  },

  location: {
    marginLeft: 4,

    color: "#64748B",

    fontSize: 12,
  },

  bottomRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginTop: 14,
  },

  badge: {
    backgroundColor: "#DCFCE7",

    borderRadius: 10,

    paddingHorizontal: 10,

    paddingVertical: 5,
  },

  badgeText: {
    color: "#16A34A",

    fontWeight: "700",

    fontSize: 10,

    letterSpacing: 0.4,
  },

  payButton: {
    color: "#2F80ED",

    fontWeight: "700",

    fontSize: 14,
  },

  fab: {
    position: "absolute",

    right: 22,

    bottom: 95,

    width: 62,

    height: 62,

    borderRadius: 31,

    backgroundColor: "#20C997",

    justifyContent: "center",

    alignItems: "center",

    shadowColor: "#20C997",

    shadowOpacity: 0.35,

    shadowRadius: 12,

    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 10,
  },
});
