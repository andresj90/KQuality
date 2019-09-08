export class Document {
    constructor(
      public code:string, 
      public name: string,
      public type: string, 
      public description:string,
      public procedure:string, 
      public area:number,
      public attachment:File|null
    ) {}
  
  }
