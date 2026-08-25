
# 🚀 JobHub — Full-Stack Job Portal

JobHub is a modern full-stack job portal that connects **job seekers and employers** on a single platform.

Users can create profiles, search and apply for jobs, while recruiters can create job listings and manage applications through a dedicated dashboard.

## 🌐 Live Demo

🔗 **Live Website:** Comming soon

🔗 **Backend API:** Comming Soon

---

## ✨ Features

### 👨‍💻 For Job Seekers

* Create and manage a professional profile
* Search and browse available jobs
* Filter jobs based on relevant criteria
* View detailed job information
* Apply for jobs
* Track submitted applications
* Manage profile information

### 🏢 For Recruiters

* Create recruiter/company profile
* Post new job opportunities
* Edit and delete job listings
* Manage posted jobs
* View candidate applications
* Review applicant information
* Manage application status

### 🔐 Authentication & Security

* User registration and login
* Secure authentication
* Protected routes
* Role-based access control
* Secure API endpoints
* Input validation
* Error handling

### 📊 Dashboard

* Job seeker dashboard
* Recruiter dashboard
* Application tracking
* Job management
* Profile management

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript / TypeScript
* Tailwind CSS
* React Router
* Axios
* Context API / Redux

### Backend

* Node.js
* Express.js
* REST API
* JWT Authentication
* Middleware-based architecture

### Database

* MongoDB
* Mongoose

### Tools & Deployment

* Git & GitHub
* Vercel
* Render / Railway / Other Backend Hosting
* Postman

---

## 🏗️ Project Architecture

```text
JobHub/
│
├── client/                 # Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   └── utils/
│   └── package.json
│
├── server/                 # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   └── server.js
│
├── README.md
└── package.json
```

---

## 🔄 Application Flow

```text
Job Seeker
    │
    ├── Register / Login
    │
    ├── Create Profile
    │
    ├── Search Jobs
    │
    ├── View Job
    │
    └── Apply
          │
          ▼
       Backend API
          │
          ▼
       MongoDB


Recruiter
    │
    ├── Register / Login
    │
    ├── Create Company Profile
    │
    ├── Post Job
    │
    └── Manage Applications
```

---

## 🔑 API Overview

### Authentication

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
```

### Jobs

```text
GET    /api/jobs
GET    /api/jobs/:id
POST   /api/jobs
PUT    /api/jobs/:id
DELETE /api/jobs/:id
```

### Applications

```text
POST   /api/applications
GET    /api/applications
GET    /api/applications/:id
PUT    /api/applications/:id
```

> Replace these endpoints with your actual API routes.

---

## ⚙️ Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=your_frontend_url
```

Never commit your `.env` file to GitHub.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/jobhub.git

cd jobhub
```

### 2. Install dependencies

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd ../server
npm install
```

### 3. Configure environment variables

Create the required `.env` file and add your configuration.

### 4. Start the backend

```bash
npm run dev
```

### 5. Start the frontend

```bash
cd client
npm run dev
```

The application will now be available locally.

---

## 📸 Screenshots

### Home Page

![JobHub Home Page](./screenshots/home.png)

### Jobs Page

![JobHub Jobs Page](./screenshots/jobs.png)

### Job Details

![JobHub Job Details](./screenshots/job-details.png)

### Dashboard

![JobHub Dashboard](./screenshots/dashboard.png)

> Add your actual screenshots inside the `screenshots` folder.

---

## 🧠 What I Learned

Building JobHub helped me strengthen my understanding of:

* Full-stack application architecture
* REST API development
* Authentication and authorization
* MongoDB database design
* React state management
* Protected routes
* Role-based access control
* Frontend-backend integration
* API error handling
* Deployment of full-stack applications
* Git and GitHub workflow

---

## 🔮 Future Improvements

* Real-time notifications
* Resume upload and parsing
* Advanced job recommendations
* Email notifications
* Admin dashboard
* Saved jobs
* Advanced search and filtering
* Application analytics
* AI-powered job matching

---

## 👨‍💻 Author

**Bhagat Bhutale**

Full-Stack / MERN Developer

* GitHub: https://github.com/bhagatbhutale
* LinkedIn: https://www.linkedin.com/in/bhagat-bhutale
* Portfolio: https://bhagatbhutale.vercel.app/

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.
