# Technology Stack for Multivendor Ecommerce Shop


## Backend

- Express: Node.js framework for building the server-side application.
- MongoDB: NoSQL database for storing product, vendor, and user data.
- Redis: In-memory data store for caching and session management.
- Prisma: Object-Relational Mapping (ORM) for database management and querying.
- Kafka: Messaging system for handling asynchronous tasks.
- WebSocket: For real-time communication between the client and the server.
- Firebase Web Push Notifications: For sending push notifications to users.

## Frontend

- Next.js: React framework for building the user interface with server-side rendering.
- Jest: Testing framework for unit and integration tests on the frontend.

## Architecture & Deployment

- Microservice Architecture: Modular design for scalability and maintainability.
- NX Mono Repo: Monorepo setup for managing multiple packages and services.
- Docker: Containerization for consistent development and deployment.
- AWS: Cloud platform for hosting and scaling the application.
- EC2: AWS service for virtual servers to run the application.
- Cloudflare: For CDN, DNS, and security features like DDoS protection.
- Domain Management: Handling custom domains for the ecommerce platform.

## DevOps & CI/CD

- CI/CD: Continuous integration and deployment pipelines (mentioned twice, likely using multiple tools).
- GitHub Actions: Automating workflows for building, testing, and deploying.

## Machine Learning

- TensorFlow: For implementing ML features like product recommendations or fraud detection.

## API & Documentation

- API Docs: Documentation for the API endpoints.
- Swagger: Tool for generating interactive API documentation.
- API Testing: Ensuring the APIs work as expected.

## Image Processing

- Image Kit: For image optimization, resizing, and delivery.



# NX Mono Repo Setup

- npx create-nx-workspace@latest . `(to create a new workspace)`
- npm install --save-dev @nx/express `(to add express support)`
- npx nx generate @nx/express:app apps/my-app `(to generate a new express app)` **
- npx nx g @nx/express:app my-app --directory=apps/my-app --e2eTestRunner=none `(to generate a new express app without e2e tests)`
- npx kill-port 0000 `(to kill whatever process that is running server)`

# Dependencies

- npm i express-http-proxy `(to install the Express HTTP Proxy package for forwarding requests to other services in a microservices architecture)`
- npm i --save-dev @types/express-http-proxy `(to install the Express HTTP Proxy type definitions)`
- npm i cors `(to install the CORS package for handling cross-origin resource sharing)`
- npm i --save-dev @types/cors `(to install the CORS type definitions)`
- npm i morgan `(to install the Morgan package for logging HTTP requests and responses)`
- npm i --save-dev @types/morgan `(to install the Morgan type definitions)`
- npm i express-rate-limit `(to install the Express Rate Limit package for rate limiting requests)`
- npm i swagger-ui-express `(to install the Swagger UI Express package for creating a Swagger UI for API documentation)`
- npm i --save-dev @types/swagger-ui-express `(to install the Swagger UI Express type definitions)`
- npm i axios `(to install the Axios package for making HTTP requests)`
- npm i dotenv `(to install the Dotenv package for managing environment variables)`
- npm i cookie-parser `(to install the Cookie Parser package for parsing and signing cookies)`
- npm i --save-dev @types/cookie-parser `(to install the Cookie Parser type definitions)`