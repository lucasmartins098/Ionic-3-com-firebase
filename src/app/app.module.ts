import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { ContactDetailPage } from '../pages/contact-detail/contact-detail';
import { ContactDetailFormComponent } from '../components/contact-detail-form/contact-detail-form';

import { AboutPage } from '../pages/about/about';
import { UsuariosPage  } from '../pages/usuarios/usuarios';
import { PerfilPage } from '../pages/perfil/perfil';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage  } from '../pages/tarefas/tarefas';
import { NgCalendarModule } from 'ionic2-calendar';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { Instare } from '../providers/data-service/instarefas';
import { Dataeventos } from '../providers/data-service/eventos-service';
import { Datamensgem } from '../providers/data-service/mensage-service';
import { BarraPage } from '../pages/barra/barra';
import { EdetPage } from '../pages/edet/edet';
import { MensaPage } from '../pages/mensa/mensa';
import { Deltafeven } from '../providers/data-service/delete-tarefa-evento';
import { Uptafeven  } from '../providers/data-service/update-tarefa-evento';
import { Confirma  } from '../providers/data-service/confirma-eventos';
import { LOCALE_ID } from '@angular/core';
import { Datagrupos  } from '../providers/data-service/grupos-data';
import { AuthService } from '../providers/data-service/auth';
import { IonicStorageModule } from "@ionic/storage";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ContactDetailPage,
    ContactDetailFormComponent,
    BarraPage,
    EdetPage,
    MensaPage,
    UsuariosPage,
    PerfilPage ,
    TarefasPage
    
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ContactDetailPage,
    BarraPage,
    EdetPage,
    MensaPage,
    UsuariosPage,
    TarefasPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataServiceProvider,
    Dataeventos,
    Datamensgem,
    Instare,
    Deltafeven,
    Uptafeven,
    Confirma,
    Datagrupos,
    
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'pt-BR' }
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }





