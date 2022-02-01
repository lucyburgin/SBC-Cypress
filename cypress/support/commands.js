// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import "cypress-iframe";
require("cypress-xpath");
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*
Cypress.Commands.add("getIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
}); 

let identity;
Cypress.Commands.add("postToken", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("https://api.test.messaging.sbgservices.com/auth/token"),
    form: true, //sets to application/x-www-form-urlencoded
    body: {
      grant_type: "client_credentials",
      scope: "xero_all-apis",
    },
    auth: {
      username: Cypress.env("api_identity_username"),
      password: Cypress.env("api_identity_password"),
    },
  })
    .its("body")
    .then((response) => {
      identity = response;
      window.localStorage.setItem("identity", JSON.stringify(identity));
      cy.log(identity.access_token);
    });
});
*/
