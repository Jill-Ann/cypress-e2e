describe('Searchbox test', () => {
  before(() => {
      cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should type in searchbox and submit when press enter', () => {
      cy.get('#searchTerm').type('some text {enter}')
  })

  it('should show search results page', () => {
      cy.get('h2').contains('Search Results:')
  })
})