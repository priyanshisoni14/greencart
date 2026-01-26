# 🥬 Greencart – Online Grocery Delivery Platform

Greencart is a full-stack online grocery delivery platform that enables users to browse groceries, place orders, make secure payments, and track deliveries in real time.  
The application supports **role-based access** for Users, Admins, and Delivery Partners, along with **real-time chat and live location tracking**.

---

## 🚀 Features

### 👤 User
- JWT-based authentication
- Browse and search groceries
- Add to cart & checkout
- Online (Stripe) and Cash on Delivery payments
- Real-time order tracking with live map
- In-app chat with delivery partner
- AI-powered quick chat suggestions

### 🛵 Delivery Partner
- Accept delivery assignments
- Live location sharing via Socket.io
- OTP-based order verification
- Real-time chat with users

### 🛠 Admin
- Add / edit / delete groceries
- Manage orders and delivery assignments
- Monitor order status and payments

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Redux Toolkit

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT Authentication
- Stripe Payments

### Other Tools
- Cloudinary (image uploads)
- Map integration for live tracking

---

## 🧠 System Design Overview

- Client–Server architecture
- Next.js handles UI rendering and routing
- Node.js + Express.js expose REST APIs
- MongoDB stores users, orders, messages, and assignments
- Socket.io enables real-time chat and live location updates
- Stripe Webhooks ensure secure payment processing
- Role-based access control across the platform

---

## 📡 Real-Time Capabilities

- Live order tracking on map
- Real-time chat between user and delivery partner
- Instant delivery status updates
- WebSocket-based location synchronization

---

## 🔐 Security

- JWT-based authentication
- Protected API routes
- Server-side OTP verification
- Secure Stripe payment handling


---

## 📌 Highlights

- Scalable REST APIs with Express
- Real-time systems using Socket.io
- Secure payment integration (Stripe)
- Clean MongoDB schema design
- Production-ready Next.js application

---

## 🚧 Future Enhancements
- Push notifications
- Admin analytics dashboard
- Delivery partner performance tracking
- Microservices-based backend

---

## 👩‍💻 Author

**Priyanshi Soni**  
Full-Stack Developer  

🔗 GitHub: https://github.com/priyanshisoni14  

---

⭐ If you like this project, consider starring the repository!
