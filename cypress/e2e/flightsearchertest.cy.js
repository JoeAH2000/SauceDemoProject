/// <reference types="cypress"/>

describe("Tests for Flight Search", () => {
    beforeEach( () => {
        cy.visit('https://www.ryanair.com/')

        cy.get('.cookie-popup-with-overlay__button').click()
    })

    it('Valid Flight Search Test', () => {
        cy.selectDeparture();
    
        cy.selectDestination();
    
        cy.selectFlexiDate();

        cy.clickFlightSearch();
    })
    
    it('Invalid Flight Search Test - No Destination', () => {
        cy.selectDeparture();
    
        cy.clickFlightSearch();

        cy.url().should('eq', 'https://www.ryanair.com/gb/en')
    })
})

