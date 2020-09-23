/// <reference types="cypress" />

describe("Login test", () => {
  it("Fill login form", () => {
    cy.visit("https://trello.com/login");

    // Fill the username

    cy.get("input[name=user]")

      .first()

      .type("rababhina@hotmail.com")

      .should("have.value", "rababhina@hotmail.com");

    // Fill the password

    cy.get("input[name=password]")

      .type("compulife123")

      .should("have.value", "compulife123");

    // Locate and submit the form

    cy.get("#login-form").submit();

    cy.url().should("include", "/boards");

    //cy.get("button").contains("Remind me later").click();

    cy.get('button[aria-label="Create Board or Team"]').click();

    cy.get('button[data-test-id="header-create-board-button"]').click();

    const boardName = `MY Project - ${Date.now()}`;

    cy.get('input[placeholder="Add board title"]').focus().type(boardName);

    cy.get('button[data-test-id="create-board-submit-button"]').click();
    cy.wait(5000);

    // Add new card to the board

    cy.get("input.list-name-input").type("To Do");

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
    //Add comments to the card

    // cy.get('textarea[placeholder="Write a comment…"]').type("Done");
    // cy.get("input[type=submit]").contains("Save").click();

    cy.get('textarea[placeholder="Write a comment…"]').type(
      "working on this task"
    );
    cy.wait(5000);
    //cy.get("[disabled]").click({ force: true });
    cy.get("input[type=submit]").contains("Save").click();
    // take screenshot
    cy.screenshot();

    //cy.get("a").contains("Delete").click();
  });
});
