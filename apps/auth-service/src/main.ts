import { errorMiddleware } from './../../../packages/error-handler/error-middleware';
import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Content-Type", "X-Requested-With", "Authorization"],
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send({ 'message': 'Hello API' });
});

app.use(errorMiddleware)

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on('error', (error) => {
    console.log("Server error: ", error);
})