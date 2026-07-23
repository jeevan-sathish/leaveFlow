/* global describe, it,beforeEach,cy */

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display the homepage", () => {
    cy.contains("this is home page").should("be.visible");
  });

  it("should navigate to the about page", () => {
    cy.contains("About").click();

    cy.url().should("include", "/about");

    cy.contains("About page this is").should("be.visible");
  });
});
