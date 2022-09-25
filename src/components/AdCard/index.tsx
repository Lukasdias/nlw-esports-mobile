import { GameController } from "phosphor-react-native";
import React, { useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ad } from "../../api/types";
import { THEME } from "../../theme";

import { styles } from "./styles";

interface Props {
  ad: Ad;
  onConnect: (ad: Ad) => void;
}

export function AdCard({ ad, onConnect }: Props) {
  const formatTime = (time: string) => {
    return time.slice(0, 2);
  };

  const startHour = useMemo(
    () => formatTime(ad?.hourStart.toString()),
    [ad?.hourEnd.toString()]
  );
  const endHour = useMemo(
    () => formatTime(ad?.hourEnd.toString()),
    [ad?.hourEnd.toString()]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label} numberOfLines={1}>
        Nome
      </Text>
      <Text style={styles.subLabel} numberOfLines={1}>
        {ad?.name}
      </Text>

      <Text style={styles.label} numberOfLines={1}>
        Tempo de jogo
      </Text>
      <Text style={styles.subLabel} numberOfLines={1}>
        {ad?.yearsPlaying} anos
      </Text>

      <Text style={styles.label} numberOfLines={1}>
        Disponibilidade
      </Text>
      <Text style={styles.subLabel} numberOfLines={1}>
        {`${ad?.weekDays?.length} dias \u2022 `}
        {`${startHour}h - ${endHour}h`}
      </Text>

      <Text style={styles.label} numberOfLines={1}>
        Chamada de áudio?
      </Text>
      <Text
        numberOfLines={1}
        style={ad?.useVoiceChannel ? styles.subLabelTrue : styles.subLabelFalse}
      >
        {ad?.useVoiceChannel ? "Sim" : "Não"}
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => onConnect(ad)}>
        <GameController color={"#fff"} />
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
