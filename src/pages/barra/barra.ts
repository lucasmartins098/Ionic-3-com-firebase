import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/data-service/auth';




@IonicPage()
@Component({
  selector: 'page-barra',
  templateUrl: 'barra.html',
})
export class BarraPage {

  @ViewChild('email') email: any;
  username: any = null;
  password: any = null;
  datatarefas: any = null;
  resgistro: any = [];
  private nav:NavController = null; 

  constructor(nav : NavController,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  }

  ionViewDidLoad() {

  }

  login() {

    let credentials = { username: this.username, password: this.password };
    this.checklogin(credentials);
  }


  checklogin(credentials) {

    this.auth.confirmar(credentials).then((data) => {

      this.datatarefas = data;
      if (this.datatarefas.success === true) {
        this.auth.login({ username: this.datatarefas.nome, id: this.datatarefas.message, acesso: this.datatarefas.tipo });
      } else if (this.datatarefas.success === false) {
        this.erro();
      }

    });

  }

  erro() {

    let alert = this.alertCtrl.create({
      title: 'Erro',
      message: 'Falha ao logar',
      buttons: [

        {
          text: 'ok',
          handler: data => {

          }
        }
      ]
    });

    alert.present();
  }

  esqueci() {

    let alerta = this.alertCtrl.create({
      title: 'Email',
      message: 'Enviar a senha para seu email',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
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
          
            let dados = this.auth.email(data.email).then((dados) => {
              console.log(dados);

            });
            let title = 'Email Enviado com Sucesso';
            let subTitle = 'Favor verificar sua caixa de email com a nova senha';
            this.sucesso(title,subTitle);
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

  registro() {

    let alerta = this.alertCtrl.create({
      title: 'Registro',
      message: 'Favor escrever seus dados',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
        {
          name: 'nome',
          placeholder: 'Nome'
        },
        {
          name: 'senha',
          placeholder: 'Senha'
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

            this.auth.registrar(data.email,data.nome,data.senha).then((data) => {
                this.resgistro = data;
             if(this.resgistro.success === false){
              let title = 'Email';
              let subTitle = 'FALHA!! Email já registrado no Sistema';
              this.sucesso(title,subTitle);
             }else{
              let title = 'Sucesso';
              let subTitle = 'Usuário cadastrado com sucesso';
              this.sucesso(title,subTitle);
             }

            });

          }
           
        }
      }
      ]
    });
    alerta.present();
  }











  }
