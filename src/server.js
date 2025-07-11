import express from "express";
import { Sequelize } from "sequelize";
import config from "./config/database.js";

const app = express();

const sequelize = new Sequelize(config);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
