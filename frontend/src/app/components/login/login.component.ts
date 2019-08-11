import { CompanyCRUDService } from './../../services/company-crud.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  newrole = {
    name
  }
   
  constructor(private companyService: CompanyCRUDService) { }

  ngOnInit() {
  }

  getDataForCompanyRole(){
    this.companyService.addNewSystemRole(this.newrole).subscribe(data=> {
      console.log(data);
    })
  }

}
