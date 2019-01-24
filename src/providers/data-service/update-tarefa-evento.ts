import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Uptafeven {
  public path: any = 'https://sara.integrainfo.net/app';
  public contactsFilePath: string = this.path+'/casa/php/Controller/update_tarefa._evento.php?id=';
  constructor(public http: Http) { }
  public uptarev(id,evento,usuario,tipo): Promise<Object> {
    return this.http.get(this.contactsFilePath+id+'&evento='+evento+'&usr='+usuario+'&tipo='+tipo)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      }); 
  }
}   