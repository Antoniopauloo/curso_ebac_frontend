describe('Testes para a Agenda de contatos', () => {  
    
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve testar o formulário', () => {
        cy.get('header > h1').should('have.length.greaterThan', 0)
        cy.get('form > input').should('have.length', 3)
    })

    it('Deve apagar o ultimo contato', () => {
        cy.get('.delete').last().click()
        cy.screenshot('tela-exclusao')
    })
})