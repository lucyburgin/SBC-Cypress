import "cypress-iframe";
import "cypress-xpath";

describe("SBC Page", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  // Logging the User in

  it("User Logs In", () => {
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
          cy.visit("https://m.staging.skybet.com");
        });
      });
    });
  });

  // Placing a Bet
  /*
  it("Place a bet", () => {
    cy.wait(5000); //wait for page to load
    cy.get('[data-ui-state="popularbets"] > a').click(); //click popular bets
    cy.wait(2000);
    cy.get(".view-all-button").click();
    cy.wait(2000);
    cy.get(":nth-child(15) > .outcome-price > ._rzxkeif").click(); //click on the odds
    cy.get("._nhl2y7").click().type(1);
    cy.get("._26eilpd").click();
    cy.wait(5000);
  }); */
});
