/// <reference types="cypress" />

describe("My first test", () => {
  it("Does not much", () => {});
});

describe("My first test", () => {
  it("Trello home page", () => {
    cy.visit("https://trello.com/login");
    cy.get("#login_form");
  });
  it("should fill login form and redirect to homepage", () => {
    // Fill the username
    cy.get('input[name="user"]')
      .type("rababhina@hotmail.com")
      .should("have.value", "rababhina@hotmail.com");

    // Fill the password
    cy.get('input[name="password"]')
      .type("123$567")
      .should("have.value", "123$567");

    // Locate and submit the form
    cy.get("#login_form").submit();
  });
});
