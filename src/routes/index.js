import UserRouter from './UserRouter.js';

const routes = (app) => {
  app.use('/user', UserRouter);
};

export default routes;
