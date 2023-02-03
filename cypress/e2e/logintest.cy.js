/// <reference types="cypress"/>

it('Standard Login', () => {
    cy.visit('https://www.saucedemo.com/')
    
    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="password"]').click
})