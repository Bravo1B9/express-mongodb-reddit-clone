import createApp from "./app";
import dotenv from "dotenv";
import { connectToDatabase } from "./utils/db";

dotenv.config();
const port = process.env.PORT || 3000;

const app = createApp();

connectToDatabase();

app.listen(port, () => {
  console.log(`Server started and listening on port: ${port}`);
});