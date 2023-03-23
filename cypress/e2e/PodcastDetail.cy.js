describe('Podcast detail', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(5000)
    cy.get('.podcastCard').first().click()
    cy.wait(30000)
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

  it('Podcast detail page shows a podcast card with image, title, author and summary. The image, title and author has a link', () => {
    cy.get('.podcastDetailCard').find('img').should('exist').should('have.attr', 'src').should('not.equal', '')
    cy.get('.podcastDetailCardTitle').should('not.be.empty')
    cy.get('.podcastDetailCardAuthor').should('not.be.empty')
    cy.get('.podcastDetailCardSummary').should('not.be.empty')

    cy.location().then((loc) => {
      cy.get('.podcastDetailCard').find('img').parent('a').should('have.attr', 'href').should('equal', loc.pathname)
      cy.get('.podcastDetailCardTitle').find('a').should('have.attr', 'href').should('equal', loc.pathname)
      cy.get('.podcastDetailCardAuthor').find('a').should('have.attr', 'href').should('equal', loc.pathname)
    })
  })

  it('The podcast detail shows episodes shows a podcast list', () => {
    cy.get('.podcastDetailEpisodesTable tbody tr').should('have.length.of.at.least', 1)
  })

  it('The podcast episodes list and the counter show the correct number', () => {
    cy.get('.podcastDetailEpisodesCounter').invoke('text').then((number) => {
      cy.get('.podcastDetailEpisodesTable tbody tr').should('have.lengthOf', number)
    })
  })
})
