describe("Products api", () => {
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
