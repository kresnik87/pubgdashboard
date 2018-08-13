
import {PlatformRegion} from "../../helpers";
import { Api } from '../api/api';
import {Observable} from "rxjs/Observable";


export class PlayersPubgAPI {
  constructor(
    public api:Api
  ){

  }

  get(playerId:String,plat:PlatformRegion){
    this.api.get(`/${plat}/players/${playerId}`)
  }

  getSeasonStats(playerId: string, seasonId: string,plat:PlatformRegion): Observable<any> {
    return this.api.get(`/${plat}/players/${playerId}/seasons/${seasonId}`);
  }

  listByID(playerIDs: string[]): Observable<any> {
    return this.api.get('/players', {params: {'filter[playerIds]': playerIDs.join(',')}});
  }

  listByName(playerNames: string[],plat:PlatformRegion): Observable<any> {
    return this.api.get(`/${plat}/players`, {params: {'filter[playerNames]': playerNames.join(',')}});
  }

}
