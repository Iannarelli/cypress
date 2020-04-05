describe('Feedback Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('should load feedback form', () => {
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
    })

    it('should fill feedbackform', () => {
        cy.get('#name').type('Nome');
        cy.get('#email').type('email@email.com');
        cy.get('#subject').type('Assunto');
        cy.get('#comment').type('Qualquer texto aqui servirá bem como feedback');
    })

    it('should submit feedback form', () => {
        cy.contains('Send Message').click();
    })

    it('should display feedback message', () => {
        cy.get('h3').contains('Feedback');
    })
})