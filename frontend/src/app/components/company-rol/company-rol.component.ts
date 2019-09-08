import { Component} from '@angular/core';
import { DocumentCRUDService } from 'src/app/services/document-crud.service';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-rol',
  templateUrl: './company-rol.component.html',
  styleUrls: ['./company-rol.component.scss']
})
export class CompanyRolComponent {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  panelOpenState = false;
  hide = true;

  public newDocument: {
    code: string;
    name: string;
    description: string;
    area: string;
    rol: string;
  };

  constructor(
    private http: HttpClient,
    private document: DocumentCRUDService,
    private _formBuilder: FormBuilder
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

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

}
