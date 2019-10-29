import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRole } from './../../interfaces/croleinterface';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';

@Component({
  selector: 'app-approve-document',
  templateUrl: './approve-document.component.html',
  styleUrls: ['./approve-document.component.scss']
})
export class ApproveDocumentComponent implements OnInit {
  isLinear = true;
  panelOpenState = false;

  name: FormGroup;
  description: FormGroup;
  
    /* properties from database */
    documentos: CRole;

  constructor(
    private _formBuilder: FormBuilder,
    private document: DocumentCRUDService 
    ) { }

  ngOnInit() {
    this.name = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.description = this._formBuilder.group({
      description: ['', Validators.required]
    });

    this.document.listAllDocuments().subscribe((data:CRole) =>{
      this.documentos = data;
      //console.log(this.documentos.elements);
    });
  }
}
