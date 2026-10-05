import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStaticNavigation } from "@react-navigation/native";

import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Início",
      },
    },

    Profile: {
      screen: ProfileScreen,
      options: {
        title: "Perfil",
      },
    },

    Settings: {
      screen: SettingsScreen,
      options: {
        title: "Configurações",
      },
    },
  },
});

export const DrawerNavigation =
  createStaticNavigation(Drawer);