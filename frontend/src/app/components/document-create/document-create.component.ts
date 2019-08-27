import { Component, OnInit } from '@angular/core';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent {

  public newDocument: {
    code: string;
    name: string;
    type: string;
    description: string;
    procedure: string;
    area: number;
    attachment: File | null;
  };

  constructor(
    private http: HttpClient,
    private document: DocumentCRUDService
  ) {
    this.newDocument = {
      code: "",
      name: "",
      type: "",
      description: "",
      procedure: "",
      area: 0,
      attachment: null
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
      attachment: this.newDocument.attachment,
    //   {
    //      fieldName: 'file',
    //      name: this.newDocument.attachment.name,
    //      type: this.newDocument.attachment.type
    //  },
      documentPrefixID: 1,
    }


    this.document.addNewDocument(doc).subscribe((data) => {
      console.log(data);
    });

    console.log(doc);
    console.log(doc.attachment);

  }

}
