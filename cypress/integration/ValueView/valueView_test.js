describe("Value View", () => {
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
          cy.visit("https://m.staging.skybet.com/value-view"); // load this page
        });
      });
    });
  });

  // SBC Status API

  it("API status for value view", () => {
    cy.request("https://m.staging.skybet.com/skybetclub/api/status")
      .its("status")
      .should("be.equal", 200);
  });

  // Header

  it("The header is visible", () => {
    cy.get("._9v2z6r").scrollIntoView();
  });

  // Free Bets

  it("Free Bets component is visible", () => {
    cy.get(
      ':nth-child(1) > ._e296pg > ._y0vwza > [height="80"] > ._1ml4hc1'
    ).scrollIntoView();
    cy.get("._108cl9vl > ._14vppf3x").contains("Received in Free Bets");
  });

  // Price Boost

  it("Price Boost component is visible", () => {
    cy.get(
      ':nth-child(2) > ._e296pg > ._y0vwza > [height="80"] > ._1ml4hc1'
    ).scrollIntoView();
  });

  // Money Back as Cash

  it("Money Back as Cash component is visible", () => {
    cy.get(
      ':nth-child(3) > ._e296pg > ._y0vwza > [height="80"] > ._1ml4hc1'
    ).scrollIntoView();
  });

  // Extra Places

  it("Extra places component is visible", () => {
    cy.get(
      ':nth-child(4) > ._e296pg > ._y0vwza > [height="80"] > ._1ml4hc1'
    ).scrollIntoView();
    cy.get("._108cl9vl > ._iyipd1").contains("Extra Place");
  });

  // Free Spins

  it("Free spind component is visible", () => {
    cy.get('svg > [width="80"]').scrollIntoView();
    cy.get("._iyipd1 > div").contains("free spins");
  });

  // Footer

  it("Value View footer is visible", () => {
    cy.get("._1xlv8rz").scrollIntoView();
  });

  // Link

  it("Footer back to top link returns scroll to top of page", () => {
    cy.get("._g28mba").click();
    cy.wait(5000);
    cy.get("._9v2z6r");
    cy.get("._qk9942 > div").contains("Hello"); // scrolls to top of page and "Hello" message is visible
  });
});
