import { Image } from "react-native";
import Logo1x from "./../../assets/logo-nlw-esports.png";
// import Logo2x from "./../../assets/logo-nlw-esports@2x.png";
// import Logo3x from "./../../assets/logo-nlw-esports@3x.png";

import { styles } from "./styles";

export function Logo() {
  return <Image style={styles.image} source={Logo1x} defaultSource={Logo1x} />;
}
