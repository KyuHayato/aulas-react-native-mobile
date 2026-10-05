import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Navigation} from './navigations/RootStack'
import { TabNavigation } from "./navigations/TabNavigation";
import { DrawerNavigation } from "./navigations/DrawerNavigation";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      {/* <Navigation /> */}
        <DrawerNavigation />
      {/* <TabNavigation /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
