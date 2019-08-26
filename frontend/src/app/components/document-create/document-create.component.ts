import { Component, OnInit } from '@angular/core';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';


@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {
  
   code :string; 
   name :string; 
   type : string;
   description:string;
   procedure : string;
   area : number;
   attachment :string ; 

  constructor(
   private document: DocumentCRUDService
  ) { }

  ngOnInit() {
  }

  addDocument() {
  
    const newDocument = {
      code: this.code ,
      name: this.name ,
      type: this.type, 
      description: this.description,
      procedure: this.procedure ,
      area: this.area, 
      attachment: this.attachment ,
      documentPrefixID:1
    } 

    console.log(newDocument);

    this.document.addNewDocument(newDocument).subscribe((data) => {
        console.log(data); 
    }); 
  }

}
