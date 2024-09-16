describe("Check if all the book are unique", () => {
    const pageURL = "https://bookcart.azurewebsites.net/";

    it("Checks that all books have unique names", () => {
        cy.visit(pageURL);

        cy.get('app-book-card').find('.card-title strong').then($titles => {
            const titles = $titles.toArray().map(el => el.innerText.trim());
            
            const uniqueTitles = new Set(titles);
            expect(uniqueTitles.size).to.equal(titles.length, 'All book titles should be unique');
        });
    });
});
