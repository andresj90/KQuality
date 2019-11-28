import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  
  isLinear = false;
  panelOpenState = false;
  hide = true;

  newProcess = this._formBuilder.group({
    name: ['', Validators.required],
    prefix: ['', Validators.required],
    description: ['', Validators.required],
    type: ['', Validators.required]
  }); 

  constructor(
    private http: HttpClient,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  addProcess() {

      this.hide = false;

      let role = {
        name: this.newProcess.get('name').value,
        prefix: this.newProcess.get('prefix').value,
        description: this.newProcess.get('description').value,        
        type: this.newProcess.get('type').value 
      } 

    }


}
      