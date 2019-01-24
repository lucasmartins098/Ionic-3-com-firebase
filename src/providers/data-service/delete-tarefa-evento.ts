import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Deltafeven {
  public path: any = 'https://sara.integrainfo.net/app';
  public contactsFilePath: string = this.path+'/casa/php/Controller/delete_tarefa_evento.php?id=';
  constructor(public http: Http) { }
  public Deltafev(id,evento): Promise<Object> {
    return this.http.get(this.contactsFilePath+id+'&evento='+evento)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      }); 
  }
}  