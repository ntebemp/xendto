import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderProps = {
  headerTitle: string;
  onPress?: () => void;
};

const HeaderTitle = ({ headerTitle, onPress }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onPress}>
        <Ionicons name="chevron-back" size={22} color="#111" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{headerTitle}</Text>

      <View style={{ width: 40 }} />
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
    zIndex: 9999,
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
