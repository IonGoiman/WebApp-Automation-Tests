describe('Checkbox Tests', () => {
  beforeEach(() => {
    // Navigate to the Checkboxes page
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
  })

  it('verifies checkboxes can be checked and unchecked', () => {
    // Verify two checkboxes are present
    cy.get('form#checkboxes input[type="checkbox"]').should('have.length', 2)

    // Check the first checkbox if not already checked
    cy.get('form#checkboxes input[type="checkbox"]')
      .first()
      .as('firstCheckbox')
      .then(($checkbox) => {
        if (!$checkbox.is(':checked')) {
          cy.get('@firstCheckbox').check().should('be.checked')
        }
      })

    // Uncheck the second checkbox if it's checked
    cy.get('form#checkboxes input[type="checkbox"]')
      .last()
      .as('secondCheckbox')
      .then(($checkbox) => {
        if ($checkbox.is(':checked')) {
          cy.get('@secondCheckbox').uncheck().should('not.be.checked')
        }
      })

    // Ensure the first checkbox is checked
    cy.get('@firstCheckbox').should('be.checked')

    // Ensure the second checkbox is not checked
    cy.get('@secondCheckbox').should('not.be.checked')
  })
})
