import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-document-master',
  templateUrl: './document-master.component.html',
  styleUrls: ['./document-master.component.scss']
})
export class DocumentMasterComponent implements OnInit {

  titulo:string; 
  description:String;
  listaDocumentos = [{
    titulo:'',
    description:'',
  },
  {
    titulo:'',
    description:'',
  },
  {
    titulo:'',
    description:'',
  }]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listaDocumentos = [{
      titulo:'Documento 1',
      description:'Este es el documento 1',
    },
    {
      titulo:'Documento 2',
      description:'Este es el documento 2',
    },
    {
      titulo:'Documento 3',
      description:'Este es el documento 3',
    }]

  }

  


}
