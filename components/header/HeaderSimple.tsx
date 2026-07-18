import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  headerTitle: string;
};

const HeaderSimple = ({ headerTitle }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>

      <View style={{ width: 40 }} />
    </View>
  );
};

export default HeaderSimple;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
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
