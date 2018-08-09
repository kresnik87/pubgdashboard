import { GameModeStats} from './index';


/**
 * Statistics for a player in a given season.
 *
 * Initialize this by calling the `get` method with an instance of `PubgAPI`, a player ID and
 * a season ID.
 *
 * The returned instance of this class will contain, for each game mode, the stats and a list of
 * Match IDs.
 */
export class PlayerSeason {
  private _playerId: string;
  private _seasonId: string;

  private _duoFPPStats: GameModeStats;
  private _duoStats: GameModeStats;
  private _duoMatchIds: string[];
  private _duoFPPMatchIds: string[];

  private _soloFPPStats: GameModeStats;
  private _soloStats: GameModeStats;
  private _soloMatchIds: string[];
  private _soloFPPMatchIds: string[];

  private _squadFPPStats: GameModeStats;
  private _squadStats: GameModeStats;
  private _squadMatchIds: string[];
  private _squadFPPMatchIds: string[];


  get playerId(): string {
    return this._playerId;
  }

  get seasonId(): string {
    return this._seasonId;
  }

  get duoFPPStats(): GameModeStats {
    return this._duoFPPStats;
  }

  get duoStats(): GameModeStats {
    return this._duoStats;
  }

  get duoMatchIds(): string[] {
    return this._duoMatchIds;
  }

  get duoFPPMatchIds(): string[] {
    return this._duoFPPMatchIds;
  }

  get soloFPPStats(): GameModeStats {
    return this._soloFPPStats;
  }

  get soloStats(): GameModeStats {
    return this._soloStats;
  }

  get soloMatchIds(): string[] {
    return this._soloMatchIds;
  }

  get soloFPPMatchIds(): string[] {
    return this._soloFPPMatchIds;
  }

  get squadFPPStats(): GameModeStats {
    return this._squadFPPStats;
  }

  get squadStats(): GameModeStats {
    return this._squadStats;
  }

  get squadMatchIds(): string[] {
    return this._squadMatchIds;
  }

  get squadFPPMatchIds(): string[] {
    return this._squadFPPMatchIds;
  }
}
