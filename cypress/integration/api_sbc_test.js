describe("check API", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
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
          cy.visit("https://m.staging.skybet.com/skybetclub");
        });
      });
    });
  });
  it("API status for opted in", () => {
    cy.request("https://m.staging.skybet.com/skybetclub/v1/optin")
      .its("status")
      .should("be.equal", 200);
  });
  it("API status for rewards", () => {
    cy.request("https://m.staging.skybet.com/skybetclub/v1/rewards")
      .its("status")
      .should("be.equal", 200);
  });
  it("API status for opted out", () => {
    cy.request("https://m.staging.skybet.com/skybetclub/v1/optout")
      .its("status")
      .should("be.equal", 200);
  });
  it("API status for tracker", () => {
    cy.request("https://m.staging.skybet.com/skybetclub/v1/tracker")
      .its("status")
      .should("be.equal", 200);
  });
});

// change reward https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/preference
// opt out https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/optout
// tracker https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/tracker
// opt in https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/optin
