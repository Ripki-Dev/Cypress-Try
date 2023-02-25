describe('Login Module', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })

    it('Valid Login', () => {
        cy.get('a[href*="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]')
            .first()
            .should('have.text', '\nSign In ')
            .click();

        cy.get('input#email.input-text')
            .type('roni_cost@example.com')
            .should('have.value', 'roni_cost@example.com');
        cy.get('input[name="login[password]"]')
            .type('roni_cost3@example.com')
            .should('have.value', 'roni_cost3@example.com');
        cy.get('.primary')
            .eq(0)
            .should('have.text', 'Sign In')
            .click();
        cy.get('h1.page-title')
            .should('have.text', '\nCustomer Login ');
    })

    it('Blank Fill Login', () => {
        cy.get('a[href*="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]')
            .first()
            .should('have.text', '\nSign In ')
            .click();
        cy.get('.primary')
            .eq(0)
            .should('have.text', 'Sign In')
            .click();

        cy.get('div.page.messages')
            .eq(0)
            .should('have.text', '\n\n\n\n\nA login and a password are required.\n\n\n\n\n\n\n');
    })
})