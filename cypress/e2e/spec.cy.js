describe('My React App', () => {
  it('homepage shows a H1', () => {
    cy.visit('/')
    cy.get('h1').should('exist')
  })
})
