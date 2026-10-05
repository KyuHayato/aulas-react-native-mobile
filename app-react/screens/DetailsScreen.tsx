import { Text, View, Button, TextInput } from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigations/RootStack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Props = {
  route: {
    params: RootStackParamList["Details"];
  };
};

export function DetailsScreen({ route }: Props) {
  const navigation = useNavigation<NavigationProp>();
  const { detailId } = route.params;
  const [postText, setPostText] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
      }}
    >
      <TextInput
        multiline
        placeholder="Qual o valor inserido?"
        style={{
          height: 300,
          width: 300,
          padding: 10,
          backgroundColor: "white",
          borderRadius: 25,
          marginBottom: 10,
        }}
        value={postText}
        onChangeText={setPostText}
      />

      <Text>Details Screen {detailId}</Text>

      <Button
        title="Go to back"
        onPress={() =>
          navigation.popTo("Home", {
            post: postText,
          })
        }
      />
    </View>
  );
}
