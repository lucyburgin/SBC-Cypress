describe("SBC Page", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  // Logging the User in

  it("User Logs In", () => {
    cy.visit(
      "https://www.staging.skybet.com/secure/identity/m/login/mskybet?urlconsumer=https://m.staging.skybet.com&dl=1"
    ); // visit log in page
    cy.get("[data-qa=login-username]").then(() => {
      // click username
      cy.get("[data-qa=login-username]").type("test002"); // type username
      cy.get("[data-qa=update-pin-current]").then(() => {
        // click pin
        cy.get("[data-qa=update-pin-current]").type("1212"); // type pin
        cy.get("button[type=submit]").then(() => {
          // find submit button
          cy.get("button[type=submit]").click(); // click submit button
          cy.wait(2000); // wait
          cy.visit("https://m.staging.skybet.com"); // load this page
        });
      });
    });
  });

  // Placing a Bet

  it("Place a bet", () => {
    cy.wait(5000); // wait for page to load
    cy.get('[data-ui-state="popularbets"] > a').click(); // click popular bets
    cy.wait(2000); // wait
    cy.get(".view-all-button").click(); // click view all button
    cy.wait(2000); // wait
    cy.get(":nth-child(15) > .outcome-price > ._9r58x8j").click(); //click on the odds
    cy.get("._nhl2y7").click().type(1); // type £1 bet
    cy.get("._26eilpd").click(); // place bet
    cy.wait(5000); // wait for it to be placed
  });
});
