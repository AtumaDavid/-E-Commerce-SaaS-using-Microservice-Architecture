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