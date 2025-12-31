# 📅 Mini Event Platform – MERN Stack

A full-stack **Mini Event Platform** built using **MongoDB, Express.js, React.js, and Node.js (MERN)** as part of the **MERN Stack Intern – Technical Screening Assignment**.

This application allows users to register, log in, create and manage events, and RSVP to events with proper authentication, authorization, and ownership controls.

---

## 🚀 Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Protected routes

### 📌 Event Management
- View all public events
- Search events by title
- Create events (authenticated users only)
- Edit and delete events (event owner only)
- Event capacity enforcement

### 🤝 RSVP System
- Join an event
- Leave an event
- Prevent duplicate joins
- Disable join if already joined
- Live attendee count
- “Joined” badge for attendees

### 🧑 Dashboard
- View events created by the logged-in user
- Edit/Delete options visible only to event owners
- “Host” badge for owned events

### 🖼 Bonus Enhancements
- Event image upload using Cloudinary
- Minimal and clean UI using inline CSS

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router DOM
- Inline CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

---

## 📂 Complete Project Structure

```
mini-event-platform/
│
├── backend/
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── server.js
│       │
│       ├── config/
│       │   ├── db.js
│       │   └── cloudinary.js
│       │
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   ├── event.controller.js
│       │   └── rsvp.controller.js
│       │
│       ├── routes/
│       │   ├── auth.routes.js
│       │   ├── event.routes.js
│       │   └── index.js
│       │
│       ├── models/
│       │   ├── User.js
│       │   └── Event.js
│       │
│       └── middlewares/
│           ├── auth.js
│           └── upload.js
│
└── frontend/
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        │
        ├── api/
        │   └── axios.js
        │
        ├── utils/
        │   └── auth.js
        │
        ├── components/
        │   ├── Navbar.jsx
        │   └── ProtectedRoute.jsx
        │
        └── pages/
            ├── Login.jsx
            ├── Signup.jsx
            ├── PublicEvents.jsx
            ├── CreateEvent.jsx
            └── Dashboard.jsx
```

---

## ⚙️ Environment Variables

### Backend (`.env`)

```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

> ⚠️ Do not commit `.env` files to version control.

---

## ▶️ Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment

### Backend (Render)
- Create a new Web Service
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Add environment variables from `.env`

### Frontend (Vercel)
- Import repository
- Root directory: `frontend`
- Add environment variable:
```
VITE_API_URL=https://your-backend-url/api
```

---

## ✅ Submission Checklist

- [x] All mandatory features implemented
- [x] Bonus features added
- [x] JWT authentication & protected routes
- [x] Owner-only edit/delete actions
- [x] RSVP join/leave functionality
- [x] Clean and complete folder structure
- [x] README included
- [x] Deployed frontend and backend

---

