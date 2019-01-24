import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactModel } from '../../components/contact-model';
@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {
  selectedContact: ContactModel = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.selectedContact = navParams.get("contact");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailPage');
  }
}