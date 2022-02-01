/*describe("Heading text", () => {
  beforeEach(() => {
    cy.visit("https://m.test4.skybet.com/skybetclub");
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("accepts cookies", () => {
    cy.get(".cookie-notice > .i").click();
    cy.get(".js-login").click();
    //cy.visit(
    //"https://www.test4.skybet.com/secure/identity/m/login/mskybet?urlconsumer=https://m.test4.skybet.com&dl=1"
    // );
  });
});
before(() => {
    cy.visit("https://m.staging.skybet.com/skybetclub");
  });

    //cy.visit(
    //  "https://www.staging.skybet.com/secure/identity/m/login/mskybet?urlconsumer=https://m.staging.skybet.com&dl=1"
    // ); // this may be wrong
    //cy.frameLoaded("#SkyBetAccount.sba-iframe");
    //cy.iframe("#SkyBetAccount.sba-iframe");
    //cy.iframe().find("._1l82qefj").click();
*/
import "cypress-iframe";
import "cypress-xpath";

describe("Test to demonstrate testing of iframes in Cypress", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("should find the log in in the iframe", () => {
    cy.visit("https://m.staging.skybet.com/?open=login");
    Cypress.Commands.add(
      "iframeCustom",
      { prevSubject: "element" },
      ($iframe) => {
        return new Cypress.Promise((resolve) => {
          $iframe.ready(function () {
            resolve($iframe.contents().find("body"));
          });
        });
      }
    );
  });
  it("logs in", () => {
    cy.frameLoaded("#SkyBetAccount"); //Load iFrame

    cy.iframe().find('//*[@id="username"]').click().type("test001");
    cy.iframe().find('//*[@id="pin"]').click().type("1212");
    cy.iframe()
      .find('//*[@id="entry"]/div/div[2]/div[1]/div/div[1]/form/button')
      .click();
  });
});
