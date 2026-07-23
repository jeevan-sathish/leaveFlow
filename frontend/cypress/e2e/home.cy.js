/* global describe, it,beforeEach cy */
describe("button handle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("button click", () => {
    cy.get("button").contains("click").click();
    cy.contains("jeevan");
  });
  it("change button click", () => {
    cy.get("button").contains("change").click();
    cy.contains("sathish");
  });
});
