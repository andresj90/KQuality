import { Component, OnInit } from '@angular/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from 'src/app/interfaces/croleinterface';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-view-rol-s',
  templateUrl: './view-rol-s.component.html',
  styleUrls: ['./view-rol-s.component.scss']
})
export class ViewRolSComponent implements OnInit {

  systemRoles : any;

  constructor(private _systemRole: CompanyCRUDService) { }

  ngOnInit() {
   // this._systemRole.listSystemRoles().subscribe((data:CRole) => {
     // this.systemRoles = data.elements; 
      //this.systemRoles.forEach(element => {
        //console.log(element);
      //})
   // })
  }



}
