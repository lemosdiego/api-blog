import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "development" ? ".env.local" : ".env";
dotenv.config({ path: envFile });

const isProduction = process.env.NODE_ENV === "production";

export default {
  dialect: "postgres",
  ...(isProduction
    ? {
        use_env_variable: "DATABASE_URL",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
      }),
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
