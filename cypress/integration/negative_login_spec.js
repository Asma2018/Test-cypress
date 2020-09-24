/// <reference types="cypress" />

describe("Login test", () => {
  it("Fill login form", () => {
    cy.visit("https://trello.com/login");

    // Fill the username
    cy.get("input[name=user]").first().type("invalid_email.com'");

    // Fill the password
    cy.get("input[name=password]").type("invalidpassword");

    // Locate and submit the form
    cy.get("#login-form").submit();
    cy.get("#error").should("be.visible");
    cy.screenshot();
  });
});
