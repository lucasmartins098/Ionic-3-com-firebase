import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../../pages/about/about';
import { UsuariosPage  } from '../../pages/usuarios/usuarios';
import { TarefasPage  } from '../../pages/tarefas/tarefas';
import { AuthService } from '../../providers/data-service/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario: any = null;
  acesso: any = null;
  isenabled:boolean=false;
  constructor(auth: AuthService,public navCtrl: NavController) {

    auth.storage.get('token').then(token => {
      this.usuario = token.token.id;
      this.acesso =token.token.acesso; 
      if(this.acesso === '1'){
        this.isenabled = true;
      }
  
    });

    

  }

  usuarios(){ 
    this.navCtrl.push(UsuariosPage, { interno: '1' });
  }

  eventos(){
    this.navCtrl.push(AboutPage, { interno: '1' });
  }

  tarefas() {
    this.navCtrl.push(TarefasPage, { interno: '1' });
  }

}

/*
 <button ion-button type="button" full [disabled]="!isenabled">Grupos</button>
 <button ion-button type="button" full [disabled]="!isenabled">Grupos de Usuários</button>
*/