import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Dataeventos {
  public path: any = 'https://sara.integrainfo.net/app';
  public contactsFilePath: string = this.path+'/casa/php/Controller/lista_eventos.php?id=';
  constructor(public http: Http) { }

  public getContacts(id): Promise<Object> {
    return this.http.get(this.contactsFilePath+id)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
} 