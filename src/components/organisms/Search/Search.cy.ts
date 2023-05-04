describe("redirect from base to search", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.location("pathname").should("eq", "/search");
  });
});

describe("search users", () => {
  it("passes", () => {
    const searchStr = "Evan You";
    cy.visit("http://localhost:3000/search");
    cy.get("select").select("users");
    cy.get("input").type(searchStr);
    cy.get('[data-test-id="search-user-card-name"]').contains(searchStr);
    cy.get('[data-test-id="search-user-card-link"]')
      .invoke("attr", "href")
      .should("equal", "https://github.com/yyx990803");
  });
});

describe("search repositories", () => {
  it("passes", () => {
    const searchStr = "vercel/next.js";
    cy.visit("http://localhost:3000/search");
    cy.get("select").select("repositories");
    cy.get("input").type(searchStr);
    cy.wait(2000);
    cy.get('[data-test-id="search-repo-card-name"]').contains(searchStr);
    cy.get('[data-test-id="search-repo-card-link"]')
      .invoke("attr", "href")
      .should("equal", `https://github.com/${searchStr}`);
  });
});
