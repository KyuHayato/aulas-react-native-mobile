import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  ToastAndroid,
} from "react-native";
import { useState } from "react";

export function Contador({ inicio }: { inicio: number }) {
  const [numeroReativo, setNumeroReativo] = useState(inicio);
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          title="  +  "
          onPress={() => {
            setNumeroReativo((num) => num + 1);
          }}
        />
        <Pressable
          style={{
            borderWidth: 1,
            borderRadius: 25,
            paddingHorizontal: "5%",
            paddingVertical: "3%",
            backgroundColor: "green",
          }}
          onLongPress={() => {
            ToastAndroid.show(
              "Mensagem exibida embaixo!", // Texto do aviso
              ToastAndroid.LONG,
            ); // Duração (SHORT ou LONG)
          }}
        >
          <Text style={{ color: "white" }}> + </Text>
        </Pressable>
        <Text style={{ fontSize: 35, paddingHorizontal: 20 }}>
          {numeroReativo}
        </Text>
        <Button
          title="  -  "
          onPress={() => {
            setNumeroReativo((num) => num - 1);
          }}
        />
        <TextInput
          onBlur={() => console.log("passei")}
          placeholder="teste"
          onFocus={() => console.log("ganhei foco")}
        />
      </View>
    </View>
  );
}
