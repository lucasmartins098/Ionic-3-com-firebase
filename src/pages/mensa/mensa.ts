import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Datagrupos } from '../../providers/data-service/grupos-data';
import { AuthService } from '../../providers/data-service/auth';
 

@IonicPage()
@Component({
  selector: 'page-mensa',
  templateUrl: 'mensa.html',
})

export class MensaPage {
  contacts: any = null;
  test: any = null;
  data: any = [];
  datau: any = [];
  listausr: any=[];
  usuario: any = null;
  nome:any = null;
  listau: any = [];

  constructor(public alertCtrl: AlertController,auth: AuthService,public Datagrupos: Datagrupos,public navCtrl: NavController, public navParams: NavParams) {
   
    auth.storage.get('token').then(token => {
      this.usuario = token.token.id;
      this.getdata(this.usuario);
    });
   
    this.gerar_lista_usr();
}

onSelect(item) {
  
 
}

delete(data){
  console.log(data);
  this.Datagrupos.delmen(data.id)
    .then((contacts) => {
      console.log(contacts);
      this.getdata(this.usuario);
    });
}


onusr(data){
  this.listau.push(data);
}

validar_form(data){
  this.nome = data.value;
  
}

enviar(){
  
  this.Datagrupos.insmen(this.usuario,this.listau.toString(),this.nome)
    .then((contacts) => {
      console.log(contacts);
    });
  this.sucesso('Mensagem','Enviada com sucesso');
  this.getdata(this.usuario);
}


getdata(id) {
 
  this.contacts = this.Datagrupos.gemen(id)
    .then((contacts) => {
      this.contacts = contacts;
      if(!contacts){
        this.contacts = [];
      }
      this.data = [];
      for (var i = 0; i < this.contacts.length; i++) {
        var loop = this.contacts[i];
        console.log(loop);
        this.data.push({ "id": loop.id,"nome": loop.nome, "email":loop.email, "mensa":loop.mensagem, "des":loop.desti, "hora":loop.hora});
      }

    },
      (error) => {
        console.log("error: " + error);
      });
}


gerar_lista_usr() {
  
  this.listausr = this.Datagrupos.getusr().then((listausr) => {
    this.listausr = listausr;
    this.datau = [];
      for (var i = 0; i < this.listausr.length; i++) {
        var loop = this.listausr[i];
        this.datau.push({ "id": loop.id, "nome": loop.nome});
      }

  });
  
}

sucesso(title,subTitle) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: subTitle,
    buttons: ['ok']
  });
  alert.present();
  
}


}
