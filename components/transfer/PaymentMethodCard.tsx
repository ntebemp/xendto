import React from "react";
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface Props {
  title: string;
  subtitle: string;
  logo: ImageSourcePropType;
  selected?: boolean;
  onPress?: () => void;
}

export default function PaymentMethodCard({
  title,
  subtitle,
  logo,
  selected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.card, selected && styles.selected]}
    >
      <View style={styles.left}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>

        <View>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioDot} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 78,

    borderRadius: 18,

    borderWidth: 1,

    borderColor: "#E8EDF4",

    backgroundColor: "#FFF",

    paddingHorizontal: 18,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 16,
  },

  selected: {
    borderColor: "#1FC7A1",

    backgroundColor: "#F4FFFB",
  },

  left: {
    flexDirection: "row",

    alignItems: "center",
  },

  logoContainer: {
    width: 52,

    height: 52,

    borderRadius: 26,

    backgroundColor: "#F7F9FC",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 15,
  },

  logo: {
    width: 34,

    height: 34,
  },

  title: {
    fontWeight: "700",

    fontSize: 15,

    color: "#111827",
  },

  subtitle: {
    marginTop: 4,

    color: "#64748B",

    fontSize: 12,
  },

  radio: {
    width: 22,

    height: 22,

    borderRadius: 11,

    borderWidth: 2,

    borderColor: "#CBD5E1",

    justifyContent: "center",

    alignItems: "center",
  },

  radioSelected: {
    borderColor: "#1FC7A1",
  },

  radioDot: {
    width: 10,

    height: 10,

    borderRadius: 5,

    backgroundColor: "#1FC7A1",
  },
});
