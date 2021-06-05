import expres, { Request, Response } from 'express';

const app = expres();

app.use(expres.json());

app.get('/', (request: Request, response: Response) => {
  response.json({
    mensagem: 'Funciona 🎈',
  });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
