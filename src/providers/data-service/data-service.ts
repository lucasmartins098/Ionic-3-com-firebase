
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DataServiceProvider {

  public path: any = 'https://sara.integrainfo.net/app';
  public contactsFilePath: string = this.path+'/casa/php/Controller/lista_tarefas.php?id=';
  constructor(public http: Http) { }
  public gettarefas(data,usr): Promise<Object> {
    
    return this.http.get(this.contactsFilePath+''+data+'&usr='+usr)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}