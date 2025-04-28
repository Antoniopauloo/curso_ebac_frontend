describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve incluir um novo contato', () => {
    cy.get('.adicionar').click()
    cy.get('[type="text"]').type('João Silva')
    cy.get('[type="email"]').type('joao@email.com')
    cy.get('[type="tel"]').type('11999999999')
    cy.get('button[type="submit"]').click()
    
    cy.contains('João Silva', { timeout: 10000 }).should('be.visible')
  })

  it('Deve verificar se o botão adicionar é do tipo submit', () => {
    cy.get('.adicionar')
      .should('have.attr', 'type', 'submit')
      .and('have.class', 'adicionar')
  })
})