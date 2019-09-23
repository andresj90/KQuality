import { CRole } from './../../interfaces/croleinterface';
import { Component } from '@angular/core';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { ProcedureCrudService } from 'src/app/services/procedure-crud.service';


@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent {

  isLinear = true;
  file:File[];
  types: String[]; 


  newDocument = this._formBuilder.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    type: ['', Validators.required],
    description:['', Validators.required],
    procedureID: ['', Validators.required],
    documentPrefixID: ['', Validators.required ],
    attachment: ['' , Validators.required]
  }); 


  /* properties from database*/

  prefixes : CRole; 
  procedures: CRole; 

  constructor(
    private document: DocumentCRUDService,
    private _formBuilder: FormBuilder,
    private _procedure: ProcedureCrudService
  ) {
  }


  ngOnInit() {
    this.document.listPrefixes().subscribe((data:CRole) => {
      this.prefixes = data; 
      console.log(this.prefixes.elements);   
   }, err => {
       console.log(err); 
   })

   this._procedure.listProcedures().subscribe((data:CRole) => {
     this.procedures = data; 
     console.log(this.procedures.elements);
   }, err => {
     console.log(err);
   })

   this.types = ['Procedimiento', 'Acta de entrega', 'Requirimientos'];
  }

  upload(file: File[]){
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
    this.file = file;
    console.log(this.file);
  }


  addDocument() {

    var formData = new FormData();
    formData.append('code', this.newDocument.get('code').value);
    formData.append('name', this.newDocument.get('name').value);
    formData.append('description', this.newDocument.get('description').value);
    formData.append('type', this.newDocument.get('type').value)
    formData.append('code', this.newDocument.get('code').value);
    formData.append('file', this.file[0], this.file[0].name); 
    formData.append('procedureID', this.newDocument.get('procedureID').value)
    formData.append('documentPrefixID', this.newDocument.get('documentPrefixID').value)
    

    this.document.addNewDocument(formData).subscribe((data) => {
      console.log(data);
    }, err => {
       console.log(err);
    });

  }


}
