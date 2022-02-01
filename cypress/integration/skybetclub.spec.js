//Logged Out View
describe("SBC page", () => {
  beforeEach(() => {
    cy.visit("https://m.staging.skybet.com/skybetclub");
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Sees the SBC Elements", () => {
    //Cookies Accepted
    cy.get(".cookie-notice > .i").click();

    //Displays the correct header
    cy.get("._1qpz3o4");

    //Displays the log in button"
    cy.get("._f24ydtNaN");

    //Displays the £5 free bet reward card
    cy.get(":nth-child(2) > ._4zbleu > ._124ix1z");

    //Displays the bundled reward card"
    cy.get(":nth-child(2) > :nth-child(1) > ._4zbleu > ._124ix1z");

    //Clicks through the rewards
    cy.get("._1bsc4k2").click();

    //Displays the 4 x £1 reward card
    cy.get(":nth-child(3) > :nth-child(1) > ._4zbleu > ._124ix1z");

    //Clicks through the rewards
    cy.get("._1hopvwqr > ._1bsc4k2").click();

    //Displays the free spin reward card
    cy.get(":nth-child(4) > :nth-child(1) > ._4zbleu > ._124ix1z");

    //Clicks through the rewards
    cy.get("._1hopvwqr > ._1bsc4k2").click();

    //Displays the in play reward card
    cy.get(":nth-child(4) > :nth-child(1) > ._4zbleu > ._124ix1z");

    //Displays the tracker
    cy.get("._1n4dbq3");

    //Displays the exclusive promotions
    cy.get("._4kolex");

    //Displays the terms and conditions
    cy.get("._thwxhl");
  });
});
