/// <reference types="cypress" />

describe('TodoList', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('should creat a new todo', () => {
        cy.get('input[type="text"]').type('Test Todo{enter}');
        cy.get('ul > li').should('have.length', 1);
        cy.get('ul > li').first().should('contain', 'Test Todo');
    })
});