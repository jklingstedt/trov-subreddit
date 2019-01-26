// describe('Login page', () => {
//     it('should render the login page', () => {
//         cy.visit('/').then(() => {
//             cy.get('.login-form').toMatchSnapshot()
//         })
//     })

//     it('should display errors', () => {
//         cy.visit('/')
//         cy.get('input').first().type('jason.klingstedt@gmail.com')
//         cy.get('input').last().type('password')
//         cy.get('form').submit()
//     })

//     it('should log on as admin', () => {
//         cy.login('admin')
//         cy.visit('/').then(() => {
//             cy.get('#root').toMatchSnapshot()
//         })
//     })
// })
