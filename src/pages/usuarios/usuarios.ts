import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/data-service/auth';
import { Datagrupos  } from '../../providers/data-service/grupos-data'; 


@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {
  insertusu: any = [];
  listausr: any = [];
  data: any =[];
  resgistro: any = [];
  constructor(public auth: AuthService,public alertCtrl: AlertController,public Datagrupos:Datagrupos,public navCtrl: NavController, public navParams: NavParams) {
    this.gerar_lista_usr();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }


  gerar_lista_usr() {
    this.data =[];
    var check = null;
    var checka = null;
    this.listausr = this.Datagrupos.getusr().then((listausr) => {
      this.listausr = listausr;
        for (var i = 0; i < this.listausr.length; i++) {
          var loop = this.listausr[i];
          if(loop.tipousu === "1"){
            check = true;
            checka = false;
          }else{
            check = false;
            checka = true; 
          }
          this.data.push({ "id": loop.id, "nome": loop.nome,"email":loop.email,"check":check,"checka":checka});
        }
 
    });
    
  }

  novatarefa() {
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Nova Usuario',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome'
        },
        {
          name: 'email',
          placeholder: 'Email'
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
             else
             {

            this.auth.registrar(data.email,'123',data.nome).then((data) => {
                this.resgistro = data;
             if(this.resgistro.success === false){
              let title = 'Email';
              let subTitle = 'FALHA!! Email já registrado no Sistema';
              this.sucesso(title,subTitle);
             }else{
              let title = 'Sucesso';
              let subTitle = 'Usuário cadastrado com sucesso';
              this.sucesso(title,subTitle);
              this. gerar_lista_usr(); 
             }

            });

          }
          }
        }
      ]
    });

    

    alert.present();
  }

  sucesso(title,subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['ok']
    });
    alert.present();
    
  }

  onSelect(data){
    
  }

  editar(nome,email) {
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Nova Usuario',
      inputs: [
        {
          name: 'nome',
          value: nome,
          placeholder: 'Nome'
        },
        {
          name: 'Email',
          value: email,
          placeholder: 'Email'
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
           // return false;
           
          }
        }
      ]
    });

    

    alert.present();
  }

  onChange(value,nome){
    console.log(value + 'f' + nome);
    this.auth.updateconta(nome,value).then((listausr) => {
      console.log(listausr);
    });

  }


}
