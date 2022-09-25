import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  StatusBar,
  View,
  Image,
  ImageBackground,
  Alert,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { Text } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import { Background } from "../../components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import Logo from "./../../assets/logo-nlw-esports.png";
import { Ad, Game } from "../../api/types";
import { useGameStore } from "../../stores/gameStore";
import { AdCard } from "../../components/AdCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "../../@types/navigation";
import { Modalize } from "react-native-modalize";
import { CheckCircle, DiscordLogo } from "phosphor-react-native";
import { THEME } from "../../theme";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";
import { Skeleton } from "moti/skeleton";
import { GameAdsSkeleton } from "./skeleton";

export function GameAds() {
  const {
    fetchAdsByGame,
    fetchGames,
    currentAds,
    fetchDiscord,
    currentDiscord,
    loadingCurrentDiscord,
    loadingCurrentAds,
    cleanAdsByGame,
    cleanCurrentDiscord,
  } = useGameStore();
  const navigation = useNavigation();
  const route = useRoute();
  const { game } = route.params as RouteParams;
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    fetchAdsByGame(game.id);
  }, []);

  useEffect(() => {
    return () => {
      cleanAdsByGame();
      cleanCurrentDiscord();
      fetchGames();
      console.log("cleaned");
    };
  }, []);

  const keyExtractor = useCallback(
    (item: Ad, index: number) => index.toString(),
    []
  );

  const onOpen = (ad: Ad) => {
    fetchDiscord(ad.id);
    modalizeRef.current?.open();
  };

  const renderItem = ({ item, index }: { item: Ad; index: number }) => {
    return <AdCard key={index} ad={item} onConnect={onOpen} />;
  };

  const EmptyList = () => {
    return loadingCurrentAds ? (
      <GameAdsSkeleton />
    ) : (
      <Text style={styles.emptyList}>Nenhum anúncio encontrado</Text>
    );
  };

  const showToast = () => {
    Toast.show({
      type: "info",
      position: "top",
      text1: "Copiado com sucesso!",
      visibilityTime: 1000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft color="#fff" size={36} />
          </TouchableOpacity>
          <Image source={Logo} style={styles.logoImage} />
          <View
            style={{
              width: 36,
              height: 36,
            }}
          />
        </View>
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: game?.bannerUrl,
              cache: "force-cache",
            }}
            style={styles.bannerImage}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 24,
          }}
        >
          <Text style={styles.title}>{game?.name}</Text>
          <Text style={styles.subtitle}>Conecte-se e comece a jogar!</Text>

          <FlatList
            data={currentAds}
            keyExtractor={keyExtractor}
            maxToRenderPerBatch={12}
            initialNumToRender={12}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              marginRight: 24,
              alignItems: "flex-start",
            }}
            ListEmptyComponent={EmptyList}
            renderItem={renderItem}
          />
        </View>
        <Modalize ref={modalizeRef} adjustToContentHeight>
          <View style={styles.modal}>
            <CheckCircle
              weight={"bold"}
              color={THEME.COLORS.SUCCESS}
              size={64}
              style={styles.modalTitleIcon}
            />
            <Text style={styles.modalTitle}>Let’s play!</Text>
            <Text style={styles.modalSubtitle}>
              Agora é só começar a jogar!
            </Text>
            <View style={styles.modalLabel}>
              <Text style={styles.modalLabelText}>Adicione no Discord</Text>
            </View>
            <TouchableOpacity
              style={styles.modalDiscordButton}
              onPress={async () => {
                if (!currentDiscord || loadingCurrentDiscord) return;
                await Clipboard.setStringAsync(currentDiscord);
                modalizeRef.current?.close();
                showToast();
              }}
            >
              {loadingCurrentDiscord ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                <Text style={styles.modalDiscordButtonText}>
                  {currentDiscord}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </Modalize>
        <Toast />
      </SafeAreaView>
    </Background>
  );
}
