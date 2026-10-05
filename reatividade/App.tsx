import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Switch,
  Image,
} from "react-native";
import { useState } from "react";
import {ButtonEspecial} from './components/ButtonEspecial'
import {ButtonWhats} from './components/ButtonWhats'
import { ButtonStyleDynamic } from "./components/ButtonStyleDynamic";
import { ModalComponents } from "./components/ModalComponents";
export default function App() {
  // const [texto, setTexto] = useState("");
const [toggle, setToggle] = useState(false)
  return (
    <View style={styles.container}>
    {/* {toggle ? <ButtonWhats/> : <ButtonEspecial/>}
    <Button title="Toggle" onPress={() => setToggle(!toggle)}/>
     <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={toggle ? '#10cf23' : '#f4f3f4'}
          onValueChange={() => setToggle(!toggle)}
          value={toggle}
        /> */}

        {/* <ButtonStyleDynamic /> */}
        <ModalComponents />
      {/* <TextInput
        placeholder="Insira um texto"
        style={styles.inputStyle}
        onChangeText={(text) => {
          setTexto(text);
        }}
      />
      <Text>Texto: {texto}</Text> */}
      {/* <Contador inicio={0} />
      <Contador inicio={0} />
      <Contador inicio={0} /> */}

      {/* <Pressable
        onPress={() => console.log("Segue")}
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="arrow-right" size={50} color="red" />
      </Pressable>
      <Pressable onPress={() => console.log('Gello')}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3536/3536445.png",
          }}
        />
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3c8c8",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 20,
  },
});
