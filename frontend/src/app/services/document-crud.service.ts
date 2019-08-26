import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocumentCRUDService {
  // uploadedFiles: Array < File > ;
  uploadedFiles: File;

  constructor(
    private http: HttpClient,
  ) { }
  
  //this is an object of type HTTPHeaders which we will use to send the request 
  header = new HttpHeaders();

  /* List of methods for http requests to the backend*/ 

  //POST method to add a new role to the system
  addNewDocument(newDocument) {
    this.header.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/document/create', newDocument, { headers: this.header });
  }

  //get all the roles listed for the users
  listAllDocuments() {
    this.header.append('content-type', 'application/json'); 
    return this.http.get('http://localhost:3000/document/all', {headers: this.header});
  }




  upload() {
    let formData = new FormData();
    // for (var i = 0; i < 1; i++) {
    //   formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    //   console.log(this.uploadedFiles[i])
    // }

    formData.append("upload", this.uploadedFiles, <string> this.uploadedFiles.name);

    // this.http.post('http://localhost:3000/document/create', formData)
    //   .subscribe((response) => {
    //     console.log('response received is ', response);
    //   })

      
  }

}
