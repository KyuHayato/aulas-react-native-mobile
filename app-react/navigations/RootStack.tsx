import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";

import { HomeScreen } from "../screens/HomeScreen";
import { DetailsScreen } from "../screens/DetailsScreen";

export type RootStackParamList = {
  Home: {
    post?: string;
  };
  Details: {
    detailId: number;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
});
export const Navigation = createStaticNavigation(RootStack);
