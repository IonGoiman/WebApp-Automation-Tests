describe('Context Menu Test', () => {
  beforeEach(() => {
    // Navigate to the Context Menu page
    cy.visit('https://the-internet.herokuapp.com/context_menu')
  })

  it('should display an alert when the context area is right-clicked', () => {
    // Verify the context menu area is present
    cy.get('#hot-spot').should('exist').and('be.visible')

    // Stubbing window.alert to control its behavior
    const stub = cy.stub()
    cy.on('window:alert', stub)

    // Right-click on the specified area to trigger the context menu
    cy.get('#hot-spot')
      .rightclick()
      .then(() => {
        // Verify that the alert has been called with the correct text
        expect(stub.getCall(0)).to.be.calledWith('You selected a context menu')
      })
  })
})
