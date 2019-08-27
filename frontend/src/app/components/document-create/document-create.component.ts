import { Component, OnInit } from '@angular/core';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {

  code: string;
  name: string;
  type: string;
  description: string;
  procedure: string;
  area: number;
  attachment: File | null ;
  
  SERVER_URL = "http://localhost:3000/upload";
  uploadForm: FormGroup; 


  constructor(
    private http: HttpClient,
    private formBuilder : FormBuilder,
    private document: DocumentCRUDService
  ) { }

  ngOnInit() {
    
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    }); 
  }

  addDocument() {

    const newDocument = {
      fieldname: "field",
      code: this.code,
      name: this.name,
      type: this.type,
      description: this.description,
      procedure: this.procedure,
      area: this.area,
      attachment: this.attachment,
      documentPrefixID: 1,
    }

   //this.document.upload();
    

  //this.document.addNewDocument(newDocument).subscribe((data) => {
   //   console.log(data);
  //  });

  console.log(newDocument.attachment);
  }


  fileChange(element) {
    this.document.uploadedFiles = element.target.files;
    //let fileName = file.name;
  }


  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }



  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    console.log(this.uploadForm.get('profile').value);

    this.http.post<any>('http://localhost:3000/document/create', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

    this.addDocument()
  }

}
