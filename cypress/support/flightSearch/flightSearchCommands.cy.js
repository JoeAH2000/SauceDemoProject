Cypress.Commands.add("selectDeparture", () => {
    cy.get('#input-button__departure').click()
    
    cy.get(':nth-child(2) > :nth-child(1) > .countries__country-inner').click()
    
    cy.get(':nth-child(1) > .body-l-lg > span').click()
})

Cypress.Commands.add("selectDestination", () => {
    cy.get(':nth-child(3) > :nth-child(2) > .countries__country-inner').click()
    
    cy.get('.list__airports-scrollable-container > .ng-star-inserted > .body-l-lg > span').click()
})

Cypress.Commands.add("selectFlexiDate", () => {
    cy.get('.ng-trigger-datesFromTripTypeChange > .input-button__content > .input-button__input').click()
        
    cy.get('[data-ref="datepicker-tabs__flexible-dates"] > fsw-datepicker-tab').click()

    cy.get('.carousel-items__content-slider > :nth-child(2)').click()

    cy.get('.flexible-dates__days > :nth-child(2)').click()

    cy.get('.flexible-dates__cta-apply').click()
})

Cypress.Commands.add("clickFlightSearch", () => {
    cy.get('.flight-search-widget__start-search').click()
})