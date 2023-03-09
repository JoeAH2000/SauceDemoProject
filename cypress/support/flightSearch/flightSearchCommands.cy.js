import ryanairHomepage from "../../pages/ryanairHomepage.cy.js";

Cypress.Commands.add("selectDeparture", () => {
    ryanairHomepage.elements.departureButton().click();
    
    ryanairHomepage.elements.firstDepartureCountry().click();
    
    ryanairHomepage.elements.firstDepartureCity().click();
})

Cypress.Commands.add("selectDestination", () => {
    ryanairHomepage.elements.firstDestinationCountry().click();
    
    ryanairHomepage.elements.firstDestinationCity().click();
})

Cypress.Commands.add("selectFlexiDate", () => {
        
    ryanairHomepage.elements.selectFlexi().click()

    ryanairHomepage.elements.selectSecondMonth().click()

    ryanairHomepage.elements.selectSecondDay().click()

    ryanairHomepage.elements.dateApply().click()
})

Cypress.Commands.add("clickFlightSearch", () => {
    ryanairHomepage.elements.searchButton().click()
})