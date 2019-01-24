import { ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  public path: any = 'https://sara.integrainfo.net/app';

  public contactsFilePath: string = this.path+'/casa/php/Controller/login.php?data=';
  public lembrar: string = this.path+'/casa/php/Controller/lembrar.php?data=';
  public regristrar: string = this.path+'/casa/php/Controller/registrar.php?emaile=';
  public update: string = this.path+'/casa/php/Controller/update_conta.php?id=';
  public authNotifier: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  datatarefas: any = [];
  resultado: any = null;
  constructor(public storage: Storage, public http: Http) {


    // check if there is a token in storage
    this.storage.get('token').then(token => {
      if (token != null) {
        // broadcast that we are logged in
        this.authNotifier.next(true);
      }
    });
  }

  public confirmar(cre): Promise<Object> {
    var data = JSON.stringify(cre);
    return this.http.get(this.contactsFilePath + data)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public email(email): Promise<Object> {
    
    return this.http.get(this.lembrar + email)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  public updateconta(id,tipo): Promise<Object> {
    
    return this.http.get(this.update + id+'&tipo='+tipo)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public registrar(email,senha,nome): Promise<Object> {
    
    return this.http.get(this.regristrar + email +'&nome='+nome +'&senha='+senha)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }




  login(credentials) {

   this._checkCredentials(credentials).then(token => {
      // save token to storage
      console.log(token);
      this.storage.set('token', token);
      // broadcast that we are now logged in
      this.authNotifier.next(true);
    });

  }



  _checkCredentials(credentials) {


    return new Promise(function (resolve, reject) {
      resolve({ token: credentials });
    });

  }


  

  logout() {
    // remove token from storage
    this.storage.remove('token');
    // broadcast that we are now logged out
    this.authNotifier.next(false);
  }

}