export type Ad = {
  id: string;
  name: string;
  weekDays: string;
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourEnd: number;
  hourStart: number;
};
export type Game = {
  id: string;
  name: string;
  bannerUrl: string;
  ads: number;
};

export type GetDiscordRequest = {
  adId: string;
};

export type GetAdsByGameRequest = {
  gameId: string;
};

export type AddAdToGameRequest = {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
};
