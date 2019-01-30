describe('Home page', () => {
    it('should render the home page', () => {
        cy.visit('/').then(() => {
            cy.get('header').toMatchSnapshot()
            cy.get('nav').toMatchSnapshot()
            cy.get('input')
                .type('pics')
            // cy.get('form').submit().then(() => {
            //     const items = cy.get('li')
            //     expect(items.length).to.eq(26)
            // })
        })
    })

    // it('should display errors', () => {
    //     cy.visit('/')
    //     cy.get('input').first().type('jason.klingstedt@gmail.com')
    //     cy.get('input').last().type('password')
    //     cy.get('form').submit()
    // })

    // it('should log on as admin', () => {
    //     cy.login('admin')
    //     cy.visit('/').then(() => {
    //         cy.get('#root').toMatchSnapshot()
    //     })
    // })
})
