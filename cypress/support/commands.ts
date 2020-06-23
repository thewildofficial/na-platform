// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// tslint:disable-next-line: no-namespace

Cypress.Commands.add('login', (username = 'admin', password = 'admin') => {
    cy.server();
    cy.route({ method: 'POST', url: '/api/login' }).as('login');
    cy.route({ method: 'GET', url: '/api/users/user' }).as('getUser');
    cy.visit('/auth/login');
    cy.get('[data-cy=input]').first().type(username);
    cy.get('[data-cy=input]').last().type(password);
    cy.get('[data-cy=styled-button]').first().click();
    cy.wait(['@login', '@getUser']);
});

Cypress.Commands.add('getAll', (...elements) => {
    const promise = cy.wrap([], { log: false });

    for (let element of elements) {
        promise.then(arr => cy.get(element).then(got => cy.wrap([...arr, got])));
    }

    return promise;
});
