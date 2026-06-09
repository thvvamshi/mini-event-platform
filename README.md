# 📅 Mini Event Platform

<p align="center">
A full-stack event management platform that enables users to create, discover, and manage events while providing a seamless RSVP experience through a secure and intuitive interface.
</p>

---

## About The Project

I built this project to explore how modern event management platforms handle user authentication, event ownership, attendee management, and participation workflows.

The platform allows users to create events, upload event images, manage attendees, and RSVP to events while enforcing proper access control and event capacity constraints.

Beyond basic CRUD functionality, this project focuses on authentication, authorization, media management, user experience, and scalable backend architecture using the MERN stack.

---

## Features

### 🔐 Authentication

* User registration and login
* JWT-based authentication
* Protected routes
* Secure session handling

### 📅 Event Management

* Create events
* Edit events
* Delete events
* Search events by title
* Event ownership controls
* Public event discovery

### 🤝 RSVP System

* Join events
* Leave events
* Prevent duplicate RSVPs
* Capacity management
* Live attendee tracking
* Joined status indicators

### 👤 User Dashboard

* Manage created events
* View hosted events
* Event ownership badges
* Quick event management actions

### 🖼 Media Uploads

* Event image uploads
* Cloudinary integration
* Media storage and delivery

---

## Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Authentication

* JWT

### Media Management

* Multer
* Cloudinary

---

## Project Structure

```text
mini-event-platform/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middlewares/
│   │   └── config/
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── api/
    │   └── utils/
```

---

## Core Functionality

### Event Creation

Authenticated users can create and manage events while maintaining ownership of their content.

### Event Discovery

Users can browse and search available events across the platform.

### RSVP Management

Attendees can join and leave events while the platform enforces participation limits and prevents duplicate registrations.

### Ownership Controls

Only event creators can edit or delete their events, ensuring secure event management.

---

## Environment Variables

### Backend

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_uri

JWT_SECRET=your_jwt_secret

CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

---

## Local Development

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

## Deployment

### Backend

* Render

### Frontend

* Vercel

---

## Engineering Concepts Demonstrated

* Full-Stack MERN Development
* Authentication & Authorization
* REST API Design
* Event Management Systems
* RSVP Workflows
* Database Modeling
* Media Upload Handling
* Cloudinary Integration
* Protected Routes
* User Access Control

---

## Future Improvements

* Event Categories
* Location-Based Search
* Email Notifications
* Calendar Integration
* Ticketing System
* QR Code Check-In
* Real-Time Updates
* Event Recommendations

---

## Learning Outcomes

This project helped me gain practical experience with:

* Building secure MERN applications
* JWT authentication workflows
* User ownership and authorization systems
* Media upload pipelines
* Event-driven user experiences
* Scalable backend architecture

---

## Author

**Vamshi Kumar**

Software Developer | Full-Stack Engineer


LinkedIn: https://www.linkedin.com/in/bodavamshikumar

---

## License

MIT License
