/// <reference types="cypress" />

import { email, password } from "./constants.js";

describe("Login test", () => {
  it("Fill login form", () => {
    cy.login(email, password);

    cy.url().should("include", "/boards");

    cy.get("button").contains("Remind me later").click();

    cy.get('button[aria-label="Create Board or Team"]').click();

    cy.get('button[data-test-id="header-create-board-button"]').click();

    const boardName = `MY board`;

    cy.get('input[placeholder="Add board title"]').focus().type(boardName);

    cy.get('button[data-test-id="create-board-submit-button"]').click();
    cy.wait(5000);

    // Add new card to the board

    cy.get("input.list-name-input").type("To Do");

    cy.get("input[type=submit]").contains("Add List").click();

    cy.get("a").contains("Add a card").click();

    const cardTitle = "My card title";
    cy.get('textarea[placeholder="Enter a title for this card…"]').type(
      cardTitle
    );

    cy.contains("Add Card").click();
    cy.screenshot();
    cy.wait(5000);

    // Add description to the card
    cy.contains(cardTitle).click();
    cy.get('textarea[placeholder="Add a more detailed description…"]').type(
      "deadline for this Task is Thursday"
    );
    cy.wait(5000);
    cy.get("input[type=submit]").contains("Save").click();

    //Add comments to the card
    cy.get('textarea[placeholder="Write a comment…"]').type("Done");
    cy.get("input[type=submit]").contains("Save").click();

    cy.get('textarea[placeholder="Write a comment…"]').type(
      "working on this task"
    );
    cy.wait(5000);
    //cy.get("input[type=submit]").contains("Save").click({
    // force: true,
    //});
    //cy.get("[disabled]").click({ force: true });
    // cy.get("input[type=submit]").contains("Save").click();
    cy.wait(5000);
    cy.get(".js-tab-parent").children().contains("Save").click();
    // take screenshot
    cy.screenshot();

    //cy.get("a").contains("Delete").click();
  });
});
