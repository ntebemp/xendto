import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomButton from "@/components/button";
import AmountCard from "../AmountCard";
import BalanceText from "../BalanceText";
import ExchangeInfo from "../ExchangeInfo";
import LimitCard from "../LimitCard";

interface TransferData {
  amount: string;
  sendCurrency: string;
  receiveAmount: string;
  receiveCurrency: string;
}

interface Props {
  transfer: TransferData;
  onNext: () => void;
  // Appelé à chaque frappe dans le champ "You send".
  // Le parent (TransferScreen) se charge de recalculer receiveAmount.
  onChangeAmount: (text: string) => void;
}

export default function AmountStep({
  transfer,
  onNext,
  onChangeAmount,
}: Props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>How much would you like to send?</Text>

      <Text style={styles.subtitle}>
        Enter the amount to instantly view the exchange rate, transfer fees and
        the exact amount your recipient will receive.
      </Text>

      <AmountCard
        title="You send"
        amount={transfer.amount}
        currency={transfer.sendCurrency}
        flag="🇨🇦"
        editable
        onChangeAmount={onChangeAmount}
      />

      <ExchangeInfo />

      <AmountCard
        title="Recipient gets"
        amount={transfer.receiveAmount}
        currency={transfer.receiveCurrency}
        flag="🇨🇲"
        // Pas de `editable` ici : ce montant reste calculé automatiquement
        // à partir du taux de change, pas saisi directement.
      />

      <LimitCard limit="10,000 CAD" />

      <BalanceText balance="200.00 CAD" />

      <View style={styles.footer}>
        <CustomButton title="Continue" onPress={onNext} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",

    marginHorizontal: 20,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",

    lineHeight: 22,

    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 28,
  },

  footer: {
    marginTop: 30,
    marginBottom: 80,
    marginHorizontal: 20,
  },
});
