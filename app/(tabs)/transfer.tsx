import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import TransferStepper from "@/components/transfer/TransferStepper";

import HeaderTitle from "@/components/header/Header";
import AmountStep from "@/components/transfer/steps/AmountStep";
import RecipientStep from "@/components/transfer/steps/RecipientStep";
import ReviewStep from "@/components/transfer/steps/ReviewStep";
import { useRouter } from "expo-router";

// Extrait le nombre après le "=" dans une chaîne du type
// "1 CAD = 447.16 XAF" -> 447.16
function parseExchangeRate(rateString: string): number {
  const match = rateString.match(/=\s*([\d.,]+)/);
  if (!match) return 0;
  return parseFloat(match[1].replace(/,/g, ""));
}

// Formate un nombre avec des séparateurs de milliers, ex: 558955.2 -> "558,955.20"
function formatAmount(value: number): string {
  if (Number.isNaN(value)) return "0";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function TransferScreen() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const router = useRouter();

  const [transfer, setTransfer] = useState({
    amount: "",
    sendCurrency: "CAD",

    receiveAmount: "",
    receiveCurrency: "XAF",

    recipientName: "John Owono",
    recipientPhone: "+237 677123456",

    paymentMethod: "Visa Card",

    fee: "2.99 CAD",

    exchangeRate: "1 CAD = 447.16 XAF",
  });

  // Appelé à chaque frappe dans le champ "You send" (via AmountCard -> AmountStep).
  const handleAmountChange = (text: string) => {
    // On garde uniquement les chiffres et UN SEUL point décimal pendant la saisie.
    const sanitized = text.replace(/[^0-9.]/g, "");

    setTransfer((prev) => {
      const numericAmount = parseFloat(sanitized) || 0;
      const rate = parseExchangeRate(prev.exchangeRate);

      return {
        ...prev,
        amount: sanitized,
        receiveAmount: formatAmount(numericAmount * rate),
      };
    });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const handleConfirm = () => {
    console.log("Transfer confirmed");

    console.log(transfer);

    // TODO:
    // Appeler l'API ici
    // navigation vers Success Screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {step === 1 && (
        <HeaderTitle headerTitle="Send Money" onPress={() => router.back()} />
      )}

      {step === 2 && (
        <HeaderTitle headerTitle="Send Money" onPress={handleBack} />
      )}

      {step === 3 && (
        <HeaderTitle headerTitle="Review & Confirm" onPress={handleBack} />
      )}
      <TransferStepper step={step} />

      {step === 1 && (
        <AmountStep
          transfer={transfer}
          onNext={handleNext}
          onChangeAmount={handleAmountChange}
        />
      )}

      {step === 2 && (
        <RecipientStep
          transfer={transfer}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}

      {step === 3 && (
        <ReviewStep
          transfer={transfer}
          onBack={handleBack}
          onConfirm={handleConfirm}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 30,
  },
});
