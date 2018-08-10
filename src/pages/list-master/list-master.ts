import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {Item} from '../../models/item';
import {Items} from '../../providers/providers';
import {PlatformRegion, Player, PubgAPI} from 'pubg-typescript-api';

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2ZDllODNiMC02MDA2LTAxMzYtMDFhOC0wNTk3MzUyNmNmMzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTMwNTIyOTQ2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymctc3RhdHMtZGFzaGJvYXJkIn0.KbhLD81VWCVAytGKVDY9CbYaeUdk_AP3-vbuUdDx2ZE';
const api = new PubgAPI(API_KEY, PlatformRegion.PC_EU);
const players =  Player.filterByName(api, ['KresniK87']);
const player = players[0];
@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {

    console.log(player);
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
