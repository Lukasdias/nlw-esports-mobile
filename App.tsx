import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Background } from "./src/components/Background";
import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { Home } from "./src/pages/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
