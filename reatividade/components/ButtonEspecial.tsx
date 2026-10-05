import { Text, View, Pressable} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export function ButtonEspecial() {
   
  return (
    <View>
      <View>
        <Pressable onPress={() => console.log("Presisoado")}>
          <AntDesign name="audio" size={60} color="red" />
          <Text>Gravar</Text>
        </Pressable>
      </View>
    </View>
  );
}
