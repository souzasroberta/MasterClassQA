/// <reference types="cypress"/>

describe('Buscar dispositivo', () => {
    it('Buscar dispositivo específico', () => {
        cy.request({
                method: 'GET',
                url: 'https://api.restful-api.dev/objects/6'
        }).then((resultado) => {
            // validar resultado
            expect(resultado.status).to.eql(200)
            // validar response body
            expect(resultado.body.id).to.eql('6')
            expect(resultado.body.id).to.not.empty
            expect(resultado.body.name).to.eql('Apple AirPods')
        })

    })

    it('Buscar dispositivo inexistente', () => {
        cy.request({
                method: 'GET',
                url: 'https://api.restful-api.dev/objects/asdfsad4842',
                failOnStatusCode: false
        })
   
    })
    
    it('Buscar todos os dispositivos', () => {
        cy.request({
                method: 'GET',
                url: 'https://api.restful-api.dev/objects'
    }).then((resultadoTodosDispositivos) => {
        // validar resultado
        expect(resultadoTodosDispositivos.status).to.eql(200)
        // validar response body
        expect(resultadoTodosDispositivos.body.id).length
        expect(resultadoTodosDispositivos.body.id).to.not.empty
    })

    })
})