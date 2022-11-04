/// <reference types="cypress" />

describe('LevantAi', () => {
    it('Abortar Ciclo', () => {
        cy.visit('https://levantai.vercel.app')        
        cy.get('.button--orange').click()
        cy.get('.button--red').click()
        cy.get('.button--orange').should('contain','Iniciar um ciclo')
    })

})