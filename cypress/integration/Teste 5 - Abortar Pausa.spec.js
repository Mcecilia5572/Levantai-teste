/// <reference types="cypress" />

describe('LevantAi', () => {
    it('Abortar Pausa', () => {
        cy.visit('https://levantai.vercel.app')        
        cy.get('.button--orange').click()
        cy.waitUntil(() =>
            cy.get('.button--abort', {timeout: 13000})
                .should('be.visible')
                .click()//.wait(3000).should('contain','Iniciar um ciclo')
                .get('.button--orange').should('contain','Iniciar um ciclo')
                )           
          
    })
})