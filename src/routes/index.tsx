import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/Home";
import { GameAds } from "../pages/GameAds";
import { THEME } from "../theme";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
        defaultScreenOptions={{
          animationEnabled: true,
          detachPreviousScreen: true,
          cardStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="GameAds" component={GameAds} />
      </Navigator>
    </NavigationContainer>
  );
}
