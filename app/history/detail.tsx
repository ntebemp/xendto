import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";

import HeaderTitle from "@/components/header/Header";
import ActionButton from "@/components/transaction-detail/ActionButton";
import AmountCard from "@/components/transaction-detail/AmountCard";
import BottomButton from "@/components/transaction-detail/BottomButton";
import InfoCard from "@/components/transaction-detail/InfoCard";
import ProgressTimeline from "@/components/transaction-detail/ProgressTimeline";
import StatusCard from "@/components/transaction-detail/StatusCard";

type CardStatus = "success" | "pending" | "failed";

// Normalise n'importe quelle valeur reçue en param ("Completed", "completed",
// "success", "SUCCESS", etc.) vers une des 3 valeurs attendues par StatusCard
// et ProgressTimeline. Ajoute ici toutes les variantes que tes autres écrans
// peuvent envoyer.
const STATUS_MAP: Record<string, CardStatus> = {
  completed: "success",
  success: "success",
  pending: "pending",
  failed: "failed",
  failure: "failed",
  error: "failed",
};

function normalizeStatus(raw: unknown): CardStatus {
  const key = String(raw ?? "").toLowerCase();
  return STATUS_MAP[key] ?? "success";
}

export default function DetailSuccess() {
  const router = useRouter();
  const { status } = useLocalSearchParams();

  // Une seule source de vérité, réutilisée par tous les enfants.
  const cardStatus = normalizeStatus(status);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HeaderTitle
        headerTitle="Transaction Detail"
        onPress={() => router.back()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Status */}

        <StatusCard
          status={cardStatus}
          amount="450,00 €"
          recipient="Marc-Antoine Lambert"
        />

        <ProgressTimeline status={cardStatus} />

        {/* Source */}

        <InfoCard
          title="SOURCE"
          icon="card-outline"
          name="Main Account"
          subtitle="****8842"
        />

        {/* Recipient */}

        <InfoCard
          title="BENEFICIARY"
          icon="person-outline"
          name="Marc-Antoine Lambert"
          subtitle="XendTo ID : @marc"
        />

        {/* Amount */}

        <AmountCard amount="442,50" fees="7,50" total="450,00" />

        {/* Actions */}

        <View style={styles.actions}>
          <ActionButton
            icon="download-outline"
            title="Download"
            onPress={() => console.log("Download")}
          />

          <ActionButton
            icon="share-social-outline"
            title="Share"
            onPress={() => console.log("Share")}
          />

          <ActionButton
            icon="warning-outline"
            title="Report"
            onPress={() => console.log("Report")}
          />
        </View>

        {/* Bottom Button */}

        <BottomButton
          title={
            cardStatus === "success"
              ? "Send again to the same recipient"
              : cardStatus === "pending"
                ? "Track this transfer"
                : "Retry transfer"
          }
          backgroundColor={cardStatus === "failed" ? "#EF4444" : "#2F8CD8"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000000",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 30,
  },
});
