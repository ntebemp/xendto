import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  step: 1 | 2 | 3;
}

const STEPS = ["MONTANT", "DESTINATAIRE", "RÉSUMÉ"];

export default function TransferStepper({ step }: Props) {
  return (
    <View style={styles.container}>
      {STEPS.map((item, index) => {
        const number = index + 1;

        const active = number <= step;

        return (
          <React.Fragment key={item}>
            <View style={styles.item}>
              <View style={[styles.circle, active && styles.circleActive]}>
                <Text style={[styles.number, active && styles.numberActive]}>
                  {number}
                </Text>
              </View>

              <Text
                style={[styles.label, number === step && styles.labelActive]}
              >
                {item}
              </Text>
            </View>

            {number < 3 && (
              <View style={[styles.line, active && styles.lineActive]} />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "flex-start",

    justifyContent: "space-between",

    paddingHorizontal: 22,

    marginTop: 18,

    marginBottom: 25,
  },

  item: {
    alignItems: "center",

    width: 55,
  },

  circle: {
    width: 22,

    height: 22,

    borderRadius: 11,

    backgroundColor: "#E5E7EB",

    justifyContent: "center",

    alignItems: "center",
  },

  circleActive: {
    backgroundColor: "#1FC7A1",
  },

  number: {
    fontSize: 11,

    color: "#64748B",

    fontWeight: "700",
  },

  numberActive: {
    color: "#FFF",
  },

  label: {
    marginTop: 8,

    fontSize: 9,

    fontWeight: "700",

    color: "#94A3B8",

    textAlign: "center",
  },

  labelActive: {
    color: "#1FC7A1",
  },

  line: {
    flex: 1,

    height: 2,

    backgroundColor: "#E5E7EB",

    marginTop: 10,

    marginHorizontal: 8,
  },

  lineActive: {
    backgroundColor: "#1FC7A1",
  },
});
