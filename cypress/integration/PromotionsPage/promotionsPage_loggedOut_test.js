describe("SBC Page", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  // Logged Out Promos Page

  it("Elements visible on the page when the user is logged out", () => {
    cy.visit("https://m.staging.skybet.com/promotions"); // load this page
    cy.wait(5000); // wait
    cy.get("._1qpz3o4").should("be.visible"); // Header
    cy.get(":nth-child(1) > ._qkanpf")
      .invoke("text")
      .should("contain", "Today's Promotions"); // Today's Promotions
    cy.get(':nth-child(1) > [data-testid="noPromotions"]'); // No promotions in Today
    cy.get(":nth-child(2) > ._qkanpf")
      .invoke("text")
      .should("contain", "More Promotions"); // More Promotions
    cy.get(':nth-child(2) > ._f7jutp > [data-testid="scrollContainer"]').should(
      "be.visible"
    ); // More promotions section
    cy.get(":nth-child(3) > ._qkanpf")
      .invoke("text")
      .should("contain", "Free To Play"); // Free to Play
    cy.get(':nth-child(3) > ._f7jutp > [data-testid="scrollContainer"]').should(
      "be.visible"
    ); // Free to Play section
  });
});
