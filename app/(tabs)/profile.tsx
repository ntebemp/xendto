import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 30 }} />

        <Text style={styles.headerTitle}>Profil</Text>

        <TouchableOpacity>
          <Ionicons name="settings" size={22} color="#4B5563" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Avatar */}

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JA</Text>
          </View>

          <View style={styles.badge}>
            <Ionicons name="checkmark" color="#FFF" size={12} />
          </View>
        </View>

        <View style={styles.verifiedRow}>
          <Text style={styles.verifiedText}>Verified Payer</Text>

          <Ionicons name="checkmark-circle" color="#16A34A" size={14} />
        </View>

        <Text style={styles.name}>John Ayuba</Text>

        <Text style={styles.email}>johnayuba@gmail.com</Text>

        {/* Total envoyé */}

        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>TOTAL AMOUNT SENT</Text>

          <View style={styles.totalRow}>
            <Text style={styles.totalAmount}>4.250.000</Text>

            <Text style={styles.currency}>XOF</Text>
          </View>
        </View>

        {/* Statistiques */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="paper-plane-outline" color="#3B82F6" size={22} />

            <Text style={styles.statTitle}>TRANSFERS</Text>

            <Text style={styles.statValue}>142</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="people-outline" color="#16A34A" size={22} />

            <Text style={styles.statTitle}>BENEFICIARIES</Text>

            <Text style={styles.statValue}>28</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>ACCOUNT SETTINGS</Text>
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <View style={styles.iconCircle}>
              <Ionicons name="person-outline" size={18} color="#2F80ED" />
            </View>

            <Text style={styles.menuText}>Personal Information</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="shield-checkmark-outline"
                size={18}
                color="#2F80ED"
              />
            </View>

            <Text style={styles.menuText}>Security & Privacy</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <View style={styles.iconCircle}>
              <Ionicons name="card-outline" size={18} color="#2F80ED" />
            </View>

            <Text style={styles.menuText}>KYC Verification</Text>

            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedBadgeText}>VERIFIED</Text>
            </View>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <View style={styles.iconCircle}>
              <Ionicons name="wallet-outline" size={18} color="#2F80ED" />
            </View>

            <Text style={styles.menuText}>Payment Methods</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="notifications-outline"
                size={18}
                color="#2F80ED"
              />
            </View>

            <Text style={styles.menuText}>Notifications</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <View style={styles.iconCircle}>
              <Ionicons name="language-outline" size={18} color="#2F80ED" />
            </View>

            <Text style={styles.menuText}>Language</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <View style={styles.iconCircle}>
              <Ionicons name="lock-closed-outline" size={18} color="#2F80ED" />
            </View>

            <Text style={styles.menuText}>Privacy & Security</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuLeft}>
            <View style={styles.iconCircle}>
              <Ionicons name="help-circle-outline" size={18} color="#2F80ED" />
            </View>

            <Text style={styles.menuText}>Help & Support</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  header: {
    height: 58,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: "#ECECEC",
  },

  headerTitle: {
    fontSize: 18,

    fontWeight: "700",

    color: "#111827",
  },

  avatarContainer: {
    marginTop: 25,

    alignItems: "center",
  },

  avatar: {
    width: 84,

    height: 84,

    borderRadius: 42,

    backgroundColor: "#EAF7F8",

    justifyContent: "center",

    alignItems: "center",
  },

  avatarText: {
    fontSize: 30,

    fontWeight: "700",

    color: "#374151",
  },

  badge: {
    position: "absolute",

    bottom: 2,

    right: "37%",

    width: 22,

    height: 22,

    borderRadius: 11,

    backgroundColor: "#2F80ED",

    justifyContent: "center",

    alignItems: "center",

    borderWidth: 2,

    borderColor: "#FFF",
  },

  verifiedRow: {
    marginTop: 10,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",
  },

  verifiedText: {
    color: "#16A34A",

    fontSize: 12,

    marginRight: 4,
  },

  name: {
    marginTop: 6,

    textAlign: "center",

    fontWeight: "700",

    fontSize: 24,

    color: "#111827",
  },

  email: {
    textAlign: "center",

    color: "#6B7280",

    marginTop: 4,

    marginBottom: 20,
  },

  totalCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    borderWidth: 1,

    borderColor: "#EEF2F7",

    paddingVertical: 18,

    alignItems: "center",

    marginBottom: 18,

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  totalLabel: {
    fontSize: 11,

    color: "#94A3B8",

    letterSpacing: 1,

    fontWeight: "700",
  },

  totalRow: {
    flexDirection: "row",

    alignItems: "flex-end",

    marginTop: 8,
  },

  totalAmount: {
    fontSize: 34,

    fontWeight: "800",

    color: "#2F80ED",
  },

  currency: {
    marginLeft: 8,

    marginBottom: 6,

    color: "#2F80ED",

    fontWeight: "700",
  },

  statsRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 25,
  },

  statCard: {
    width: "48%",

    backgroundColor: "#EEF8FF",

    borderRadius: 16,

    padding: 18,
  },

  statTitle: {
    marginTop: 8,

    color: "#94A3B8",

    fontSize: 11,

    fontWeight: "700",
  },

  statValue: {
    marginTop: 4,

    fontSize: 28,

    fontWeight: "700",

    color: "#111827",
  },

  sectionTitle: {
    marginBottom: 16,

    fontSize: 12,

    fontWeight: "700",

    color: "#94A3B8",

    letterSpacing: 2,
  },
  menuCard: {
    height: 68,

    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    paddingHorizontal: 16,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 14,

    borderWidth: 1,

    borderColor: "#EEF2F7",

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  menuLeft: {
    flexDirection: "row",

    alignItems: "center",

    flex: 1,
  },

  iconCircle: {
    width: 34,

    height: 34,

    borderRadius: 17,

    backgroundColor: "#F8FAFC",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 14,
  },

  menuText: {
    fontSize: 15,

    color: "#111827",

    fontWeight: "500",

    flex: 1,
  },

  verifiedBadge: {
    backgroundColor: "#DCFCE7",

    paddingHorizontal: 8,

    paddingVertical: 3,

    borderRadius: 10,

    marginLeft: 10,
  },

  verifiedBadgeText: {
    color: "#16A34A",

    fontSize: 10,

    fontWeight: "700",
  },

  logoutButton: {
    height: 56,

    marginTop: 20,

    marginBottom: 30,

    borderRadius: 28,

    borderWidth: 1,

    borderColor: "#FECACA",

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#FFFFFF",
  },

  logoutText: {
    color: "#EF4444",

    fontWeight: "600",

    fontSize: 16,
  },
});
