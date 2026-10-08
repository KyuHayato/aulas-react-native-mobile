import { View, Text, StyleSheet } from "react-native";

export function CategoryItem({ nameCategory }: { nameCategory: string }) {
  return (
    <View>
      <View style={styles.imageCategory}></View>
      <Text style={styles.textCategory}>{nameCategory}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageCategory: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#18A77B",
    backgroundColor: "white",
  },
  textCategory: {
    textAlign: "center",
    fontSize: 12,
  },
});
