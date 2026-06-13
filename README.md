# 🏠 Rentopia

A full-stack Airbnb-inspired rental platform where users can list properties, browse stays, make reservations, manage trips, save favorites, and host their own properties.

## 🚀 Live Demo

**Live Site:** https://rentopia-ysvy.vercel.app

## Screenshots 

    <img width="1355" height="636" alt="image" src="https://github.com/user-attachments/assets/3906f48c-84e0-4e3c-866b-d2759a3c196a" />
    <img width="1353" height="639" alt="image" src="https://github.com/user-attachments/assets/62338cbe-0274-4578-ab67-f21697c8ed0f" />
    <img width="1353" height="639" alt="image" src="https://github.com/user-attachments/assets/86c6b362-2865-4580-a07e-3adf22f60c98" />
   <img width="1349" height="636" alt="image" src="https://github.com/user-attachments/assets/d69c055e-1516-4d00-bb9b-84c605f754b8" />


## ✨ Features

### Authentication

* Credentials Authentication
* Google Authentication
* GitHub Authentication
* Secure Session Management with NextAuth

### Property Management

* Create Property Listings
* Upload Property Images
* Categorize Listings
* Set Price, Guests, Rooms, and Bathrooms
* Delete Owned Properties

### Search & Filtering

* Search by Location
* Search by Category
* Filter by Guests
* Filter by Rooms
* Filter by Bathrooms
* Filter by Date Range

### Reservations

* Book Available Properties
* Dynamic Date Availability Checking
* Calculate Total Reservation Price
* Cancel Reservations

### User Features

* Manage Trips
* Manage Reservations
* Manage Properties
* Favorite Listings
* View Listing Details

### Maps & Location

* Interactive Maps
* Country Selection
* Location-Based Listings

### UI/UX

* Responsive Design
* Loading States
* Error Handling
* Toast Notifications
* Modal-Based User Experience

---

## 🛠 Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Server Components
* Next.js Route Handlers

### Database

* MongoDB
* Prisma ORM

### Authentication

* NextAuth

### State Management

* Zustand

### Image Uploads

* Cloudinary

### Additional Libraries

* React Hook Form
* React Date Range
* React Hot Toast
* Axios
* React Icons
* World Countries Data

---

## 📂 Project Structure

```bash
app/
├── actions/
├── api/
├── components/
├── hooks/
├── listings/
├── trips/
├── favorites/
├── reservations/
├── properties/
└── page.tsx

prisma/
├── schema.prisma
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
DATABASE_URL=

NEXTAUTH_SECRET=
NEXTAUTH_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_ID=
GITHUB_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/Amit81082/Rentopia.git
```

### Move Into Project

```bash
cd Rentopia
```

### Install Dependencies

```bash
npm install
```

### Setup Prisma

```bash
npx prisma generate
```

### Run Development Server

```bash
npm run dev
```

---

## 🗄 Database Commands

```bash
npx prisma generate
```

```bash
npx prisma db push
```

```bash
npx prisma studio
```

---

## 📸 Core Pages

### Guest

* Home
* Listing Details
* Login
* Register

### User

* Favorites
* Trips
* Reservations

### Host

* Create Listing
* Properties
* Reservation Management

---

## 🔒 Authentication Flow

```text
Register/Login
        ↓
NextAuth
        ↓
Session Created
        ↓
Protected Pages
        ↓
Trips
Favorites
Reservations
Properties
```

---

## 🎯 Future Improvements

* Property Reviews
* Ratings System
* Host Dashboard Analytics
* Booking Notifications
* Property Editing
* Stripe Payments
* Messaging System

---

## 👨‍💻 Author

Amit Maurya

GitHub:
https://github.com/Amit81082

LinkedIn:
https://www.linkedin.com/in/amit-maurya-dev

Portfolio:
https://portfolio-maurya-dev.vercel.app

---

⭐ If you found this project helpful, consider giving it a star.
