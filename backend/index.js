const express = require('express');

const app = express();

app.get('/', (require, response) => {
  return response.json({
    evento: 'Semana Omnistack',
    aluno: 'Matheus Henrique Sechineli'
  });
});

app.listen(3333);