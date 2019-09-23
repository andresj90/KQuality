import { Component } from '@angular/core';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent {

  isLinear = true;
  file:File[];
  types: ['Procedimiento', 'Acta de entrega', 'Requirimientos']; 

  newDocument = this._formBuilder.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    // type: ['', Validators.required],
    description:['', Validators.required],
    // procedure: ['', Validators.required],
    // area: ['', Validators.required ],
    attachment: ['' , Validators.required]
  }); 

  constructor(
    private document: DocumentCRUDService,
    private _formBuilder: FormBuilder
  ) {
  }


  ngOnInit() {
   
  }

  upload(file: File[]){
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
    this.file = file;
    console.log(this.file);
  }


  addDocument() {

    var formData = new FormData();
    formData.append('file', this.file[0], this.file[0].name); 
    formData.append('code', this.newDocument.get('code').value)
    formData.append('name', this.newDocument.get('name').value)
    formData.append('description', this.newDocument.get('description').value)
    formData.append('code', this.newDocument.get('code').value)
    // formData.append('code', this.newDocument.get('code').value)


    this.document.addNewDocument(formData).subscribe((data) => {
      console.log(data);
    }, err => {
       console.log(err);
    });

  }


}
