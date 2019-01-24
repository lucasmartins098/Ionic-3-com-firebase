import { Component } from '@angular/core';
import { PerfilPage } from '../../pages/perfil/perfil';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MensaPage } from '../mensa/mensa';
import { AuthService } from '../../providers/data-service/auth';
import { Datagrupos } from '../../providers/data-service/grupos-data';
import { NavController} from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = ContactPage; 
  MensaPage = MensaPage;
  total:any = null;
  contacts: any = null;
  test: any = null;
  data: any = [];
  usuario:any = null;

  constructor(public navCtrl: NavController,public auth: AuthService,public Datagrupos: Datagrupos) {
     
    
    auth.storage.get('token').then(token => {
      this.usuario = token.token.id;
      this.getdata(this.usuario);
    });
     
  }

  ngOnInit() {
  
    
  } 


  atualizar(){
    

  }


  ionViewWillEnter(){
    
    this.getdata(this.usuario);
  
  }

  pagina(){
    
    
  }

  logout() {
    
    this.auth.logout();
    location.reload();
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
          this.total = this.contacts.length;
        }
  
      },
        (error) => {
          console.log("error: " + error);
        });
  }
  
 
}
 