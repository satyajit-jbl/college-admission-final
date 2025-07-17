# 🎓 College Booking Web Application

A full-stack MERN web app where users can explore, apply to, and review colleges — all within an intuitive, responsive UI. Features include admission forms, profile management, authentication, reviews, and more.

---

## 📸 Live Preview & Demo

> 🌐 [Visit Live Website](https://your-live-link.vercel.app)  
> 🖥️ [Repo](https://github.com/satyajit-jbl/college-admission-final)  

---

## 🧰 Tech Stack

| 🔹 Frontend       | 🔸 Backend       | 🎨 Styling             | 🚀 Deployment       |
|------------------|------------------|------------------------|---------------------|
| Next.js (App Dir) | Node.js + Express | Tailwind CSS + DaisyUI | Vercel (Frontend)   |
| React Hook Form  | MongoDB Atlas     | Custom Components      | Firebase Auth       |
| Axios / React Query | REST API       | Responsive Layout      | Netlify (Optional)  |

---

## ✨ Core Features

- 🔍 College search & browsing
- 🏫 Detailed college pages with ratings, events, and research papers
- 📝 Admission form with validation
- ⭐ Review & rating system
- 🔐 Authentication (Email/Password + Google)
- 🔁 Password reset functionality
- 👤 User profile editing
- ❌ Custom 404 error page
- 📱 Mobile responsive design

---

## 🧾 Pages Overview

| Page             | Features                                                                 |
|------------------|--------------------------------------------------------------------------|
| **Home**         | Search bar, featured colleges, gallery, research, reviews                |
| **Colleges**     | List of colleges with rating, admission date, research count             |
| **Admission**    | Form with fields: Name, Subject, DOB, Email, Phone, Image, etc.          |
| **My College**   | View submitted admission info + post review                              |
| **Profile**      | View/edit user info: Name, Email, University, Address                    |
| **Authentication** | Register/Login with Email & Google, reset password, protected routes     |
| **404 Page**     | Fun “Page Not Found” with back-to-home button                            |

---

## 🗂️ Project Structure

```bash
├── app/
│   ├── page.js            # Home page
│   ├── colleges/          # Colleges listing
│   ├── admission/         # Admission form
│   ├── my-college/        # Admission summary
│   ├── profile/           # User profile page
│   └── api/               # Backend API handlers
├── components/            # Reusable UI components
├── lib/                   # Utilities (auth, db)
├── public/assets/         # Static images & media
├── styles/                # Global styles
└── README.md
