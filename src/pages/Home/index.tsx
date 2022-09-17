import { View, Text, FlatList } from "react-native";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { Logo } from "../../components/Logo";

import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        horizontal
        initialNumToRender={20}
        maxToRenderPerBatch={20}
      />
    </View>
  );
}
