import { CompanyCRUDService } from './../../services/company-crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {
  /* variables */ 
  newrole = {
    name
  }
  systemroles:any; 
   
  constructor(private companyService: CompanyCRUDService) { }

    ngOnInit() {
      this.companyService.listSystemRoles().subscribe(roles => {
        this.systemroles = JSON.stringify(roles);
        console.log(this.systemroles);
      
      });
    }

    getDataForCompanyRole(){
      this.companyService.addNewSystemRole(this.newrole).subscribe(data=> {
        console.log(data);
      })
    }
}
