import {
  View,
  Text,
  // Image,
  TextInput,
  Button,
  // Pressable,
  Alert,
  StyleSheet,
  ScrollView,
  StyleProp,
  TextStyle,
  ViewStyle,
  Pressable,
} from "react-native";
import type { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import {Produto} from './src/Interfaces'

export function Box({ nome }: { nome: string }) {
  return (
    <View style={styles.box}>
      <Text style={{ textAlign: "center" }}> {nome} </Text>
    </View>
  );
}
type TypeButton = {
  nome: "Salvar" | "Excluir" | "Alterar";
};
export function NewButton({ nome }: TypeButton) {
  return <Button title={nome} />;
}
interface CustomButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
export function CustomButton({
  title,
  onPress,
  textStyle,
  style,
}: CustomButtonProps) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
interface CustomPropNode {
  children: ReactNode;
}

export function ComponenteGenerico({ children }: CustomPropNode) {
  return <View>{children}</View>;
}
// interface CustomButtonProps {
//   title: string;
//   onPress: () => void;
//   textStyle?: StyleProp<TextStyle>; // Aceita objetos de estilo, arrays ou StyleSheet
//   style?: StyleProp<ViewStyle>;
// }
// export function CustomButton({ title, onPress, style }: CustomButtonProps) {
//   return (
//     <Pressable onPress={onPress}>
//       <Text style={style}> {title}</Text>
//     </Pressable>
//   );
// }
export default function App() {
  // let produtos: Produto[]
  // produtos = [
  //   {},
  //   {},
  //   {}
  // ]
  const nome = "Nilsonx";
  let num = 0;
  function mostrarTexto(texto: string) {
    Alert.alert(texto);
  }
  function ola(texto: string) {
    return texto;
  }
 let texto: string = 'texto'
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ComponenteGenerico>
          <Box nome="B" />
          <Text>Texto</Text>
        </ComponenteGenerico>
        <ScrollView
          showsVerticalScrollIndicator={true}
          // horizontal={true}
          pagingEnabled={true}
        >
          {/* <CustomButton
            title="Entrar"
            onPress={() => {}}
            textStyle={styles.tituloLegenda}
            style={[styles.pressableButton, {backgroundColor: 'yellow'}]}
            
          /> */}
          {/* <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Olá meu primeiro aplicativo! {ola("Passando o valor")}
          </Text>
        </View> */}
          {/* <View style={{ backgroundColor: "blue" }}>
          <Text>
            Container 1{" "}
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Novo Texto
            </Text>
          </Text>
        </View>
        <View>
          <Text style={{ backgroundColor: "red" }}>Container 2</Text>
        </View> */}
          {/* <Image
          style={{ width: 200, height: 300 }}
          source={{
            uri: "https://dicionariompb.com.br/wp-content/uploads/2021/04/NILSON-CHAVES.jpg",
          }}
        />
        <View>
          <Text style={styles.textoLegenda}>
            <Text style={styles.tituloLegenda}>Legenda da imagem: {"\n"}</Text>
            Essa imagem descreve um jovem idoso na flor da idade.
          </Text>
        </View> */}

          {/* <Image
        source={require("./assets/kaneki.jpg")}
        // style={{ width: 200, height: 300 }}
      /> */}
          <View style={{ flex: 1 }}>
            <TextInput
              style={[styles.estiloInput, styles.estiloSec, { color: "white" }]}
              placeholder="Insira seu numero"
              onChangeText={(text) => {
                texto = text
              }}
              />
              <Text>{texto}</Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.estiloInput}
                placeholder="Insira seu email"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.estiloInput}
                placeholder="Insira sua senha"
                secureTextEntry={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 50,
              gap: 40,
            }}
          >
            <Button
              title="Salvar"
              onPress={() => {
                Alert.alert("Olá me pressione", "Segundo texto", [
                  {
                    text: "Cancelar",
                    onPress: () => mostrarTexto("Cancelado " + num++),
                  },
                  {
                    text: "Excluir",
                    onPress: () => mostrarTexto("Excluido! " + num--),
                  },
                ]);
              }}
            />
            <Button
              title="Salvar"
              onPress={() => {
                Alert.alert("Olá me pressione", "Segundo texto", [
                  {
                    text: "Cancelar",
                    onPress: () => mostrarTexto("Cancelado " + num++),
                  },
                  {
                    text: "Excluir",
                    onPress: () => mostrarTexto("Excluido! " + num--),
                  },
                ]);
              }}
            />
          </View>

          {/* <Pressable
          onPress={() => Alert.alert("Teste")}
          style={styles.pressableButton}
        >
          {({ pressed }) => (
            <Text style={styles.pressableText}>
              {pressed ? "Enviando..." : "Entrar em conta"}
            </Text>
          )}
        </Pressable> */}
          {/* <>
          <Text style={styles.textoSemContainer}>
            Texto sem nenhum container
          </Text>
        </> */}
          <CustomButton
            title="Salvar"
            textStyle={{ fontSize: 25, color: "white" }}
            onPress={() => Alert.alert("Componente")}
            style={[
              styles.buttonCustomStyle,
              {
                backgroundColor: "green",
                marginBottom: 20,
                alignItems: "center",
              },
            ]}
          />
          <CustomButton
            title="Excluir"
            textStyle={{ fontSize: 25, color: "white" }}
            onPress={() => Alert.alert("Novo Componente")}
            style={[
              styles.buttonCustomStyle,
              {
                backgroundColor: "red",
                marginBottom: 20,
                alignItems: "center",
              },
            ]}
          />

          <View style={styles.estiloFlex}>
            <Box nome="A" />
            <Box nome="B" />
            <Box nome="C" />
            {/* <Box nome="D" />
            <Box nome="E" />
            <Box nome="F" />
            <Box nome="G" />
            <Box nome="H" /> */}
            {/* <NewButton nome="Alterar" />
            <NewButton nome="Excluir" />
            <NewButton nome="Salvar" /> */}
            {/* <View style={styles.box}>
              <Text style={{ textAlign: "center" }}>A</Text>
            </View>
            <View style={styles.box}>
              <Text style={{ textAlign: "center" }}>B</Text>
            </View>
            <View style={styles.box}>
              <Text style={{ textAlign: "center" }}>C</Text>
            </View>
            <View style={styles.box}>
              <Text style={{ textAlign: "center" }}>D</Text>
            </View>
            <View style={styles.box}>
              <Text style={{ textAlign: "center" }}>E</Text>
            </View>
            <View style={styles.box}>
              <Text style={{ textAlign: "center" }}>F</Text>
            </View>
            <View style={styles.box}>
              <Text style={{ textAlign: "center" }}>G</Text>
            </View>
            {/* <View style={styles.box}>
            <Text style={{ textAlign: "center" }}>D</Text>
          </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  buttonCustomStyle: {
    borderWidth: 2,
    borderColor: "Black",
    width: 200,
    borderRadius: 20,
  },
  estiloSec: {
    backgroundColor: "red",
  },
  estiloFlex: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
    // height: 600,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    borderWidth: 2,
    borderRadius: 15,
  },
  textoSemContainer: {
    backgroundColor: "blue",
    color: "white",
  },
  estiloInput: {
    borderStyle: "solid",
    borderWidth: 1.5,
    borderRadius: 10,
    margin: 10,
  },
  tituloLegenda: {
    fontWeight: "bold",
    fontSize: 14,
  },
  textoLegenda: {
    fontFamily: "Cochin",
  },
  pressableButton: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    backgroundColor: "green",
    margin: 20,
    width: 300,
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
