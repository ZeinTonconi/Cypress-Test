describe("Register Blanck", () => {
    const pageURL = "https://bookcart.azurewebsites.net/register";
  
  
    it("Click on Fields and Check error messages", () => {      
      cy.visit(pageURL);
      cy.get('[formcontrolname="firstname"]').click();

      cy.get('[formcontrolname="lastname"]').click();
        cy.get('mat-error').should("contain.text", "First Name is required")

        cy.get('[formcontrolname="username"]').click();
          cy.get('mat-error').should("contain.text", "Last Name is required")

        cy.get('[formcontrolname="password"]').click();
          cy.get('mat-error').should("contain.text", "User Name is required")

        cy.get('[formcontrolname="confirmPassword"]').click();
          cy.get('mat-error').should("contain.text", "Password is required")

        cy.get('[formcontrolname="firstname"]').click();
        cy.get('mat-error').should("contain.text", "Password is required")
    })
  });
  