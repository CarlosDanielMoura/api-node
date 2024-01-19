import express from "express";
import conectDB from "./models/Database";
import routes from "./routes";
const app = express();
const PORT = 3000;

//Usando routes do express
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  await conectDB();
});
