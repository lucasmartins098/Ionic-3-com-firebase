import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Deltafeven } from '../../providers/data-service/delete-tarefa-evento';
import { Instare } from '../../providers/data-service/instarefas';
import { Uptafeven } from '../../providers/data-service/update-tarefa-evento';
import { Confirma } from '../../providers/data-service/confirma-eventos';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-edet',
  templateUrl: 'edet.html',
})
export class EdetPage {

  dados: any = null;
  evento: any = null;
  id: any = null;
  status: any = null;
  nao: any = null;
  datasta: any = null;
  datastp: any = null;
  data: any = [];
  datanen: any = [];
  tarefas: any = null;
  datatarefas: any = [];
  inserir: any = null;
  usuario: any = null;
  novou: any = [];
  testRadioOpen = false;
  testRadioResult: any;
  idevento: any = null;
  deleta: any = null;
  updat: any = null;
  confirmar: any = null;
  estado: any = null;

  constructor(public Confirma: Confirma, public Uptafeven: Uptafeven, public Deltafeven: Deltafeven, public Instare: Instare, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public DataServiceProvider: DataServiceProvider) {

    this.dados = this.navParams.get('contact');
    this.evento = this.dados.nome;
    this.id = this.dados.id;
    this.usuario = this.dados.logado;
    
    this.estado = this.dados.confirma;
  
    if (this.estado === 'Confirmado') {
      this.datastp = true;
      this.datasta = false;
    } else {
      this.datastp = false;
      this.datasta = true;
    }

    this.getdata();
  }

  ionViewDidLoad() {
    console.log('meu usr' +this.usuario);
  }

  ionViewWillLeave() { 

    this.navCtrl.push(ContactPage, { paramentro: '1', minhas: this.data, grupo: this.datanen });
  }
  onChange(selectedValue) {

    this.confirma(selectedValue);
   
  }

  onminhas(selectedValue) {

    this.janelaminha(selectedValue.id, selectedValue.nome);
  }

  onnaominhas(selectedValue) {

    this.janelnem(selectedValue.id, selectedValue.nome);
  }


  array(string) {
    var array = string.split(",");
    return array;

  }

  novatarefa() {
    let alert = this.alertCtrl.create({
      title: this.evento,
      message: 'Nova Tarefa',
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
            this.salvartarefas(this.id, data.nome);
            this.sucesso('Registrado com sucesso','');
          }
        }
      ]
    });

    alert.present();
  }

  salvartarefas(id, data) {


    this.inserir = this.Instare.inserttarefa(data, id, this.usuario).then((inserir) => {

      this.novou = inserir;
      this.update(this.novou.id, data);
      this.ionViewDidLoad();

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


  update(id, nome) {

    this.data.push({ "id": id, "nome": nome });
  }

  getdata() {
    this.tarefas = this.DataServiceProvider.gettarefas(this.id,this.usuario)

      .then((tarefas) => {
        
        if(!tarefas){
          this.datatarefas = [];
        }else{
          this.datatarefas = tarefas;
        }
        this.data = [];
        this.datanen = [];
       
        for (let index = 0; index < this.datatarefas.length; index++) {
          var loop = this.datatarefas[index];
          if (loop.idusario === this.usuario) {
            this.data.push({ "id": loop.id, "nome": loop.tnome });
          } else if (loop.idusario < 2) {
            
            this.datanen.push({ "id": loop.id, "nome": loop.tnome });
          }
        }

      });

    this.status = this.dados.status;

  }


  janelaminha(id, nome) {

    let alert = this.alertCtrl.create();
    alert.setTitle(nome);

    alert.addInput({
      type: 'radio',
      label: 'Liberar Tarefa',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Apaguar Tarefa',
      value: '2'
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {

        this.functiondeletar(id, nome, data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }


  functiondeletar(idd, nome, value) {


    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index].id;
      if (element === idd) {
        this.data.splice(index, 1);
      }

    }

    if (value === '1') {

      this.datanen.push({ "id": idd, "nome": nome });

      this.updatetarefa(idd, 1);
    }
    else {
      this.apagartarefa(idd);
    }

    this.ionViewDidLoad();

  }


  janelnem(id, nome) {

    let alert = this.alertCtrl.create();
    alert.setTitle(nome);

    alert.addInput({
      type: 'radio',
      label: 'Assumir Tarefa',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Apaguar Tarefa',
      value: '2'
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {

        this.functiondeletarnem(id, nome, data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

  functiondeletarnem(idd, nome, value) {

    for (let index = 0; index < this.datanen.length; index++) {
      const element = this.datanen[index].id;
      if (element === idd) {
        this.datanen.splice(index, 1);
      }

    }

    if (value === '1') {

      this.data.push({ "id": idd, "nome": nome });
      this.updatetarefa(idd, 2);
    }
    else {
      this.apagartarefa(idd);
    }
    this.ionViewDidLoad();

  }

  apagartarefa(id) {

    this.deleta = this.Deltafeven.Deltafev(id, this.id).then((deleta) => {

    });

  }

  updatetarefa(tar, tipo) {

    this.updat = this.Uptafeven.uptarev(tar, this.id, this.usuario, tipo).then((updat) => {

    });
  }

  confirma(id) {

    this.confirmar = this.Confirma.confirmar(id, this.usuario, this.id).then((updat) => {


    });
  }


}



