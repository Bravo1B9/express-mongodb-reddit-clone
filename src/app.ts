import express, { Express } from "express";
import userRoutes from "./routes/userRoutes";
import profileRoutes from "./routes/profileRoutes";
import communityRoutes from './routes/communityRoutes';

const createApp = (): Express => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ msg: 'Home Page' });
  });

  app.use('/api/users', userRoutes);
  app.use('/api/profiles', profileRoutes);
  app.use('/api/communities', communityRoutes);

  return app;
}

export default createApp;