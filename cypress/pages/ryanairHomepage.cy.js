class ryanairHomepage {
    elements ={
        departureButton: () => cy.get('#input-button__departure'),
        firstDepartureCountry: () => cy.get(':nth-child(2) > :nth-child(1) > .countries__country-inner'),
        firstDepartureCity: () => cy.get(':nth-child(1) > .body-l-lg > span'),
        firstDestinationCountry: () => cy.get(':nth-child(3) > :nth-child(2) > .countries__country-inner'),
        firstDestinationCity: () => cy.get('.list__airports-scrollable-container > .ng-star-inserted > .body-l-lg > span'),
        departureDateButton: () => cy.get('.ng-trigger-datesFromTripTypeChange > .input-button__content > .input-button__input'),
        selectFlexi: () => cy.get('[data-ref="datepicker-tabs__flexible-dates"] > fsw-datepicker-tab'),
        selectSecondMonth: () => cy.get('.carousel-items__content-slider > :nth-child(2)').wait(1000),
        selectSecondDay: () => cy.get('.flexible-dates__days > :nth-child(2)'),
        dateApply: () => cy.get('.flexible-dates__cta-apply'),
        searchButton: () => cy.get('.flight-search-widget__start-search')
    }
};

module.exports = new ryanairHomepage();