import express from "express";
import { Sequelize } from "sequelize";
import config from "./config/database.js";
import Blog from "./models/Blog.js";
import blogRoute from "./routes/blogRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(config);
Blog.init(sequelize);

app.use("/blog", blogRoute);

const PORT = process.env.PORT || 3002;

sequelize
  .authenticate()
  .then(() => {
    console.log("server rodando");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:", err);
  });
