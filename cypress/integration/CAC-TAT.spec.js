/// <reference types="Cypress" />
//EXERCICIO 1
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
//EXERCICIO EXTRA 1 
    it('Preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste,teste,teste,teste,teste,Teste,teste,teste,teste,teste,Teste,teste,teste,teste,teste,Teste,teste,teste,teste,teste,Teste,teste,teste,teste,teste'
        cy.get('#firstName').type('Elrison')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('elrisonsilva@gmail.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
//EXERCICIO EXTRA 2
    it('Exibe mensagem de erro ao submeter o formulario com um email com formatação inválida', function(){
        cy.get('#firstName').type('Elrison')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('elrisonsilva@gmail,com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
//EXERCICIO EXTRA 3
    it('campo telefone continua vazio quando preenchido com valor não-numeroco', function(){
        cy.get('#phone')
          .type('abcdefghij')
          .should('have.value', '')
        
    })
//EXERCICIO EXTRA 4  
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Elrison')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('elrisonsilva@gmail,com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

    })

//EXERCICIO EXTRA 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        const longText = 'exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário'
        cy.get('#firstName')
          .type('elrison')
          .should('have.value','elrison')
          .clear()
          .should('have.value', '')

        cy.get('#lastName')
          .type('silva')
          .should('have.value','silva')
          .clear()
          .should('have.value', '')

        cy.get('#email')
          .type('elrisonsilva@gmail.com')
          .should('have.value','elrisonsilva@gmail.com')
          .clear()
          .should('have.value', '')

        cy.get('#phone')
         .type('92984766746')
         .should('have.value','92984766746')
         .clear()
         .should('have.value', '')  

        cy.get('#open-text-area')
          .type(longText, {delay:0})
          .clear()
          .should('have.value', '')
    })
    
//EXERCICIO EXTRA 6

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

//EXERCICIO EXTRA 7 COMANDOS CUSTOMIZADOS
    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })
//EXERCICIO EXTRA 8
    it('Preenche os campos obrigatórios e envia o formulário de novo', function() {
        const longText = 'Teste,teste,teste,teste,teste,Teste,teste,teste,teste,teste,Teste,teste,teste,teste,teste,Teste,teste,teste,teste,teste,Teste,teste,teste,teste,teste'
        cy.get('#firstName').type('Elrison')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('elrisonsilva@gmail.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
})

})
