describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(5000)
  })

  it('Header shows title Podcaster', () => {
    cy.get('header').contains('Podcaster')
  })

  it('Homepage shows a podcast list', () => {
    cy.get('.podcastCard').should('have.length.of.at.least', 1)
  })

  it('Podcast card shows an image, title and author', () => {
    cy.get('.podcastCard').first().find('img').should('exist').should('have.attr', 'src').should('not.equal', '')
    cy.get('.podcastCard').first().find('span').should('have.lengthOf', 2).should('not.be.empty')
  })

  it('Number of podcast in list is equals to counter', () => {
    cy.get('.filter__results').invoke('text').then((number) => {
      cy.get('.podcastCard').should('have.lengthOf', number)
    })
  })

  it('Postcast card has link to navigate to the podcast detail page', () => {
    cy.get('.podcastCard').first().click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.have.string('/podcast/')
    })
  })
})
