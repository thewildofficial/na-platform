// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to log in.
         * @param username (optional) desired username
         * @param password (optional) desired password
         * @example cy.login('username', 'password')
        */
        login(username?: string, password?: string): Chainable<Element>
    }
}