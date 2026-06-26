# 📚 Digital Life Lessons

**Preserve your wisdom, document your blueprint, and share life lessons for future generations.**

Digital Life Lessons is a full-stack platform that allows users to write, publish, and monetize their personal experiences and life lessons. It features a unique, high-quality **Neo-Brutalist** design system with fluid animations, glassmorphism elements, and highly interactive user interfaces.

---

## 🌟 Key Features

- **Dynamic Feed & Filtering:** Explore community lessons filtered by categories, emotional tones, and popularity.
- **Premium Content Monetization:** Native Stripe integration allows users to upgrade to premium accounts, unlocking exclusive lessons and detailed analytics.
- **Robust Authentication:** Secure JWT-based authentication using **Better-Auth** (supports both local credentials and Google OAuth).
- **Interactive Dashboards:**
  - **User Dashboard:** Manage drafts, track lesson engagement metrics (views/likes), and view saved bookmarks.
  - **Admin Control Center:** Global oversight of platform health, user roles, content moderation queue, and system analytics via professional interactive charts.
- **Community Interaction:** Like, comment, share, and bookmark favorite lessons.
- **Neo-Brutalist UI:** A distinct, professional design language featuring bold borders, high-contrast colors, floating animations (`framer-motion`), and tactile interactive states.

---

## 🛠 Tech Stack

The application is split into a separated Client and Server architecture.

### Client (Frontend)
- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS v4 with custom neo-brutalist utility classes
- **UI & Animations:** Framer Motion, DaisyUI, Lucide React icons
- **Data Visualization:** Recharts
- **Forms & Interactions:** React Toastify for notifications, custom hooks for seamless pagination and filtering.

### Server (Backend)
- **Framework:** Node.js / Express.js
- **Database:** MongoDB (Native Driver)
- **Authentication:** Better-Auth, `jose` for secure JWT verification and decoding
- **Payments:** Stripe SDK for handling premium subscription checkouts
- **Security:** Custom modular middleware for JWT validation, role-based access control (Admin vs. User), and account ban checks.

---

## 📂 Project Architecture

```text
life-lessons/
├── client/                 # Next.js Frontend Application
│   ├── src/app/            # App Router (Pages & Layouts)
│   ├── src/components/     # Reusable UI Components & Sections
│   ├── src/lib/            # Utility functions, animations, auth-client
│   └── package.json
└── Server/                 # Express.js Backend API
    ├── config/             # DB Connection Logic
    ├── controllers/        # Stripe & Payment Webhooks
    ├── middlewares/        # Security, JWT, and Role Guards
    ├── routes/             # API Endpoints (users, lessons, admin, etc.)
    └── index.js            # Entry Point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB instance (Atlas or local)
- Stripe Developer Account (for payments)
- Google Cloud Console (for OAuth credentials)

### 1. Environment Configuration

You'll need `.env` files in both the `client` and `Server` directories.

**Client (`client/.env`):**
```env
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_pub_key
STRIPE_SECRET_KEY=your_stripe_secret
JWT_SECRET=your_jwt_secret
SERVER_URL=http://localhost:3100
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_key
```

**Server (`Server/.env`):**
```env
PORT=3100
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
CLIENT_URL=http://localhost:3000
```

### 2. Installation & Running

**Start the Backend Server:**
```bash
cd Server
npm install
npm start
```
*The server will run on http://localhost:3100*

**Start the Frontend Client:**
```bash
cd client
npm install
npm run dev
```
*The client will run on http://localhost:3000*

---

## 🛡️ Security & Roles
- **Guest:** Can view public lessons (limited description for premium content).
- **Authenticated User:** Can create lessons, save bookmarks, like, comment, and appeal bans.
- **Premium User:** Has unrestricted access to all Premium lessons.
- **Admin:** Has full access to the Admin Control Center, can change user roles, feature lessons, delete content, and moderate reports.

---

## 📄 License
This project is open source and available under the ISC License.
