describe('Homepage Tests', () => {
    /**
     * In order to get to our homepage the user must log in first.
     */
    before('login', () => {
        cy.login();
    });

    it('Homepage loads successfully', () => {
        cy.url().should('equal', 'http://localhost:3000/');
    });

    // Beta homepage content
    /**
     * Check for button linking to learning map
     */
    it('Has button linking to learning map', () => {
        cy.get('[data-cy=beta-learning-map]').should('exist');
    });

    it('Has button linking to topic admin', () => {
        cy.get('[data-cy=beta-topic-admin]').should('exist');
    });

    it('Has button linking to topic example', () => {
        cy.get('[data-cy=beta-topic-example]').should('exist');
    });

    it('Has button linking to taxonomy admin', () => {
        cy.get('[data-cy=beta-taxonomy-admin').should('exist');
    });

    it('Has button linking to code admin', () => {
        cy.get('[data-cy=beta-code-admin]').should('exist');
    });

    it('Has Eniac gif', () => {
        cy.get('[data-cy=eniac-gif]').should('exist');
    });

    it('Has newsletter form', () => {
        cy.get('[data-cy=newsletter-form]').should('exist');
    });

    it('When clicking on learning map it redirects us to learning map', () => {
        cy.get('[data-cy=beta-learning-map]').click();
        cy.url().should('equal', 'http://localhost:3000/global');
    });

    it('When clicking on topic admin it redirects us to topic admin', () => {
        // Go back from the previous page
        cy.go('back');
        cy.get('[data-cy=beta-topic-admin]').click();
        cy.url().should('equal', 'http://localhost:3000/admin/topic-new/simple-date-picker-with-javascript-and-html');
    });

    it('When clicking on topic example it redirects us to topic example', () => {
        // Go back from the previous page
        cy.go('back');
        cy.get('[data-cy=beta-topic-example]').click();
        cy.url().should('equal', 'http://localhost:3000/topic-new/simple-date-picker-with-javascript-and-html');
    });

    it('When clicking on taxonomy admin it redirects us to taxonomy admin', () => {
        // Go back from the previous page
        cy.go('back');
        cy.get('[data-cy=beta-taxonomy-admin]').click();
        cy.url().should('equal', 'http://localhost:3000/admin/taxonomy');
    });

    it('When clicking on code admin it redirects us to code admin', () => {
        // Go back from the previous page
        cy.go('back');
        cy.get('[data-cy=beta-code-admin]').click();
        cy.url()
            .should('equal', 'http://localhost:3000/admin/topic/simple-date-picker-with-javascript-and-html/packages');
    });
});