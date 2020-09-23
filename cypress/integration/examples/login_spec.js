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

    cy.url().should("include", "/boards");

    //cy.get("button").contains("Remind me later").click();

    cy.get('button[aria-label="Create Board or Team"]').click();

    cy.get('button[data-test-id="header-create-board-button"]').click();

    const boardName = `My board - ${Date.now()}`;

    cy.get('input[placeholder="Add board title"]').focus().type(boardName);

    cy.get('button[data-test-id="create-board-submit-button"]').click();
    cy.wait(5000);

    // Add new card to the board

    cy.get("input.list-name-input").type("List 1");

    cy.get("input[type=submit]").contains("Add List").click();

    cy.get("a").contains("Add a card").click();

    cy.get('textarea[placeholder="Enter a title for this card…"]').type(
      "My card title"
    );

    cy.contains("Add Card").click();
    cy.screenshot();
    cy.wait(5000);

    // Add description to the card

    cy.contains("My card title").click();
    cy.get('textarea[placeholder="Add a more detailed description…"]').type(
      "deadline for this Task is Thursday"
    );
    cy.wait(5000);
    //cy.contains("Save").click();
    cy.get("input[type=submit]").contains("Save").click();
  });
});
