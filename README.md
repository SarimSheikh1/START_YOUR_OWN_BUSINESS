# BusinessPro

BusinessPro is a Node.js, Express and SQLite business-planning application. Its startup planner accepts **any whole PKR amount from 200,000 through 10,000,000**. It calculates recommendations from that exact input, rather than routing users into preset capital bands.

## Run locally

1. Install Node.js 18+ and open this folder in VS Code.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set a secure `JWT_SECRET`.
4. Run `npm run seed`.
5. Run `npm start`, then open http://localhost:5000.

For development, use `npm run dev`.

Demo login after seeding: `admin@businesspro.demo` / `ChangeMe123!` — change this before any real deployment.

## Core API

- `POST /api/auth/register`, `POST /api/auth/login`
- `POST /api/startup-planner/analyze` (requires `capital` integer 200000–10000000)
- `GET /api/business-templates/:id`
- `GET/POST /api/startup-plans` (JWT)
- `POST /api/businesses/from-plan/:id` (JWT)
- `GET /api/businesses`, `GET /api/dashboard/:businessId` (JWT)

Planning costs, revenue and break-even details are estimates/assumptions; actual results vary by city, supplier, rent, staffing, market conditions and business model.

## Roman Urdu

BusinessPro aik business planning aur management system hai. User 2 lakh se 1 crore PKR tak **koi bhi exact amount** enter kar sakta hai, jaise 225,000 ya 3,500,000. System database ke business templates ko usi exact budget ke against analyse karta hai aur cost breakdown, reserve aur working capital dikhata hai. User plan save karke usay business mein convert kar sakta hai.
