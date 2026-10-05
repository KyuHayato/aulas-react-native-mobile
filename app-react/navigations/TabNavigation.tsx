import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStaticNavigation } from "@react-navigation/native";
import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>({
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

export const TabNavigation = createStaticNavigation(Tab);