Cypress.Commands.add('getInStory', getInStory)

Cypress.Commands.add('getInStoryByTestId', id =>
  getInStory(`[data-test="${id}"]`),
)

// because storybook loads our story in an iframe,
// we have to get that iframe and select items inside there.
// Learned this from https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
function getInStory(selector) {
  cy.get('#storybook-preview-iframe').then($iframe => {
    const doc = $iframe.contents()
    return cy.wrap(doc.find(selector))
  })
}

Cypress.Commands.add('visitStory', name => {
  const url = `http://localhost:6006/?selectedKind=Examples&selectedStory=${name}&full=1`
  return cy.visit(url)
})
