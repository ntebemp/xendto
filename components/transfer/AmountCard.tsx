import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  amount: string;
  currency: string;
  flag: string;

  // Si true, `amount` devient un champ de saisie (TextInput).
  // Si false/absent (comportement par défaut, inchangé), reste un Text.
  editable?: boolean;

  // Appelé à chaque frappe quand editable=true.
  onChangeAmount?: (text: string) => void;

  onPressCurrency?: () => void;
}

export default function AmountCard({
  title,
  amount,
  currency,
  flag,
  editable = false,
  onChangeAmount,
  onPressCurrency,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          style={styles.currency}
          onPress={onPressCurrency}
          disabled={!onPressCurrency}
        >
          <Text style={styles.flag}>{flag}</Text>

          <Text style={styles.currencyText}>{currency}</Text>

          <Ionicons name="chevron-down" size={16} color="#64748B" />
        </TouchableOpacity>
      </View>

      {editable ? (
        <TextInput
          value={amount}
          onChangeText={onChangeAmount}
          style={[styles.amount, styles.amountInput]}
          keyboardType="decimal-pad"
          placeholder="0.00"
          placeholderTextColor="#9CA3AF"
        />
      ) : (
        <Text style={styles.amount}>{amount}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EAF4FD",

    borderRadius: 16,

    padding: 18,

    marginHorizontal: 18,

    marginBottom: 18,
  },

  top: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  title: {
    color: "#64748B",

    fontSize: 13,

    fontWeight: "500",
  },

  currency: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#FFF",

    borderRadius: 18,

    paddingHorizontal: 10,

    paddingVertical: 6,
  },

  flag: {
    fontSize: 16,

    marginRight: 6,
  },

  currencyText: {
    fontWeight: "700",

    marginRight: 4,

    color: "#111827",
  },

  amount: {
    marginTop: 18,

    fontSize: 44,

    fontWeight: "800",

    color: "#111827",
  },

  // Ajustements nécessaires UNIQUEMENT pour le TextInput (le Text n'a pas
  // ce padding par défaut, donc on ne les applique pas dans le cas statique
  // pour ne rien changer visuellement à l'existant).
  amountInput: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});
