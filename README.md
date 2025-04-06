# COMP3133 Assignment 2 - Employee Management System

**Kei Ishikawa - 101426567**

This full-stack application allows users to sign up, log in, and manage employee data with profile pictures. The backend is powered by Node.js, GraphQL, and MongoDB Atlas, while the frontend uses Angular 17 with Apollo Client.

---

## ⚠ Note About Backend Deployment on Render
Important:
This application uses Render for backend hosting on the free tier.
Please note that the server may take up to 30–60 seconds to wake up if it has been inactive for a while.

Once active, the server will respond normally to requests.

## 🚀 Features

- ✅ Signup, Login, and Logout with JWT authentication  
- ✅ View all employees with a professional UI  
- ✅ Add, Update, View, and Delete employee information  
- ✅ Upload and update profile pictures  
- ✅ Search employees by designation or department  
- ✅ Responsive UI using Bootstrap and custom CSS  
- ✅ MongoDB Atlas cloud storage  
- ✅ GraphQL API integration  
- ✅ Fully deployed frontend and backend  

---

## 📁 Folder Structure

```
studentID_comp3133_assignment2/
├── backend/               # Node.js + GraphQL server
├── frontend/              # Angular App
└── uploads/               # Stores employee profile pictures
```

---

## 🌐 Backend Setup

### Prerequisites

- Node.js 18+  
- MongoDB Atlas URI  
- `.env` file inside `/backend` folder:

```
MONGODB_URI=your-mongodb-atlas-uri
PORT=4001
JWT_SECRET=supersecretkey123
```

### Run the backend

```bash
cd backend
npm install
npm start
```

GraphQL endpoint: `http://localhost:4001/graphql`  
Images: `http://localhost:4001/uploads/your-image.png`

---

## 🧠 GraphQL Features

- `login`, `signup`  
- `getAllEmployees`, `searchEmployeeByEid`  
- `searchEmployeeByDesignationOrDepartment`  
- `addEmployee`, `updateEmployee`, `deleteEmployee`

---

## 🧩 Frontend Setup (Angular 17)

### Prerequisites

- Angular CLI  
- Node.js 18+

### Install & Run

```bash
cd frontend
npm install
ng serve
```

Visit: `http://localhost:4200/`

### Building for Production

```bash
ng build
```

Build output: `/dist/` folder

### Generate Components

```bash
ng generate component component-name
```

---

## 🧪 Testing

- Unit tests: `ng test`  
- E2E tests: `ng e2e` *(configure manually)*

---

## 🔐 Authentication

- JWT token is stored in `localStorage` after login  
- Token is used for protected routes and logout

---

## 🖼 File Uploads

- Profile picture is uploaded during employee creation and editing  
- Stored in `/uploads/` and linked via backend GraphQL

---

## 🚀 Deployment

You can deploy using:

- **Backend**: Render / Cyclic / Railway  
- **Frontend**: Vercel / Netlify / Firebase Hosting  

No need to use Docker unless you prefer containerization.

---

## ✅ Checklist

| Feature                                      | Status |
|---------------------------------------------|--------|
| Angular UI with routing                     | ✅     |
| GraphQL backend with MongoDB Atlas          | ✅     |
| Signup/Login/Logout                         | ✅     |
| JWT Security                                | ✅     |
| CRUD Operations                             | ✅     |
| Image Upload Support                        | ✅     |
| Employee Search                             | ✅     |
| Deployed frontend/backend                   | ✅     |
| Professional UI (responsive, styled)        | ✅     |

---

## 👨‍💻 Author

**Kei Ishikawa**  
Student ID: 101426567  
COMP3133 - Full Stack Development II  
George Brown College
