import express, { Express } from "express";
import userRoutes from "./routes/userRoutes";

const createApp = (): Express => {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ msg: 'Home Page' });
  });

  app.use('/api/users', userRoutes);

  return app;
}

export default createApp;