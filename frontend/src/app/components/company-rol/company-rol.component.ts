import { Component} from '@angular/core';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-company-rol',
  templateUrl: './company-rol.component.html',
  styleUrls: ['./company-rol.component.scss']
})
export class CompanyRolComponent {

  public newDocument: {
    code: string;
    name: string;
    description: string;
    area: string;
    rol: string;
  };

  constructor(
    private http: HttpClient,
    private document: DocumentCRUDService
  ) {
    this.newDocument = {
      code: "",
      name: "",
      description: "",
      area: "",
      rol: ""
    };
  }


  addDocument() {
    const doc = {
      code: this.newDocument.code,
      name: this.newDocument.name,
      description: this.newDocument.description,
      area: this.newDocument.area,
      type: this.newDocument.rol,
    }


    this.document.addNewDocument(doc).subscribe((data) => {
      console.log(data);
    });

    console.log(doc);

  }

}


