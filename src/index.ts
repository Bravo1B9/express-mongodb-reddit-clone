import createApp from "./app";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;

const app = createApp();

app.listen(port, () => {
  console.log(`Server started and listening on port: ${port}`);
});