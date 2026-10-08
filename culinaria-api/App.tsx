import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/Header";
import { CategoryItem } from "./components/CategoryItem";
import { RecipeCard, DificultFood } from "./components/RecipeCard";
import { useEffect, useState } from "react";
import { Recipe } from "./types/Recipe";
import { getRecipesAll } from "./services/recipeService";
import axios from "axios";

//Tipos dados
interface Category {
  id: string;
  nameCategory: string;
}

//Dados categoria
const categories: Category[] = [
  { id: "1", nameCategory: "Saladas" },
  { id: "2", nameCategory: "Massas" },
  { id: "3", nameCategory: "Carnes" },
  { id: "4", nameCategory: "Doces" },
  { id: "5", nameCategory: "Saladas" },
  { id: "6", nameCategory: "Doces" },
  { id: "7", nameCategory: "Saladas" },
  { id: "8", nameCategory: "Carnes" },
];
// Dados Receita
// const recipes: Recipe[] = [
//   {
//     id: "1",
//     nameFood: "Empadão",
//     categoryFood: "Salgado",
//     dificultFood: "Médio",
//   },
//   {
//     id: "2",
//     nameFood: "Cachorro quente",
//     categoryFood: "Salgado",
//     dificultFood: "Fácil",
//   },
//   {
//     id: "3",
//     nameFood: "Strogonoff de frango",
//     categoryFood: "Salgado",
//     dificultFood: "Médio",
//   },
//   {
//     id: "4",
//     nameFood: "Bolo de rolo",
//     categoryFood: "Doce",
//     dificultFood: "Difícil",
//   },
//   {
//     id: "5",
//     nameFood: "Sanduiche natural",
//     categoryFood: "Sobre a mesa",
//     dificultFood: "Fácil",
//   },
//   {
//     id: "6",
//     nameFood: "Cachorro quente",
//     categoryFood: "Salgado",
//     dificultFood: "Fácil",
//   },
//   {
//     id: "7",
//     nameFood: "Surpresa de uva",
//     categoryFood: "Doce",
//     dificultFood: "Difícil",
//   },
// ];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  async function loadRecipes() {
    try {
      setLoading(true);
      const data = await getRecipesAll();
      setRecipes(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status);
        console.log(error.response?.data);
      } else {
        console.log("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadRecipes();
  }, []);

  if (loading) {
    return (
      <Text style={{ flex: 1, alignContent: "center", textAlign: "center" }}>
        Carregando...
      </Text>
    );
  }

  //Renderiza cada Categoria
  const renderCategory: ListRenderItem<Category> = ({ item }) => {
    return <CategoryItem nameCategory={item.nameCategory} />;
  };
  //Renderiza cada Receita
  const renderRecipe: ListRenderItem<Recipe> = ({ item }) => {
    return (
      <RecipeCard
        nameFood={item.nameFood}
        categoryFood={item.categoryFood}
        dificultFood={item.dificultFood}
        onPress={() => {
          Alert.alert(
            "Receita selecionada",
            `${item.nameFood} · ${item.dificultFood}`,
            [
              {
                text: "Cancelar",
                style: "cancel",
              },
              {
                text: "Abrir",
                onPress: () => {
                  Alert.alert(
                    "Abrindo receita",
                    `Carregar detalhes da receita ${item.id}`,
                  );
                },
              },
            ],
          );
        }}
      />
    );
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={recipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.id}
          style={styles.recipeList}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View>
              <Header nomeUsuario="Kyu" />
              <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}
              />
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Receitas em destaque</Text>

                <Text style={styles.seeAll}>Ver todas</Text>
              </View>
            </View>
          }
          ListFooterComponent={
            <View>
              <Text style={styles.logout}>Sair da conta</Text>
            </View>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF5F0",
  },
  recipeList: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    paddingHorizontal: "5%",
    paddingBottom: 20,
  },
  categoriesList: {
    gap: 12,
    paddingVertical: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
  },
  seeAll: {
    color: "#76C457",
    fontSize: 12,
  },
  logout: {
    color: "#76C457",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
});
