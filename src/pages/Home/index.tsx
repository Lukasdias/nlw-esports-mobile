import { View } from "react-native";
import { Logo } from "../../components/Logo";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
    </View>
  );
}
