import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/data-service/auth';
import { Datagrupos  } from '../../providers/data-service/grupos-data'; 



@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  insertusu: any = [];
  listausr: any = [];
  data: any =[];
  resgistro: any = [];
  inserir: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: AuthService,public alertCtrl: AlertController,public Datagrupos:Datagrupos) {
   this. gerar_lista_tar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefasPage');
  }


  gerar_lista_tar() {
    this.data =[];
    var check = null;
    var checka = null;
    this.listausr = this.Datagrupos.todas_tarefas().then((listausr) => {
      this.listausr = listausr;
        for (var i = 0; i < this.listausr.length; i++) {
          var loop = this.listausr[i];
          this.data.push({ "id": loop.id, "nome": loop.nome});
        }
 
    });
    
  }

  novatarefa() {
    let alert = this.alertCtrl.create({
      title: 'Nova Tarefa',
     
      inputs: [
        {
          name: 'nome',
          checked: false,
          placeholder: 'Tarefa'
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
           this.salvar(data.nome);
            
          }
        }
      ]
    });

    alert.present();
  }



  salvar(nome){
    this.Datagrupos.novatar(nome).then((listausr) => {
      console.log(listausr);
      this.gerar_lista_tar();
    });
  }



  onSelect(nome) {
    
    let alert = this.alertCtrl.create({
      title: 'Nova Tarefa',
     
      inputs: [
        {
          name: 'nome',
          checked: false,
          value:nome.nome,
          placeholder: 'Tarefa'
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
           console.log(nome.id);
           this.Datagrupos.uptar(nome.id,data.nome).then((listausr) => {
            console.log(listausr);
            this.gerar_lista_tar();
          });
            
          }
        }
      ]
    });

    alert.present();
  }

  delete(data){

    this.Datagrupos.deltar(data.id).then((listausr) => {
      console.log(listausr);
      this.gerar_lista_tar();
    });
    
  }

   

  

}
 