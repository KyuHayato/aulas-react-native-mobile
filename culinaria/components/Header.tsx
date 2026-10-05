import { Text, View, TextInput, Image, StyleSheet } from "react-native";

export function Header({ nomeUsuario }: { nomeUsuario: string }) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.styleContainerFlex}>
          <View>
            <Text style={styles.fontStyle}>
              Olá, <Text>{nomeUsuario}</Text>
            </Text>
            <Text style={styles.subtitle}>O que vamos cozinhar?</Text>
          </View>
          <View>
            <Image
              style={styles.imageStyle}
              source={{
                uri: "https://play-lh.googleusercontent.com/5AROZScxdJCkaSlnu1SFWoYuA-5Qn7sTB7zQ-YM8FPWy9_0uo4uCURS_4AEN-11eVLaLDRzLhIrIgJJTT3C1jGc",
              }}
            />
          </View>
        </View>
        <TextInput
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          style={styles.searchBarStyle}
          placeholder="Buscar receita ou ingrediente"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "#18A77B",
    padding: "5%",
    borderRadius: 45,
  },
  styleContainerFlex: {
    flexDirection: "row",
    gap: 30,
    marginBottom: "5%",
    marginTop: "20%",
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white'
  },
  searchBarStyle: {
    backgroundColor: "white",
    borderRadius: 26,
    borderWidth: 1.5,
    padding: "4.5%",
    margin: "1%",
    paddingLeft: "8%",
    borderColor: "#18A77B",
    fontSize: 10,
  },
  fontStyle: {
    color: "white",
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
  },
});
