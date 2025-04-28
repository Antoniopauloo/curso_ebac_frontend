/// <reference types="cypress" />

describe('Testes para a Agenda de contatos', () => {  
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve testar o formulário', () => {
        cy.get('header > h1').should('have.length.greaterThan', 0)
        cy.get('form > input').should('have.length', 3)
    })

    it('deve ativar modo de edição', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').should('have.length.greaterThan', 0)
    })

    it('Deve alterar o primeiro contato selecionado', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear().type('Antonio Paulo')
        cy.get('[type="email"]').clear().type('antonio.paulo@outlook.com.br')
        cy.get('[type="tel"]').clear().type('(48) 88888-8888')
        cy.get('.alterar').click()
        cy.screenshot('tela-inscricao-preenchido-alteracao')
    })
})