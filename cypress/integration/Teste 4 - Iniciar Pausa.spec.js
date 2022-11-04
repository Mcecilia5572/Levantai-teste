/// <reference types="cypress" />

describe('LevantAi', () => {
    it('Iniciar Pausa', () => {
        cy.visit('https://levantai.vercel.app')        
        cy.get('.button--orange').click()
        cy.waitUntil(() =>
            cy.get('.button--green', {timeout: 13000})
                .should('be.visible')
                .click().should('be.visible','Completei')
                )    
    })
}) 