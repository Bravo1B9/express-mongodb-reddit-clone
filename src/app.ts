import express, { Express } from "express";

const createApp = (): Express => {
  const app = express();

  app.get('/', (req, res) => {
    res.json({ msg: 'Home Page' });
  });

  return app;
}

export default createApp;