import { GlobalVariablesService } from './../../services/global-variables.service';
import { authConfig } from './../../config/auth.config';
import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from "angular-oauth2-oidc";
import { UserCRUDService } from './../../services/user-crud.service';
import { CRole } from 'src/app/interfaces/croleinterface';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  userLogged=false;  

  constructor(
    private oauthService: OAuthService,
    private _userCRUD: UserCRUDService,
    private _globalVariable: GlobalVariablesService
  ) { }

 

  public login(): void {
    this.oauthService.initImplicitFlow();
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  private async ConfigureAuth(): Promise<void> {

    this.oauthService.configure({
      loginUrl: 'https://login.microsoftonline.com/299a2881-1380-4020-b42f-715a35e1bcaf/oauth2/authorize',
      clientId: 'bdca8087-8c8d-4a2d-aa8a-af6137206dd9',
      resource: 'bdca8087-8c8d-4a2d-aa8a-af6137206dd9',
      logoutUrl: 'https://login.microsoftonline.com/299a2881-1380-4020-b42f-715a35e1bcaf/oauth2/logout',
      redirectUri: window.location.origin + '/documents',
      scope: 'openid',
      oidc: true
    })

    this.oauthService.setStorage(sessionStorage);

  }

  

  async ngOnInit() {
    await this.ConfigureAuth().then(data => {
      console.log(data);
    })

    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.tryLogin({});

    if (!this.oauthService.getAccessToken()) {
      await this.oauthService.initImplicitFlow();
    }

    let token = this.oauthService.getAccessToken();



    this._userCRUD.createUser({ token }).subscribe((data: CRole) => {
      this.userLogged =  data.success;
      
      if(this.userLogged ) {
        console.log('Usuario se ha logueado');
        
      }else {
      sessionStorage.clear()
      }
      
      
      // console.log(this.userLogged);
      // console.log(this.oauthService.getAccessToken());
    }, (err) => {
      console.log(err);
    })
  }



}