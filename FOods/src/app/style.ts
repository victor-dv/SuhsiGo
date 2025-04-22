import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
    color: "#E63946",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    color: "#333",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },
  button: {
    backgroundColor: "#E63946",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    marginBottom:20
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  linkText: {
    textAlign: "center",
    color: "#E63946",
    fontSize: 16,
  },
});