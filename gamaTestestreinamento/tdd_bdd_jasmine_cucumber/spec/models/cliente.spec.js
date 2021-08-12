const Cliente = require('../../models/cliente')

describe('Clientes', ()=> {
    beforeEach(()=> {

    })

    
    it('valida um cliente', () => {
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()
    });

    it('Retorna todos', () => {
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10)
    });

    it('Nome no cliente uppercase', () => {
        let cliente = Cliente.primeiro();
        cliente.nome = "amarillo"
        expect(cliente.nomeUpercase()).toEqual("AMARILLO")
    });

})