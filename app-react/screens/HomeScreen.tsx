import { Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigations/RootStack";

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  route: {
    params?: RootStackParamList["Home"];
  };
};

export function HomeScreen({ route }: Props) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f5ae",
      }}
    >
      <Text>Home Screen</Text>
      <Text>
        Post: {route.params?.post ?? "Nenhum texto recebido"}
      </Text>

      <Button
        onPress={() =>
          navigation.navigate("Details", {
            detailId: 1,
          })
        }
      >
        Go to Details
      </Button>
    </View>
  );
}