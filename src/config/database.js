// import dotenv from "dotenv";

// dotenv.config();

// export default {
//   dialect: "postgres",
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD, // ajustado aqui
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };
import dotenv from "dotenv";
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

export default {
  ...(isProduction
    ? {
        url: process.env.DATABASE_URL, // usa a DATABASE_URL no Render
      }
    : {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
      }),
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // importante para Supabase
    },
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
