/// <reference types="cypress" />

describe("Login test", () => {
  it("Fill login form", () => {
    cy.visit("https://trello.com/login");

    // Fill the username

    cy.get("input[name=user]")

      .first()

      .type("abc@hotmail.com")

      .should("have.value", "abc@hotmail.com");

    // Fill the password

    cy.get("input[name=password]")

      .type("123")

      .should("have.value", "123");

    // Locate and submit the form

    cy.get("#login-form").submit();
    //cy.get(".success-page").should("be.visible");

    cy.url().should("include", "/boards");
    cy.screenshot();

    //cy.get("button").contains("Remind me later").click();
  });
});
