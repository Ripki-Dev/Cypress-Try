describe('login FB', () => {
    beforeEach(() => {
        cy.visit('https://id-id.facebook.com/')
    })
    it('should login', () => {
        cy.get('#email').type('test@test.com')
        cy.get('.uiHeaderTitle').first().should('have.text', 'Permintaan Anda tidak dapat diproses')
    })
})