const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Conexão com o mongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB', error));

app.use(express.json());

//Exemplo de rota inicial
app.get('/', (req, res) => {
    res.send('Backend do ScoreMate está rodando.')
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const footballRoutes = require('./routes/footballRoutes')

app.use('/api/football', footballRoutes)