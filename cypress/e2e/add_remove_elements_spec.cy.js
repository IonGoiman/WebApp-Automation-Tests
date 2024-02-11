describe('Add/Remove Elements', () => {
  beforeEach(() => {
    // Visit the Add/Remove Elements page before each test
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
  })

  it('allows a user to add and remove an element', () => {
    // Click the "Add Element" button
    cy.contains('Add Element').click()

    // Verify the "Delete" button is present
    cy.get('.added-manually').should('exist')

    // Click the "Delete" button to remove the element
    cy.get('.added-manually').click()

    // Verify the "Delete" button is no longer present
    cy.get('.added-manually').should('not.exist')
  })
})
