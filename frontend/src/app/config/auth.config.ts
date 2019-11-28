import { AuthConfig } from 'angular-oauth2-oidc';
 
export const authConfig: AuthConfig = {
 
  // Url of the Identity Provider
  issuer: 'https://login.microsoftonline.com/299a2881-1380-4020-b42f-715a35e1bcaf/oauth2/v2.0/authorize',
 
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/loginauth',
 
  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'spa-demo',
 
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',
}