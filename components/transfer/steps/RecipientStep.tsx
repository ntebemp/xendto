import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import PaymentMethodCard from "../PaymentMethodCard";
import RecentRecipientCard from "../RecentRecipientCard";
import RecipientForm from "../RecipientForm";

interface TransferData {
  recipientName: string;
  recipientPhone: string;
  paymentMethod: number;
}

interface Props {
  transfer: TransferData;
  onBack: () => void;
  onNext: () => void;
}

export default function RecipientStep({ transfer, onBack, onNext }: Props) {
  const [selectedMethod, setSelectedMethod] = useState(
    transfer.paymentMethod || 1,
  );

  const paymentMethods = [
    {
      id: 1,
      title: "Visa Card",
      subtitle: "**** 2458",
      logo: require("@/assets/icons/visa.png"),
    },
    {
      id: 2,
      title: "MasterCard",
      subtitle: "**** 9085",
      logo: require("@/assets/icons/mastercard.png"),
    },
    {
      id: 3,
      title: "Orange Money",
      subtitle: "+237 677123456",
      logo: require("@/assets/icons/orange-money.png"),
    },
    {
      id: 4,
      title: "Bank Transfer",
      subtitle: "UBA Cameroon",
      logo: require("@/assets/icons/bank.png"),
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Recipient Details</Text>

      <Text style={styles.subtitle}>
        Enter the beneficiary information and choose the payment method.
      </Text>

      <RecipientForm />

      <Text style={styles.sectionTitle}>Recent Recipients</Text>

      <View style={styles.recentContainer}>
        <RecentRecipientCard initials="JO" name="John" phone="+237 677123456" />

        <RecentRecipientCard
          initials="MA"
          name="Marie"
          phone="+237 695456789"
        />

        <RecentRecipientCard
          initials="PE"
          name="Peter"
          phone="+237 680998877"
        />
      </View>

      <Text style={styles.sectionTitle}>Payment Method</Text>

      {paymentMethods.map((item) => (
        <PaymentMethodCard
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          logo={item.logo}
          selected={selectedMethod === item.id}
          onPress={() => setSelectedMethod(item.id)}
        />
      ))}
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
              onPress={onNext}
            >
              <Text style={styles.loginText}>Continue</Text>
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
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
    marginTop: 20,
  },

  subtitle: {
    marginTop: 10,
    marginBottom: 25,
    fontSize: 15,
    color: "#64748B",
    lineHeight: 22,
  },

  sectionTitle: {
    marginTop: 30,
    marginBottom: 18,
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  recentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  buttons: {
    marginTop: 30,
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
