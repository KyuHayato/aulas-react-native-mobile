import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

export type DificultFood = "Fácil" | "Médio" | "Difícil";

interface RecipeCardProp {
  nameFood: string;
  categoryFood: string;
  dificultFood: DificultFood;
  onPress: () => void;
}
const dificultFoodColors: Record<
  DificultFood,
  { backgroundColor: string; color: string }
> = {
  Fácil: {
    backgroundColor: "#141816",
    color: "#087F5B",
  },
  Médio: {
    backgroundColor: "#FFD08A",
    color: "#8A4B08",
  },
  Difícil: {
    backgroundColor: "#F5B3CB",
    color: "#9D174D",
  },
};

export function RecipeCard({
  nameFood,
  categoryFood,
  dificultFood,
  onPress,
}: RecipeCardProp) {
  const dificultColors = dificultFoodColors[dificultFood];
  return (
    <View style={styles.containerRecipeCard}>
      <View>
        <View style={styles.imageFood} />
      </View>
      <View style={styles.infoFood}>
        <Text style={styles.nameFoodStyle}>{nameFood}</Text>
        <Text style={styles.categoryFoodStyle}>{categoryFood}</Text>
        <View
          style={[
            styles.dificultFoodStyle,
            { backgroundColor: dificultColors.backgroundColor },
          ]}
        >
          <Text
            style={[styles.dificultFoodText, { color: dificultColors.color }]}
          >
            {dificultFood}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            Alert.alert(
              "Receita selecionada",
              `${nameFood} - ${dificultFood}`,
              [
                { text: "Cancelar", style: "cancel" },
                { text: "Abrir", onPress: onPress },
              ],
            );
          }}
        >
          <Text style={styles.buttonText}>Ver</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRecipeCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 16,
    marginBottom: 12,
  },
  imageFood: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#D4F0E7",
    flexShrink: 0,
  },
  infoFood: {
    flex: 1,
    minWidth: 0,
    gap: 3,
  },
  nameFoodStyle: {
    fontSize: 18,
    flexShrink: 1,
  },
  dificultFoodText: {
    fontSize: 12,
  },
  categoryFoodStyle: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 2,
  },
  buttonContainer: {
    flexShrink: 0,
    alignSelf: "center",
  },
  buttonStyle: {
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#18A77B",
    borderWidth: 1,
    borderColor: "#18A77B",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  dificultFoodStyle: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 50,
  },
});
