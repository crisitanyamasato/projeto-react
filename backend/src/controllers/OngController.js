const crypto = require('crypto');
const connection = require('../database/connection');


module.exports ={
    async index(request, response){ 
   
        const ongs = await connection('ongs').select('*');
           return response.json(ongs);
       
    },
    async create(resquest, response){
        // primeiro paramentro é a requisição(request)
    // Acessa os parâmetro passados na URL
    // const params = request.query;
    const {name, email, whatsapp, city, uf} = resquest.body;
    // gerando um id randomico
    const id = crypto.randomBytes(4).toString('HEX');
    // inserindo os dados no banco
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    // console.log(data);
    // segundo paramentro é a resposta(response)
    // retornando uma resposta para o navegador
    // return response.send('Hello word');

    return response.json(id);
    }


};