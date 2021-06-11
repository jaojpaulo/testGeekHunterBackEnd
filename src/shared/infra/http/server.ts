import 'reflect-metadata';
import expres from 'express';

import 'express-async-errors';

import routes from './routes';

import '../typeorm';
import '../../container';

const app = expres();

app.use(expres.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
