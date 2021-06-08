import expres, { Request, Response } from 'express';

import routes from './routes';

const app = expres();

app.use(expres.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
