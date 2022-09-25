import create from "zustand";
import { Ad, Game } from "../api/types";
import * as api from "../api";

type GameStore = {
  games: Game[];
  loadingGames: boolean;
  currentAds: Ad[];
  loadingCurrentAds: boolean;
  cleanCurrentAds: () => void;
  currentDiscord: string;
  loadingCurrentDiscord: boolean;
  cleanCurrentDiscord: () => void;
  fetchGames: () => void;
  fetchDiscord: (adId: string) => void;
  fetchAdsByGame: (gameId: string) => void;
  errorOnFetchGames: boolean;
  errorOnFetchAdsByGame: boolean;
  errorOnFetchDiscord: boolean;
  cleanGames: () => void;
  cleanAdsByGame: () => void;
  cleanDiscord: () => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  games: [],
  loadingGames: true,
  currentAds: [],
  loadingCurrentAds: true,
  loadingCurrentDiscord: true,
  currentDiscord: "",
  errorOnFetchGames: false,
  errorOnFetchAdsByGame: false,
  errorOnFetchDiscord: false,
  cleanCurrentAds: () => set({ currentAds: [] }),
  cleanCurrentDiscord: () => set({ currentDiscord: "" }),
  fetchGames: async () => {
    set({ loadingGames: true });
    try {
      set({
        games: (await api.getGames()) ?? ([] as Game[]),
      });
    } catch (error) {
      set({ loadingGames: false, errorOnFetchGames: true });
    } finally {
      set({ loadingGames: false });
    }
  },
  fetchDiscord: async (adId: string) => {
    try {
      set({ loadingCurrentDiscord: true });
      set({
        currentDiscord: (await api.getDiscord({ adId })) ?? "",
      });
    } catch (error) {
      set({ loadingCurrentDiscord: false, errorOnFetchDiscord: true });
    } finally {
      set({ loadingCurrentDiscord: false });
    }
  },
  fetchAdsByGame: async (gameId: string) => {
    try {
      set({ loadingCurrentAds: true });
      set({
        currentAds: (await api.getAdsByGame({ gameId })) ?? ([] as Ad[]),
      });
    } catch (error) {
      set({ loadingCurrentAds: false, errorOnFetchAdsByGame: true });
    } finally {
      set({ loadingCurrentAds: false });
    }
  },
  cleanGames: () =>
    set({ games: [], errorOnFetchGames: false, loadingGames: false }),
  cleanAdsByGame: () =>
    set({
      currentAds: [],
      errorOnFetchAdsByGame: false,
      loadingCurrentAds: true,
    }),
  cleanDiscord: () =>
    set({
      currentDiscord: "",
      errorOnFetchDiscord: false,
      loadingCurrentDiscord: true,
    }),
}));
