// Rotas e Recursos

// metodos HTTP
// GET: Buscar umas informção do backend
// POST:Criar uma informação no backend
// PUT: Alterar uma infomação no backend
// DELETE:Deletar uma informação backend

/** Tipo de parametros
* Query Params: Parâmetros nomeados enviados na rota após "?", servem para filtros e paginação
* Route Params: Parâmetros para identificar recursos
* Request Body: Corpo da requisição, para criar ou alterar recursos
*/

// SQL:Mysql, SQLite, PostgreSQL
// Driver:SELECT * FROM users
// Query Builders: table('users').select('*').where()

// definindo a rota URL

// importando o modo express para dentro da variavel express
const express = require('express'); 
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// const connection = require('./database/connection');
// variavel para armazenar a aplicação instanciano a aplicação
const routes = express.Router();

// routes.get('/users/:id',(request, response)=>{
//     // primeiro paramentro é a requisição(request)
//     // Acessa os parâmetro passados na URL
//     // Route Params:
//     const params1 = request.params;
//     // Query Params
//     // const params = request.query;

//     console.log(params1);
//     // segundo paramentro é a resposta(response)
//     // retornando uma resposta para o navegador
//     // return response.send('Hello word');
//     return response.json({
//         evento:'Curso react',
//         aluno:'Cristian'
//     });

// });
// routes.post('/users2',(request, response)=>{ 
//     // primeiro paramentro é a requisição(request)
//     // Acessa os parâmetro passados na URL
//     // const params = request.query;
//     const params1 = request.body;

//     console.log(params1);
//     // segundo paramentro é a resposta(response)
//     // retornando uma resposta para o navegador
//     // return response.send('Hello word');

//     return response.json({
//         evento:'Curso react cristian',
//         aluno:'Cristian'
//     });

// });
routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);
routes.post('/incidents',IncidentController.create);

routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);

module.exports = routes;