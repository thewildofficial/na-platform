# Testing with Cypress

Cypress can test anything that runs in a browser.

Cypress enables you to write all types of tests:

* End-to-end tests
* Integration tests
* Unit tests

## Getting Started

These instructions will get you up and running for testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* [Cypress](https://www.cypress.io/)

### Installing

Once you've downloaded the project open a terminal and run

```
npm install
```

to install all dependencies, including Cypress.

## Running the tests

After installing the dependencies you must **start mongo**, start the application by running 

```
npm start
```

in one terminal, and

```
npm run web
```

in another terminal.

To run tests open one more terminal and run

```
npm run test-cypress
```

When the Cypress window appears select a test file to run it. Another browser window will open and will execute the tests.

## Test example

Let's write our first test!

```javascript
describe('First test', () => {
    // Check that we can access the register page.
    it('Successfully loads the register page', () => {
        /** 
         * Usually this should be the entire url but there is a 
         * config file (cypress.json) containing the common part of 
         * the url
         */  
        cy.visit('/auth/register');
        // Check if the url matches the current url for our register page
        cy.url().should('equal', 'http://localhost:3000/auth/register');
    });
});
```