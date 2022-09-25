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
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";
import { HomeSkeleton } from "./skeleton";

export function Home() {
  const {
    games,
    loadingGames,
    currentAds,
    fetchGames,
    currentDiscord,
    fetchAdsByGame,
    fetchDiscord,
  } = useGameStore();

  const navigation = useNavigation();

  useEffect(() => {
    fetchGames();
  }, []);

  const renderItem = ({ item }: { item: Game }) => {
    return (
      <GameCard
        data={{
          id: item.id,
          name: item.name,
          cover: item.bannerUrl,
          ads: item?.ads?.toString() ?? "0",
        }}
        onPress={() => navigation.navigate("GameAds", { game: item })}
      />
    );
  };

  const keyExtractor = (item: Game) => item.id;

  const EmptyList = () => {
    return loadingGames ? (
      <HomeSkeleton />
    ) : (
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 24,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Nenhum jogo encontrado
        </Text>
      </View>
    );
  };

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
          ListEmptyComponent={EmptyList}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          horizontal
        />
      </SafeAreaView>
    </Background>
  );
}
