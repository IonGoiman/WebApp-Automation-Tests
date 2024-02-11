describe('Challenging DOM', () => {
  beforeEach(() => {
    // Navigate to the Challenging DOM page
    cy.visit('https://the-internet.herokuapp.com/challenging_dom')
  })

  it('verifies the table is present', () => {
    // Check if the table exists
    cy.get('table').should('exist')
    cy.get('table#large-table')
      .find('tbody tr')
      .should('have.length.at.least', 1)
  })

  it('interacts with buttons and validates the canvas element', () => {
    // Verify that the blue, red, and green button exists
    cy.get('.button').should('exist')
    cy.get('.button.alert').should('exist')
    cy.get('.button.success').should('exist')

    // Click on the blue button and check if the canvas exists as an indication of DOM change
    cy.get('.button').click()
    cy.get('canvas').should('exist')
  })

  it('validates the content of the table', () => {
    // Verify specific content within the table. This example checks the header.
    cy.get('th').each(($th, index) => {
      const expectedHeaders = [
        'Lorem',
        'Ipsum',
        'Dolor',
        'Sit',
        'Amet',
        'Diceret',
        'Action',
      ]
      expect($th).to.contain(expectedHeaders[index])
    })
  })
  it('iterates over table rows and cells to validate content', () => {
    cy.get('table#large-table tbody tr').each(($row) => {
      cy.wrap($row)
        .find('td')
        .each(($cell, index) => {
          cy.log(`Row Cell ${index + 1}: ${$cell.text()}`)
          expect($cell.text().trim()).not.to.be.empty
        })
    })
  })
})
