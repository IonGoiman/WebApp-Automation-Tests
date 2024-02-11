describe('Broken Images', () => {
  beforeEach(() => {
    // Navigate to the Broken Images page
    cy.visit('https://the-internet.herokuapp.com/broken_images')
  })

  it('checks each image on the page for broken links', () => {
    // Get all images on the page
    cy.get('img').each(($img) => {
      cy.wrap($img)
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
  })
})
