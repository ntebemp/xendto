import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },

  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
    marginBottom: 16,
  },

  description: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 28,
    backgroundColor: "#2F8CD8",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  skip: {
    textAlign: "center",
    color: "#6B7280",
    fontWeight: "600",
    marginBottom: 40,
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 3,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  footer: {
    paddingBottom: 60,
  },
});
