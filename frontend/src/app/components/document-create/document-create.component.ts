import { Component } from '@angular/core';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';



@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent  {

  

  public newDocument: {
    code: string;
    name: string;
    type: string;
    description: string;
    procedure: string;
    area: number;
    file: File | null;
  };

   
  
  


  constructor(
    private document: DocumentCRUDService
  ) {
    this.newDocument = {
      code: "",
      name: "",
      type: "",
      description: "",
      procedure: "",
      area: 0,
      file: null
    };
  }

  
  addDocument() {


    const doc = {
      code: this.newDocument.code,
      name: this.newDocument.name,
      type: this.newDocument.type,
      description: this.newDocument.description,
      procedure: this.newDocument.procedure,
      area: this.newDocument.area,
      file: this.newDocument.file,
      documentPrefixID: 1,
    }


    this.document.addNewDocument(doc).subscribe((data) => {
      console.log(data);
    });

    console.log();
   

  }








}
