import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import SummaryCard from "../SummaryCard";

interface TransferData {
  amount: string;
  sendCurrency: string;

  receiveAmount: string;
  receiveCurrency: string;

  recipientName: string;
  recipientPhone: string;

  paymentMethod: string;

  fee: string;

  exchangeRate: string;
}

interface Props {
  transfer: TransferData;
  onBack: () => void;
  onConfirm: () => void;
}

export default function ReviewStep({ transfer, onBack, onConfirm }: Props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Review Transfer</Text>

      <Text style={styles.subtitle}>
        Please verify the information before confirming your transfer.
      </Text>

      <SummaryCard
        title="Transfer Summary"
        items={[
          {
            label: "You Send",
            value: `${transfer.amount} ${transfer.sendCurrency}`,
          },
          {
            label: "Recipient Gets",
            value: `${transfer.receiveAmount} ${transfer.receiveCurrency}`,
          },
          {
            label: "Transfer Fee",
            value: transfer.fee,
          },
          {
            label: "Exchange Rate",
            value: transfer.exchangeRate,
          },
        ]}
      />

      <SummaryCard
        title="Recipient"
        items={[
          {
            label: "Name",
            value: transfer.recipientName,
          },
          {
            label: "Phone",
            value: transfer.recipientPhone,
          },
        ]}
      />

      <SummaryCard
        title="Payment Method"
        items={[
          {
            label: "Method",
            value: transfer.paymentMethod,
          },
        ]}
      />

      <View style={styles.containerButton}>
        <View style={styles.authButtons}>
          <TouchableOpacity style={styles.registerButton} onPress={onBack}>
            <Text style={styles.registerText}>Back</Text>
          </TouchableOpacity>

          <LinearGradient
            colors={["#18C776", "#2F8CD8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.loginButton, { flex: 1, marginLeft: 10 }]}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={onConfirm}
            >
              <Text style={styles.loginText}>Confirm</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
    paddingTop: 30,
    paddingBottom: 80,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    lineHeight: 22,
    marginBottom: 25,
  },

  buttons: {
    marginTop: 15,
  },
  authButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  loginButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  registerButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#18C776",
    backgroundColor: "#FFF",
  },

  loginText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18,
  },

  registerText: {
    color: "#111827",
    fontWeight: "600",
    fontSize: 18,
  },
});
