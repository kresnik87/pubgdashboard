import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {Player} from '../../models/';
import {PlayersPubgAPI} from '../../providers/providers';
import {PlatformRegion} from "../../helpers";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  player: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public playerApi: PlayersPubgAPI) {

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
this.getPlayerByName();
  }

  getPlayerByName() {
    let name: string[] = ["Kresnik87"];
    let plat=PlatformRegion.PC_EU;
    this.playerApi.listByName(name,plat).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log(error);
      });

  }

}
