# Backend Task - Everything Green Limited

This is a backend implementation for the technical task assigned by Everything Green Limited. It includes API development, JWT authentication, and a webhook endpoint.

---

## **Features**
1. **User Management**:
   - Register a new user (`POST /api/users/register`).
   - Fetch all users (`GET /api/users`).
   - Fetch a single user by ID (`GET /api/users/:id`).

2. **Authentication**:
   - JWT-based authentication for protected routes.

3. **Webhook**:
   - Process incoming webhook requests (`POST /api/webhook`).
   - Store webhook data in `db.json`.

---

## **Technologies Used**
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: Database (using Mongoose for object modeling).
- **JWT**: JSON Web Tokens for authentication.
- **bcryptjs**: Password hashing.
- **dotenv**: Environment variable management.

---

## **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backend-task.git
   cd backend-task
