export class EventModel {
    constructor(
      public id: string,
      public evento: string,
      public dia: string,
      public tarefas: string,
      public total: string,
      public confirmados: string
    ){}
}