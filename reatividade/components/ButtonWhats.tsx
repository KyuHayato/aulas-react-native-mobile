import { View, Pressable, Image} from "react-native";
export function ButtonWhats() {
  return (
    <View>
      <View>
        <Pressable>
          <Image
            style={{ width: 70, height: 70 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
            }}
          />
        </Pressable>
      </View>
    </View>
  );
}
