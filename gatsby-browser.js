/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
//gatsby-browser.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';

const onRedirectCallback = (appState) => {
 // Use Gatsby's navigate method to replace the url
 navigate(appState?.returnTo || '/', { replace: true });
};

export const wrapRootElement = ({ element }) => {
 return (
  <Auth0Provider
   domain={process.env.AUTH0_DOMAIN}
   clientId={process.env.AUTH0_CLIENTID}
   redirectUri={window.location.origin}
   onRedirectCallback={onRedirectCallback}
   >
    {element}
 </Auth0Provider>
 );
};

