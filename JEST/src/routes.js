import { Router } from 'express';
import UsersController from './controllers/UsersController';

const routes = Router();

routes.get('/', (_, res) =>
  res.status(200).json({ ok: 'Blog NAVIT - Online' })
);

routes.post('/user', async (req, res) => {
  const { statusCode, body } = await UsersController.create(req);
  res.status(statusCode).json(body);
});

routes.get('/user', async (_, res) => {
  const { statusCode, body } = await UsersController.findAll();
  res.status(statusCode).json(body);
});

routes.get('/user/:id', async (req, res) => {
  const { statusCode, body } = await UsersController.find(req);
  res.status(statusCode).json(body);
});

routes.put('/user/:id', async (req, res) => {
  const { statusCode, body } = await UsersController.update(req);
  res.status(statusCode).json(body);
});

routes.delete('/user/:id', async (req, res) => {
  const { statusCode, body } = await UsersController.destroy(req);
  res.status(statusCode).json(body);
});

routes.use((_, res) => {
  res.status(404).json({ error: 'URL NOT FOUND' });
});

export default routes;
