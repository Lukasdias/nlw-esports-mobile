import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { Logo } from "../../components/Logo";

import { GAMES } from "../../utils/games";

import { styles } from "./styles";
import { useCallback, useEffect } from "react";
import { Background } from "../../components/Background";
import { useGameStore } from "../../stores/gameStore";
import { Loading } from "../../components/Loading";
import { THEME } from "../../theme";
import { Game } from "../../api/types";

export function Home({ navigation }) {
  const {
    games,
    loadingGames,
    currentAds,
    fetchGames,
    currentDiscord,
    fetchAdsByGame,
    fetchDiscord,
  } = useGameStore();

  useEffect(() => {
    fetchGames();
  }, []);

  const renderItem = ({ item }: { item: Game }) => {
    return (
      <>
        {loadingGames ? (
          <View
            style={{
              width: 320,
              height: 320,
              backgroundColor: THEME.COLORS.CAPTION_300,
              borderRadius: 8,
              marginRight: 8,
            }}
          >
            <Loading />
          </View>
        ) : (
          <GameCard
            data={{
              id: item.id,
              name: item.name,
              cover: item.bannerUrl,
              ads: item?.ads?.toString() ?? "0",
            }}
            onPress={() => navigation.navigate("GameAds", { game: item })}
          />
        )}
      </>
    );
  };

  const keyExtractor = (item: Game) => item.id;

  return (
    <Background>
      <StatusBar style={"light"} translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={games}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          horizontal
        />
      </SafeAreaView>
    </Background>
  );
}
