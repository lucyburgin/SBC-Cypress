describe("Value View", () => {
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
          cy.visit("https://m.staging.skybet.com/value-view");
          cy.wait(5000);
        });
      });
    });
  });
  it("API status for value view", () => {
    cy.request("https://m.staging.skybet.com/skybetclub/api/status")
      .its("status")
      .should("be.equal", 200);
  });
});
