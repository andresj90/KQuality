import { Component, OnInit } from '@angular/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from 'src/app/interfaces/croleinterface';

@Component({
  selector: 'app-view-rol-c',
  templateUrl: './view-rol-c.component.html',
  styleUrls: ['./view-rol-c.component.scss']
})
export class ViewRolCComponent implements OnInit {

  companyRoles : CRole;

  constructor(private _CompanyArea: CompanyCRUDService) { }

  ngOnInit() {
    this._CompanyArea.listAreas().subscribe((data:CRole) => {
      this.companyRoles = data; 
      this.companyRoles.elements.forEach(element => {
        console.log(element);
      })
    })
  }

}
