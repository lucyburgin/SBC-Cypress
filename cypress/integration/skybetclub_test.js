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
          cy.visit("https://m.staging.skybet.com/skybetclub");
        });
      });
    });
  });

  // Checking elements on SBC page

  it("Checks visible elements on the page", () => {
    cy.get("._1qpz3o4").invoke("text").should("contain", "Promotions"); //Title
    cy.get("#home > ._8ehxtn").should("be.visible"); //Home tab
    cy.get("._b27ttyq").should("be.visible"); //Sky Bet Club tab
    cy.get("#value-view > ._8ehxtn").should("be.visible"); //Value View tab
    cy.get("._vbvh0c").should("be.visible"); //banner
    cy.get("._11kcehy > :nth-child(2)")
      .invoke("text")
      .should("contain", "You're Opted In"); //opt in message
    cy.get("._1n4dbq3").should("be.visible"); //tracker
    cy.get(":nth-child(2) > ._4zbleu > ._124ix1z").should("be.visible"); // bundle reward
    cy.get(":nth-child(2) > :nth-child(1) > ._4zbleu > ._124ix1z").should(
      "be.visible"
    ); // free bet reward
    cy.get(":nth-child(3) > :nth-child(1) > ._4zbleu > ._124ix1z").should(
      "be.visible"
    ); // free spins reward
    cy.get("._1hopvwqr > ._1bsc4k2").click(); //scroll left
    cy.get(":nth-child(4) > :nth-child(1) > ._4zbleu > ._124ix1z").should(
      "be.visible"
    ); // in play reward
    cy.get("._4kolex").should("be.visible"); //exclusive promotions
    cy.get("._thwxhl").should("be.visible"); //T&Cs
    cy.get("#contentTitle")
      .invoke("text")
      .should("contain", "Terms and Conditions"); //T&Cs Header
    cy.get("._f24ydtNaN").should("be.visible"); //opt out button
  });

  //Selecting Different Rewards

  it("Selects different rewards", () => {
    cy.get(":nth-child(2) > :nth-child(1) > ._4zbleu > ._124ix1z").should(
      "be.visible"
    ); //free bets visible
    cy.get("._1wzeo03").invoke("text").should("contain", "Selected"); // free bets selected
    cy.get(":nth-child(3) > :nth-child(1) > ._4zbleu > ._124ix1z").should(
      "be.visible"
    ); // free spins reward
    cy.get(
      ":nth-child(3) > :nth-child(1) > ._4zbleu > ._124ix1z > ._qctpfx > ._57p1h7NaN"
    )
      .click()
      .wait(10000); //select free spins
    cy.get("._szm1n6 > ._ieiase").contains(
      "Earn 50 Free Spins with Sky Bet Club"
    );
  });
});

/*

  it("Place a bet", () => {
    cy.get;
  });
  it("Opts out and check visible elements", () => {
    cy.get;
  });
*/
