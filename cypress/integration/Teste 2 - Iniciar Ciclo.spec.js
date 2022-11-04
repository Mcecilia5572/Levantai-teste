/// <reference types="cypress" />

describe('LevantAi', () => {
    it('Iniciar Ciclo', () => {
        cy.visit('https://levantai.vercel.app')        
        cy.get('.button--orange').click()
        cy.get('.button--red').should('contain','Abandonar')
    })

})