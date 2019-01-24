import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Datamensgem {
  public contactsFilePath: string = './assets/data/mensagem.json';
  constructor(public http: Http) { }
  public getContacts(): Promise<Object> {
    return this.http.get(this.contactsFilePath)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
