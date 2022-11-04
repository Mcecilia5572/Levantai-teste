/// <reference types="cypress" />

describe('LevantAi', () => {
    it('Completar Desafio da Pausa', () => {
        cy.visit('https://levantai.vercel.app')        
        cy.get('.button--orange').click()
        cy.waitUntil(() =>
            cy.get('.button--green', {timeout: 13000})
                .click()
                )
        cy.wait(3000) 
        cy.waitUntil(() =>
            cy.get('.button--green', {timeout: 7000})
               .click()//.should('be.visible','Completei')
                )
        cy.get('.level-up-modal__container-title').should('contain', 'Parabéns')            
    })
})

