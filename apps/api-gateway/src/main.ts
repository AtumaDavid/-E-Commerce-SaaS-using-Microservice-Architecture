
import express from 'express';
import cors from 'cors'
import proxy from "express-http-proxy";
import morgan from "morgan"
import rateLimit from 'express-rate-limit';
import swaggerUi from "swagger-ui-express";
import axios from 'axios';
import cookieParser from "cookie-parser"


const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  allowedHeaders: ["Content-Type", "X-Requested-With", "Authorization"],
  credentials: true,
}))

app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(morgan('dev'));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(undefined, { swaggerOptions: { url: '/api-docs/swagger.json' } }));]
app.set("trust proxy", 1);

// rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: (req: any) => (req.user ? 1000 : 100), // If the request has a logged-in user (`req.user` exists), allow up to 1000 requests Otherwise (unauthenticated user or guest), limit to 100 requests
  message: { error: "Too many requests from this IP, please try again later." },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req: any) => req.ip, // Generate a unique key for each request
});

app.use(limiter);

app.get("/gateway-health", (req, res) => {
  res.send({ message: "Welcome to api-gateway!" });
});

app.use("/", proxy("http://localhost:6001"));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
