describe('Home page', () => {
    it('should render the home page', () => {
        cy.visit('/').then(() => {
            cy.get('header').toMatchSnapshot()
            cy.get('nav').toMatchSnapshot()
            // cy.get('form').submit().then(() => {
            //     const items = cy.get('li')
            //     expect(items.length).to.eq(26)
            // })
        })
    })

    it('should navigate with the select menu', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('[data-cy=select-menu]').select('guitarpedals');
        /* ==== End Cypress Studio ==== */
        cy.url().should('contain', '/r/guitarpedals')
    })

    // it('should log on as admin', () => {
    //     cy.login('admin')
    //     cy.visit('/').then(() => {
    //         cy.get('#root').toMatchSnapshot()
    //     })
    // })
})
