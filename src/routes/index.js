import UserRouter from './UserRouter.js';

const routes = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.use('/api/user', UserRouter);
};

export default routes;
