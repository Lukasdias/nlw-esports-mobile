import { Game } from "../api/types";

export interface RouteParams {
  game: Game;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      GameAds: { game: Game };
    }
  }
}
