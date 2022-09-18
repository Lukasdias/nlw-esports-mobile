import React from "react";
import { StatusBar, View } from "react-native";

import { styles } from "./styles";
import { Text } from "react-native";
import { Background } from "../../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";

export function GameAds({ navigation, route }) {
  const { game } = route.params;
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={styles.container}>
        <Text>{JSON.stringify(game)}</Text>
      </SafeAreaView>
    </Background>
  );
}
