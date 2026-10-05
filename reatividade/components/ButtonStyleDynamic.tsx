import { Text, View, Pressable, StyleSheet } from "react-native";

export function ButtonStyleDynamic() {
  return (
    <View>
      <Pressable
        style={({ pressed }) => ({
          borderWidth: 1,
          borderRadius: 25,
          paddingVertical: 10,
          paddingHorizontal: 25,
          backgroundColor: pressed ? "green" : "gray",
          opacity: pressed ? 0.8 : 1,
          transform: [
            {
              scale: pressed ? 1.3 : 1,
            },
          ],
        })}
      >
        <Text style={{ color: "white" }}>Apertar</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({});
