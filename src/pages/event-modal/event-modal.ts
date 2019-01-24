import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Datagrupos  } from '../../providers/data-service/grupos-data';
import * as moment from 'moment';

 
@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})


export class EventModalPage {
  isenabled:boolean=false;
  nome: any = null;
  gruposel: any = true;
  tarefassel:any = null;
  final:any = null;
  finalins: any = null;
  tarefas:any = [];
  grupos: any = [];
  listausr: any = [];
  contacts: any = null;
  usrs: any = null;
  data: any = [];
  datau: any =[];
  datat: any =[];
  datavalida: any = false;
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false};
  minDate = new Date(0).toISOString();
  insertnome: any =null;
  inserdataini: any =null;
  insertdatafim: any = null;
  insertgrupos: any = [];
  insertusu: any = [];
  insettarefas: any = [];
  insertavulso: any = [];
  input: any = null;
  avulso: any = null;

  constructor(public Datagrupos:Datagrupos, public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    
    this.gerar_lista_grupos();
    this.gerar_lista_usr();
    this.gerar_tarefas();
    
    //selected={{gruposel}} 
    
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    console.log(this.minDate);
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;

  }

   ongrupos(data){
     this.insertgrupos.push(data);
   }
   onusr(data){

    this.insertusu.push(data);
  }
  ontarefas(data){
    this.insettarefas.push(data);
  }
  onfora(data){
    this.avulso = data;
    console.log(data);
  }

  ondata(data,tipo){
    var x = new Date(this.event.startTime);
    var y = new Date(this.event.endTime);
    
    if(x < y){
    this.datavalida = true;
    } else {
    this.datavalida = false;  
    }
   
    if(this.input !== '' && this.datavalida === true ){
    this.isenabled=true; 
    }else{
    this.isenabled=false;
    }
    
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
   
    this.inserir_turo(this.event.startTime,this.event.endTime,this.insertgrupos.toString(),this.insertusu.toString(),this.avulso,this.insettarefas.toString(),);
    this.viewCtrl.dismiss(this.event); 
  }

  gerar_lista_grupos() {
  
    this.grupos = this.Datagrupos.getGrupos().then((grupos) => {
      this.contacts = grupos;
        for (var i = 0; i < this.contacts.length; i++) {
          var loop = this.contacts[i];
          this.data.push({ "id": loop.id, "nome": loop.nome});
        }

    });
    
  }

  gerar_lista_usr() {
  
    this.listausr = this.Datagrupos.getusr().then((listausr) => {
      this.listausr = listausr;
        for (var i = 0; i < this.listausr.length; i++) {
          var loop = this.listausr[i];
          this.datau.push({ "id": loop.id, "nome": loop.nome});
        }

    });
    
  }

  gerar_tarefas() {
  
    this.tarefassel = this.Datagrupos.gettarr().then((tarefasselr) => {
      this.tarefas = tarefasselr;
        for (var i = 0; i < this.tarefas.length; i++) {
          var loop = this.tarefas[i];
          this.datat.push({ "id": loop.id, "nome": loop.nome});
        }

    });
    
  }

 inserir_turo(dataini,datafim,grupos,usuarios,avulso,tarefas){

  
   this.final  = this.Datagrupos.insert_tarefas(dataini,datafim,grupos,usuarios,avulso,tarefas,this.nome).then((final) => {
    
    console.log(final);

  });


 }




  validar_form(input){
      
      this.nome = input.value;
      this.input = input;
      if(this.input !== '' && this.datavalida === true ){
      this.isenabled=true; 
      }else{
      this.isenabled=false;
      
    }
  }

 
}


/*
 <ion-item>
      <ion-label color="primary">Grupos</ion-label>
      <ion-select  multiple="true" [(ngModel)]="event.grupos">
        <ion-option *ngFor="let data of data"
        [class.selected]="data === selectedata" (ionSelect)="ongrupos(data.id)">{{data.nome}} </ion-option> 
      </ion-select>
    </ion-item>
*/