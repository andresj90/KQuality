import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserAgentApplication } from 'msal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData;
  userAgentApplication;
  message: string;

  constructor(public authService: AuthService, public router: Router, private socialAuthService: AuthService) {
    this.setMessage();

    var applicationConfig = {
      clientID: 'YOUR_CLIENT_ID'
    };

    /*We need to verify the userAgentApplication, since it is the one that opens the window to log in with the Microsoft account.*/
    //this.userAgentApplication = new UserAgentApplication(applicationConfig.clientID, null, this.tokenReceivedCallback);
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/documents';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  public tokenReceivedCallback(errorDesc, token, error, tokenType) {
    if (token) {
        this.userData = token;

        console.log("Token: " + token)
    } else {
        console.log(error + ":" + errorDesc);
    }
}

public microsoftSignIn() {
    var graphScopes = ["user.read", "mail.send"];
    let that = this;

    that.userAgentApplication.loginPopup(graphScopes).then(function(idToken) {
        //Login Success
        that.userAgentApplication.acquireTokenSilent(graphScopes).then(function(accessToken) {

            console.log(accessToken)
            //AcquireTokenSilent Success
            var headers = new Headers();
            var bearer = "Bearer " + accessToken;
            headers.append("Authorization", bearer);
            var options = {
                method: "GET",
                headers: headers
            };
            var graphEndpoint = "https://graph.microsoft.com/v1.0/me";

            fetch(graphEndpoint, options)
                .then(function(response) {

                    response.json().then(function(data) {
                        that.userData = data;

                        console.log(data)
                    })
                })
        }, function(error) {
            //AcquireTokenSilent Failure, send an interactive request.
            that.userAgentApplication.acquireTokenPopup(graphScopes).then(function(accessToken) {
                //updateUI();
            }, function(error) {
                console.log(error);
            });
        })
    }, function(error) {
        //login failure
        console.log(error);
    });
}
}