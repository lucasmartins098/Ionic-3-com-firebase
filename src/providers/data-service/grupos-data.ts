import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Datagrupos {

  public path: any = 'https://sara.integrainfo.net/app';


  public contactsFilePath: string = this.path+'/casa/php/Controller/listar_grupos.php';
  public usrfilepath: string = this.path+'/casa/php/Controller/listar_usr.php';
  public tarfilepath: string = this.path+'/casa/php/Controller/pegar_tarefas.php';
  public delfilepath: string = this.path+'/casa/php/Controller/delete_event.php?id=';
  public insetpath: string = this.path+'/casa/php/Controller/insert_tarefas.php?datainicio=';
  public perfil: string = this.path+'/casa/php/Controller/perfil.php?id='
  public upperfil: string = this.path+'/casa/php/Controller/upperfil.php?id='
  public memsagem: string = this.path+'/casa/php/Controller/listar_mensagem.php?id='
  public novamemsagem: string = this.path+'/casa/php/Controller/insert_mensagem.php?id='
  public delmemsagem: string = this.path+'/casa/php/Controller/deleta_mensagem.php?id='
  public tarefas: string = this.path+'/casa/php/Controller/listar_todas_tarefas.php'
  public intarefas: string = this.path+'/casa/php/Controller/nova_tarefas.php?nome='
  public deltarefas: string = this.path+'/casa/php/Controller/deleta_tarefas.php?id='
  public uptarefas: string = this.path+'/casa/php/Controller/update_tarefa_geral.php?id='

  constructor(public http: Http) { }


  public todas_tarefas(): Promise<Object> {
    return this.http.get(this.tarefas) 
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      }); 
  }

  public novatar(nome): Promise<Object> {
    return this.http.get(this.intarefas+nome)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  public deltar(id): Promise<Object> {
    return this.http.get(this.deltarefas+id)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
 

  public uptar(id,nome): Promise<Object> {
    return this.http.get(this.uptarefas+id+'&nome='+nome)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  public gemen(id): Promise<Object> {
    return this.http.get(this.memsagem+id)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public insmen(id,did,mem): Promise<Object> {
    return this.http.get(this.novamemsagem+id+'&did='+did+'&mem='+mem)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public delmen(id): Promise<Object> {
    return this.http.get(this.delmemsagem+id)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  public upconta(id,email,senha,nome,tel): Promise<Object> {
    
    return this.http.get(this.upperfil + id+'&email='+email+'&senha='+senha+'&nome='+nome+'&tel='+tel) 
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  public getPerfil(id): Promise<Object> {
    return this.http.get(this.perfil+id)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public getGrupos(): Promise<Object> {
    return this.http.get(this.contactsFilePath)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  public getusr(): Promise<Object> {
    return this.http.get(this.usrfilepath)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public gettarr(): Promise<Object> {
    return this.http.get(this.tarfilepath)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  public delete_eve(id): Promise<Object> {
    return this.http.get(this.delfilepath+id)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  public insert_tarefas(dataincio,datafim,grupos,usr,avulso,tarefas,title): Promise<Object> {

    console.log('oka' + usr);
    return this.http.get(this.insetpath+dataincio+'&datafim='+datafim+'&usuarios='+usr+'&grupos='+grupos+'&avulso='+avulso+'&tarefas='+tarefas+'&nome='+title)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }


}