import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Confirma {
  public path: any = 'https://sara.integrainfo.net/app';
  public contactsFilePath: string = this.path+'/casa/php/Controller/confirma_evento.php?id=';
  constructor(public http: Http) { }
  public confirmar(id,usr,evento): Promise<Object> {
    return this.http.get(this.contactsFilePath+id+'&usr='+usr+'&evento='+evento) 
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err); 
      });
  }
}