import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  divImagem: {
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    padding: 20,
    width: "70%",
  },
  imagemMarcelo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  textoApresentacao: {
    fontSize: 16,
    color: "#333",
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 15,
  },

  filmes: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  viewBotao: {
    display: "flex",
  flexDirection: "row",
  gap: 20,
  },
});

export default styles;
