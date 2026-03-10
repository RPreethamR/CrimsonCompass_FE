# 🧭 Crimson Compass — Tour Management System

A full-featured **tour management web application** built with **Next.js 15**, **React 19**, and **TypeScript**. Users can explore destinations, compare hotels, search flights, build multi-day itineraries, and manage bookings — all backed by a RESTful microservices API.


---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Destination Explorer** | Browse hotels and places with photo galleries, reviews, area info, and Google Maps integration |
| **Smart Search** | Debounced global search across hotels and places with real-time dropdown results |
| **Itinerary Builder** | Create, edit, and manage multi-day itineraries with accommodation, transportation, and activity entries |
| **Flight Search** | Search and filter flights by route, date, and class |
| **Authentication** | Credential login/signup + Google OAuth via NextAuth.js, with JWT token management and middleware-protected routes |
| **Review System** | Authenticated users can rate and review hotels and places with a star-rating UI |
| **Password Recovery** | Forgot/reset password flow with token-based email verification |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5.8 |
| **UI** | React 19, Tailwind CSS 4 |
| **Auth** | NextAuth.js 4 (JWT strategy) |
| **HTTP** | Axios, Fetch API |
| **Maps** | Google Maps API (`@react-google-maps/api`) |
| **Icons** | React Icons (Font Awesome) |
| **Containerization** | Docker (multi-stage Alpine build) |

---

**Key patterns:**
- **Centralized config** — All backend URLs driven by `NEXT_PUBLIC_BACKEND_URL` env var with production fallback
- **JWT auth flow** — NextAuth handles session management; `fetchWithAuth` utility attaches tokens to API calls
- **Middleware protection** — Server-side route guards for authenticated pages
- **Docker-ready** — Multi-stage `Dockerfile` for optimized production images

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/CrimsonCompass_FE.git
cd CrimsonCompass_FE
npm install
```

### 2. Configure Environment

Create a `.env.local` file in the project root:

```env
# Required
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

NEXT_PUBLIC_BACKEND_URL=https://your-backend-service-url
NEXT_PUBLIC_OAUTH_URL=https://your-oauth-service-url
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-key
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Production Build

```bash
npm run build
npm start
```

### 5. Docker

```bash
docker build -t crimson-compass-fe .
docker run -p 3000:3000 crimson-compass-fe
```
