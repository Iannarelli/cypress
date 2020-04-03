// describe('My first simple test with cypress', () => {
//     it('True should be true', () => {
//         expect(true).to.equal(true);
//     })

//     it('5 should be 5', () => {
//         expect(5).to.equal(5);
//     })
// })

// describe('Another describe block', () => {
//     it('False should be false', () => {
//         expect(false).to.equal(false);
//     })
// })

describe('Browser actions', () => {
    // it('should load correct url', () => {
    //     cy.visit('http://example.com/', { timeout: 10000 });
    // })

    // it('should check correct url', () => {
    //     cy.url().should('include', 'example.com');
    // })

    // it('should wait for 3 seconds', () => {
    //     cy.wait(3000);
    // })

    // it('should pause the excecution', () => {
    //     cy.pause();
    // })

    // it('should check for corrent element on the page', () => {
    //     cy.get('h1').should('be.visible');
    // })

    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 });
        cy.url().should('include', 'index.html');
        cy.log('Before Reload!');
        cy.reload();
        cy.log('After Reload!');
    })

    it('should click Travel category', () => {
        cy.get('a').contains('Travel').click();
        cy.get('h1').contains('Travel');
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11);
    })

    it('should click Poetry category', () => {
        cy.get('a').contains('Poetry').click();
        cy.get('h1').contains('Poetry');
    })

    it('should click Olio book detail', () => {
        cy.get('a').contains('Olio').click();
        cy.get('h1').contains('Olio');
    })

    it('should display correct price of the book', () => {
        cy.get('.price_color').contains('£23.88');
    })
})