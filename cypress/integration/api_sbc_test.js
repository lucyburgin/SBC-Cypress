describe("Products api", () => {
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
          cy.visit("https://m.staging.skybet.com/skybetclub");
        });
      });
    });
  });

  context("GET", () => {
    it("should return the preference status", () => {
      cy.request({
        method: "GET",
        url: "https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/preference",
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
      });
    });
    it("should return optin status", () => {
      cy.request({
        method: "GET",
        url: "https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/optin",
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
      });
    });
    it("should return the tracker information", () => {
      cy.request({
        method: "GET",
        url: "https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/tracker",
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
      });
    });
  });
});

// change reward https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/preference
// opt out https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/optout
// tracker https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/tracker
// opt in https://promotions.test-app-guea.staging.skybet.com/skybetclub/v1/optin
