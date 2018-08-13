import { IPlayer, IPlayerList, IPlayerObject } from '../interfaces';


/**
 * A PUBG Player.
 *
 * Contains basic info about a Player, such as ID and name.
 *
 * To retrieve details on the Matches this player took part in, see `Match` class.
 */
export class Player {
  private _id: string;
  private _name: string;
  private _shardId: string;
  private _matchIds: string[];

  private constructor(player: IPlayerObject) {
    this._id = player.id;
    this._name = player.attributes.name;
    this._shardId = player.attributes.shardId;
    this._matchIds = player.relationships!.matches.data.map(m => m.id);
  }

  /**
   * Fetch a Player from PUBG API.
   *
   * Returns a `Promise` of the corresponding instance of the `Player` class.
   *
   * To retrieve a `Player`, **await** on the result of this method.
   *
   * @param api instance of `PubgAPI` that will be used to make the API request
   * @param playerId ID of the player to retrieve
   */


  /**
   * Fetch a list of Players from PUBG API given a list of player IDs as input.
   *
   * Returns a `Promise` of a list of `Player` instances of players with the given IDs.
   *
   * To retrieve a list of `Player`s, **await** on the result of this method.
   *
   * @param api instance of `PubgAPI` that will be used to make the API request
   * @param playerIds list of player IDs
   */

  /**
   * Fetch a list of Players from PUBG API, given a list of player names as input.
   *
   * Returns a `Promise` of a list of `Player` instances of players with the given names.
   *
   * To retrieve a list of `Player`s, **await** on the result of this method.
   *
   * @param api instance of `PubgAPI` that will be used to make the API request
   * @param playerNames list of player names
   */


  /**
   * Create and return a Player instance from an API player detail reply.
   * @param playerDetail Player resource as returned from PUBG API
   */

  /**
   * Create and return a list of Player instances from an API player list reply.
   * @param playerList PlayerList resource as returned from PUBG API
   */


  /**
   * Player ID.
   */
  get id() {
    return this._id;
  }

  /**
   * Player name.
   */
  get name() {
    return this._name;
  }

  /**
   * List of match IDs this player took part in.
   * This list is ordered from most recent to oldest.
   */
  get matchIds() {
    return this._matchIds;
  }

}
