class BasePage {
    static loadHomePage() {
        cy.visit('http://devexpress.github.io/testcafe/example/');
    }

    static wait(number) {
        cy.wait(number);
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView();
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView();
    }
}

describe('Abstraction with Classes', () => {
    before(function() {
        // runs before all tests inside describe
        // setup test data or test context
        // seed or reset the database
        HomePage.loadHomePage();
    })

    after(function() {
        // runs after all tests inside describe block are done
        // test clean up
        // clean cookies or localStorage
    })

    beforeEach(function () {
        // runs before each it block in the describe
    })

    afterEach(function () {
        // runs after each it block in the describe
    })

    // it('should scroll down and up on the page', () => {
    //     HomePage.scrollToBottom();
    //     HomePage.wait(5000);
    //     HomePage.scrollToTop();
    //     HomePage.wait(3000);
    // })

    it.skip('1st IT', () => {
        HomePage.scrollToBottom();
        HomePage.wait(5000);
        HomePage.scrollToTop();
        HomePage.wait(3000);
    })

    it('2nd IT', () => {
        HomePage.scrollToBottom();
        HomePage.wait(5000);
        HomePage.scrollToTop();
        HomePage.wait(3000);
    })

    it.only('3rd IT', () => {
        HomePage.scrollToBottom();
        HomePage.wait(5000);
        HomePage.scrollToTop();
        HomePage.wait(3000);
    })
})