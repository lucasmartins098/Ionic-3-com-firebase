import { Component } from '@angular/core';
import { Dataeventos } from '../../providers/data-service/eventos-service';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Datagrupos  } from '../../providers/data-service/grupos-data';
import { NavController, ModalController, AlertController } from 'ionic-angular';


import * as moment from 'moment';
 
 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  eventSource = [];
  viewTitle: string; 
  selectedDay = new Date();
  contacts: any = null;
  tarefas: any = null; 
  deleters: any = null;
   
 
  calendar = {
    mode: 'month',
    locale: 'pt-BR',
    currentDate: new Date()
  };
  
  constructor(public Datagrupos:Datagrupos,public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, public dataService: Dataeventos, public DataServiceProvider: DataServiceProvider) { 
    this.getdata();
    
    
  }

  ionViewDidLoad() {
   
  }

  ionViewWillEnter(){
    
    this.getdata();
  
  }
 
  addEvent() { 
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
      this.updatall();
    });

  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
    
  }
  
  updatall() {
    this.eventSource = null;
    this.getdata();
  }

  onEventSelected(event) {
    
    
    let start = moment(event.startTime).format('DD/MM/YYYY HH:mm');
    let end = moment(event.endTime).format('DD/MM/YYYY HH:mm');
    
    
    let alert = this.alertCtrl.create({

      title: event.title,
      subTitle: 'Inicia: ' + start + '<br>Termina : ' + end,
      message: 'Inscritos: '+event.inscritos+'<br> tarefas: '+event.tarefas,
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Cancelar Evento',
        handler: () => {
          this.datadel(event.id);
          this.updatall();
          console.log(event.id);
        }
      }
      
    
    ]
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    
    this.selectedDay = ev.selectedTime;
  }


getdata(){
  
  this.contacts = this.dataService.getContacts('t')
    .then((contacts) => {
      this.contacts = contacts;
      var data = [];
      if(!contacts){
        this.contacts=[];
      }
      for (var i = 0; i < this.contacts.length; i++) {
        var loop = this.contacts[i];
        console.log(loop);
        this.datatarefas(loop.id);
        data.push({ "id": loop.id, "title": loop.nome, "startTime": new Date(loop.datainicio),"endTime":new Date(loop.datafim),"allDay":  false, "tarefas": loop.nenhum,"inscritos":loop.inscritos });
      }
      this.eventSource = data;
      
    },
      (error) => {
        console.log("error: " + error);
      });  
}


datadel(id){
  this.deleters = this.Datagrupos.delete_eve(id)
  .then((tarefas) => {
    console.log(tarefas);
  });
}


datatarefas(id) {
  this.tarefas = this.DataServiceProvider.gettarefas(id,'1')

    .then((tarefas) => {
      //console.log(tarefas);
    });


}





}




  
