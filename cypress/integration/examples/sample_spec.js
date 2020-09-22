/// <reference types="cypress" />

describe("My first test", () => {
  it("Does not much", () => {});
});

describe("My first test", () => {
  it("Trello home page", () => {
    cy.visit("https://trello.com/login");
    cy.get("form-login");
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
    cy.get("login").submit();

    // Verify the app redirected you to the homepage
    cy.location("pathname", { timeout: 10000 }).should("eq", "/");

    // Verify the page title is "Home"
    cy.title().should("eq", "Home");
  });
});
