import { environment } from 'src/environments/environment';

// const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;
// const USE_CLASSIC_ENGINE = process.env['USE_CLASSIC_ENGINE'] || false;

export default {
  oidc: {
    clientId: `${environment.CLIENT_ID}`,
    issuer: `${environment.ISSUER}`,
    redirectUri: `${environment.REDIRECT_URI}`,
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: `${environment.OKTA_TESTING_DISABLEHTTPSCHECK}`,
    },
  },
  widget: {
    USE_CLASSIC_ENGINE: `${environment.USE_CLASSIC_ENGINE}`,
    // USE_CLASSIC_ENGINE: 'false',
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
