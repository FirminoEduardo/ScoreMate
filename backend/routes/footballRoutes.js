// backend/routes/footballRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.API_FOOTBALL_KEY; // Certifique-se de ter configurado a chave da API no .env
const BASE_URL = 'https://v3.football.api-sports.io';

// Rota para obter partidas com base na data atual
router.get('/matches', async (req, res) => {
   const date = new Date();
   const today = date.toISOString().split('T')[0]; // Obter data atual no formato YYYY-MM-DD

   try {
      // Fazendo a requisição para a API-FOOTBALL
      const apiResponse = await axios.get(`${BASE_URL}/fixtures`, {
         headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': API_KEY,
         },
         params: {
            date: today,
            timezone: 'America/Sao_Paulo', // Defina o fuso horário
         },
      });

      const matches = apiResponse.data.response; // Corrigido para usar apiResponse

      // Filtra as partidas com base na data atual
      const todayMatches = matches.filter(match => {
         const matchDate = new Date(match.fixture.date).toISOString().split('T')[0];
         return matchDate === today;
      });

      res.status(200).json(todayMatches);
   } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao obter partidas');
   }
});

module.exports = router;
