
import signup from '../pages/SignupPage'
import singnupFactory from '../factories/SingupFactory'

describe('Cadastro', () => {

    it('Usuario deve se tornar um entregador', function() {
        var deliver = singnupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function() {
        var deliver = singnupFactory.deliver()
        deliver.cpf = '01#aa1245000'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Email incorreto', function() {
        var deliver = singnupFactory.deliver()
        deliver.email = 'qa.qa.qa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [

            { field: 'nome', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'numeroEndereco', output: 'É necessário informar o número do endereço' },
            { field: 'entrega', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function() {
            signup.go()
            signup.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} é obrigatório`, function () {
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })
})


