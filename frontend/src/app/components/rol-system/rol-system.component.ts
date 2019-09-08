import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-rol-system',
  templateUrl: './rol-system.component.html',
  styleUrls: ['./rol-system.component.scss']
})
export class RolSystemComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
  


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
  }

}
