/*describe("Heading text", () => {
  beforeEach(() => {
    cy.visit("https://m.test4.skybet.com/skybetclub");
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("accepts cookies", () => {
    cy.get(".cookie-notice > .i").click();
    cy.get(".js-login").click();
    //cy.visit(
    //"https://www.test4.skybet.com/secure/identity/m/login/mskybet?urlconsumer=https://m.test4.skybet.com&dl=1"
    // );
  });
});
before(() => {
    cy.visit("https://m.staging.skybet.com/skybetclub");
  });

    //cy.visit(
    //  "https://www.staging.skybet.com/secure/identity/m/login/mskybet?urlconsumer=https://m.staging.skybet.com&dl=1"
    // ); // this may be wrong
    //cy.frameLoaded("#SkyBetAccount.sba-iframe");
    //cy.iframe("#SkyBetAccount.sba-iframe");
    //cy.iframe().find("._1l82qefj").click();
*/
import "cypress-iframe";
import "cypress-xpath";

describe("Test to demonstrate testing of iframes in Cypress", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("logs in", () => {
    cy.visit(
      "https://www.staging.skybet.com/secure/identity/m/login/mskybet?urlconsumer=https://m.staging.skybet.com&dl=1"
    );
    cy.get("[data-qa=login-username]").then(() => {
      cy.get("[data-qa=login-username]").type("test002");
      cy.get("[data-qa=update-pin-current]").then(() => {
        cy.get("[data-qa=update-pin-current]").type("1212");
        cy.get("button[type=submit]").then(() => {
          cy.get("button[type=submit]").click();
          cy.wait(2000);
          cy.visit("https://m.staging.skybet.com/skybetclub");
        });
      });
    });
  });
});
