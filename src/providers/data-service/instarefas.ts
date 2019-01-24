import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Instare {
  public path: any = 'https://sara.integrainfo.net/app';
  public contactsFilePath: string = this.path+'/casa/php/Controller/insert_tarefa.php?nome=';
  constructor(public http: Http) { }
  public inserttarefa(data,id,usr): Promise<Object> {
    return this.http.get(this.contactsFilePath+data+'&id='+id+'&usu='+usr)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err); 
      });
  }
}