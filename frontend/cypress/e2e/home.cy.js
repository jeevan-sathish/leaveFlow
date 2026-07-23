/* global describe, it,beforeEach,cy,expect */

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
    cy.get("button").contains("call").click();

    cy.request("GET", "http://localhost:3000/data").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("hello from express");
    });
    cy.contains("hello from express").should("be.visible");
  });
});
