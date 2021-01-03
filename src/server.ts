/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Oa Mundo' });
});

app.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

app.listen(3333, () => {
  console.log('🚀 servidor iniciado com sucesso!');
});
