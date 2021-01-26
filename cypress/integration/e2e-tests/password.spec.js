describe('Password test', () => {
  before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should click on the sign in button', () => {
      cy.get('#signin_button').click()
  })

  it('should click on forgotten password', () => {
      cy.get('.offset3 > a').click()
  })

  it('should fill in email form', () => {
      cy.get('#user_email').type("test.email@gmail.com")
  })

  it('should submit email form', () => {
      cy.contains('Send Password').click()
  })
})