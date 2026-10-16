import express from 'express';
import helmet from 'helmet';
import { Sequelize } from 'sequelize';
import books from "./controller/books.controller";
import users from "./controller/users.controller";

const app = express();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_PORT,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        password: process.env.DB_PASSWORD,

    }
)

sequelize.authenticate().then(() => {
    console.log("Database connected")
})

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded());

app.get("/books", books.getAll())
app.post("/add-book", books.create())
app.patch("/update-book", books.update())
app.delete("/delete-book", books.delete())

app.listen(process.env.PORT, () => {
    console.log(`Listening on the port ${process.env.PORT}`)
})