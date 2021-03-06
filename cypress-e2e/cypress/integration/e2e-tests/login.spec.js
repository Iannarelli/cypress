describe('Login / Logou Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('#signin_button').click();
    })

    it('should try to login with invalid data', () => {
        cy.login('iinvalid username', 'invalid password');
    })

    it('should display erro message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong');
    })

    it('should login to application', () => {
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.password;

            cy.login(username, password);
        })
        cy.get('ul.nav-tabs').should('be.visible');
    })

    it('should logou from application', () => {
        cy.contains('username').click();
        cy.get('#logout_link').click();
        cy.url().should('include', 'index.html');
    })
})