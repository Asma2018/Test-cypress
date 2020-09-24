/// <reference types="cypress" />

import { email, password } from "./constants";

describe("Login test", () => {
  it("Fill login form", () => {
    cy.visit("https://trello.com/login");

    // Fill the username
    cy.get("input[name=user]").first().type(email).should("have.value", email);

    // Fill the password
    cy.get("input[name=password]")
      .type(password)
      .should("have.value", password);

    // Locate and submit the form
    cy.get("#login-form").submit();
    cy.url().should("include", "/boards");
    cy.screenshot();

    // cy.get("button").contains("Remind me later").click();
  });
});
