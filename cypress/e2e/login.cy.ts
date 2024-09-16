describe("Login Zein", () => {
    const pageURL = "https://bookcart.azurewebsites.net/login";

    const user = Cypress.env("USER")
    const password = Cypress.env("PASSWORD")

    it("Login with existing account", () => {
        cy.visit(pageURL)
        cy.get('[formcontrolname="username"]').type(user)
        cy.get('[formcontrolname="password"]').type(password)
        cy.get('button:contains("Login")').eq(1).click();
        cy.contains('span', user)
        cy.get('app-price-filter')
    })
  });
  