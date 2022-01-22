
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        

        var data = {
            name: `${firstName} ${lastName} `,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '81999990000',
            address: {
                postalcode: '54330520',
                street: 'Rua Serrita',
                number: '710',
                details: 'casa',
                district: 'Cajueiro Seco',
                city_state: 'Jaboatão dos Guararapes/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

    return data
    }
}