// importando o modo express para dentro da variavel express
const express = require('express'); 
const routes =require('./routes');
app.use(cors());
// variavel para armazenar a aplicação instanciano a aplicação
const app = express();
// Converter o corpo da requisição em json
app.use(express.json());
app.use(routes);
// informando que aplicação deve ouvir a porta 3333
app.listen(3333);
