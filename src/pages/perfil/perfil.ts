import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Datagrupos } from '../../providers/data-service/grupos-data';
import { AuthService } from '../../providers/data-service/auth';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  usuario: any = null;
  contacts: any = null;
  data: any = [];

  constructor(public alertCtrl: AlertController,auth: AuthService,public Datagrupos: Datagrupos, public navCtrl: NavController, public navParams: NavParams) {

    auth.storage.get('token').then(token => {
      this.usuario = token.token.id;
      this.getdata(this.usuario); 
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
 
  getdata(id) {

    this.contacts = this.Datagrupos.getPerfil(id)
      .then((contacts) => {
        this.contacts = contacts;
        this.data = [];
        for (var i = 0; i < this.contacts.length; i++) {
          var loop = this.contacts[i];
          this.data.push({ "id": loop.id,"nome": loop.nome, "email":loop.email, "tel":loop.tel,"senha": loop.senha});
        }

      },
        (error) => {
          console.log("error: " + error);
        });
  }

  onSelect(data) {
    console.log(data);
    var oid = data.id; 
    let alerta = this.alertCtrl.create({
      title: 'Perfil',
      message: 'Favor escrever seus dados',
      inputs: [
        {
          name: 'email',
          value: data.email,
          placeholder: 'Email'
        },
        {
          name: 'nome',
          value: data.nome,
          placeholder: 'Nome'
        },
        {
          name: 'senha',
          value: data.senha,
          placeholder: 'Senha'
        },
        {
          name: 'tel',
          value: data.tel,
          placeholder: 'Telefone'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Salvar',
          handler: data => {

             if(data.email === ''){
              let title = 'Email';
              let subTitle = 'FALHA!! os dados não podem ser em branco';
              this.sucesso(title,subTitle);
             }
             else if(data.nome === ''){
              let title = 'Nome';
              let subTitle = 'FALHA!! os dados não podem ser em branco';
              this.sucesso(title,subTitle);
             }
             else if(data.senha === ''){
              let title = 'Senha';
              let subTitle = 'FALHA!! os dados não podem ser em branco';
              this.sucesso(title,subTitle);
             }
             else
             {
              let title = 'Sucesso';
              let subTitle = 'Usuário cadastrado com sucesso';
              this.sucesso(title,subTitle);
              this.salvar(oid,data.email,data.senha,data.nome,data.tel);

          }
           
        }
      }
      ]
    });
    alerta.present();

  }

  sucesso(title,subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['ok']
    });
    alert.present();
    
  }

 
   salvar(id,email,senha,nome,tel){

    

    this.Datagrupos.upconta(id,email,senha,nome,tel)
    .then((data) => {
      this.getdata(id);
    });
   }
  


}
