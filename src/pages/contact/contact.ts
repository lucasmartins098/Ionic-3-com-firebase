import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/data-service/auth';

import { Dataeventos } from '../../providers/data-service/eventos-service';
import { DataServiceProvider } from '../../providers/data-service/data-service';

import { EdetPage } from '../edet/edet';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  EdetPage = EdetPage
  contacts: any = null;
  tarefas: any = null;
  data: any = [];
  usuario: any = null;
  volta: any = null;
  condition: any = null;
  selectedDay = new Date();
  upda: any = '1';


  constructor(auth: AuthService,public navCtrl: NavController,public navParams: NavParams, public dataService: Dataeventos, public DataServiceProvider: DataServiceProvider) {
   
    
    auth.storage.get('token').then(token => {
      this.usuario = token.token.id;
      
      this.getdata(token.token.id);
    });
    
    
    
  } 

  ionViewWillEnter(){
    
    this.getdata(this.usuario);
  
  }

  ionViewWillLoad() {
   
  }
  

  ionViewDidLoad() {
   
  }

  ngOnInit() {
    
    
  }

  onSelect(item) {
    this.navCtrl.push(EdetPage, { contact: item });
  }

  datatarefas(id) {
    this.tarefas = this.DataServiceProvider.gettarefas(id,this.usuario)

      .then((tarefas) => {
      });


  }

  getdata(token){
   
    this.contacts = this.dataService.getContacts(token)


      .then((contacts) => {
        this.data=[];
        this.contacts = contacts;
        if(!contacts){
          this.contacts = [];
        }
        for (var i = 0; i < this.contacts.length; i++) {
          var loop = this.contacts[i];
          this.datatarefas(loop.id);
          if(loop.confirma === 'Confirmado'){
            this.condition = '#2c2351';
          } else {
            this.condition = 'red';
            loop.confirma = 'Não Confirmado';
          }
           this.data.push({ "id": loop.id, "nome": loop.nome, "datainicio": loop.datainicio, "tarefas": loop.tarefas, "confirma": loop.confirma, 'nenhum': loop.nenhum, 'logado': this.usuario,'cor': this.condition }) ;
        }
        

      },
        (error) => {
          console.log("error: " + error);
        });
  }


 

}