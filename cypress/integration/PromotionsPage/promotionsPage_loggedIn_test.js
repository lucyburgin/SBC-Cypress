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
          cy.visit("https://m.staging.skybet.com/promotions"); // load this page
          cy.wait(10000); // wait
        });
      });
    });
  });

  // Logged In Promos Page

  it("Checks elements are visible on the Promotions Page when logged in", () => {
    cy.get("._1qpz3o4").should("be.visible"); // Header
    cy.get(":nth-child(1) > ._qkanpf")
      .invoke("text")
      .should("contain", "Today's Promotions"); // Todays Promotions
    cy.get(':nth-child(1) > [data-testid="noPromotions"]')
      .invoke("text")
      .should("contain", "No promotions available"); // No promotions in Today
    cy.get(":nth-child(2) > ._qkanpf")
      .invoke("text")
      .should("contain", "My Active Promotions"); // Active Promotions
    cy.get("._1f99p73 > :nth-child(2)").should("be.visible"); // Acitve Section
    cy.get(":nth-child(3) > ._qkanpf")
      .invoke("text")
      .should("contain", "More Promotions"); // More promotions
    cy.get(':nth-child(3) > ._f7jutp > [data-testid="scrollContainer"]').should(
      "be.visible"
    ); // more promotions section
    cy.get(":nth-child(4) > ._qkanpf")
      .invoke("text")
      .should("contain", "Free To Play"); // free to play
    cy.get(':nth-child(4) > ._f7jutp > [data-testid="scrollContainer"]').should(
      "be.visible"
    ); //free to play section
  });
});
