/// <reference types="cypress" />

describe("My first test", () => {
  it("Does not much", () => {});
});

describe("My first test", () => {
  it("Trello home page", () => {
    cy.visit("https://trello.com/login");
  });
});
