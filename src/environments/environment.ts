export const environment = {
  appBaseHref: '/',
  ISSUER: 'https:////${yourOktaDomain.com}/oauth2/default',
  CLIENT_ID: '${Client ID value from app integration}',
  REDIRECT_URI: 'http://{Hostname}/login/callback',
  USE_INTERACTION_CODE: true,
  OKTA_TESTING_DISABLEHTTPSCHECK: false,
  USE_CLASSIC_ENGINE: false,
};
