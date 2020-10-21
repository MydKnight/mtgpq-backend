import { authUser, createUser } from '../controllers/userController';

const userRoutes = (app) => {
  app.post('/auth', authUser);
  app.create('/create', createUser);
};

export default userRoutes;
