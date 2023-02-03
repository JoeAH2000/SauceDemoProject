/// <reference types="cypress"/>

it('Google Search Test', () => {
    cy.visit('https://www.google.com/')

    cy.get('.jw8mI').scrollTo("bottom")

    cy.get('#L2AGLb > .QS5gu').click()

    cy.get('.gLFyf').type('Fanduel')

    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
})