# 🧩 Next.js Frontend CRUD

A simple **Next.js** frontend CRUD application that connects to the backend from [posts-crud](https://github.com/MrGrigoryAlexandrovich/posts-crud).  
The project demonstrates basic **Create, Read, Update, and Delete** operations using **Next.js Server Actions**, **Fetch API**, and **Tailwind CSS** for styling.

---

## 🚀 Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Server Actions** for handling form submissions
- **Fetch API** for API communication
- **Tailwind CSS** for styling
- **pnpm** as a package manager

---

## ⚙️ Setup & Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MrGrigoryAlexandrovich/posts-fe
cd posts-fe
pnpm install
```

---

## 🔧 Environment Variables

Create a `.env.local` file in the project root and add your API base URL:

```bash
NEXT_PUBLIC_API_URL= your url
```

(If you're running the backend locally, use something like `http://localhost:3000` instead.)

---

## 💻 Running the App

Start the development server:

```bash
pnpm dev
```

Then open your browser and navigate to:

👉 [http://localhost:3000](http://localhost:3000)

---

## 🧠 Project Overview

This frontend communicates with the backend from  
➡️ [posts-crud](https://github.com/MrGrigoryAlexandrovich/posts-crud)

### Features:

- Display list of posts (Read)
- Create a new post (Create)
- Edit an existing post (Update)
- Delete post (Delete)
- Server Actions for form handling
- Clean and minimal UI with Tailwind CSS

---

## 📁 Folder Structure

```
.
├── app/
│   ├── page.tsx           # Posts list
│   ├── create/            # Form for creating new post
│   ├── edit/[id]/         # Form for editing existing post
│   └── components/        # Reusable components (forms, cards, etc.)
├── styles/                # Tailwind configuration
├── types/                 # TypeScript types
└── .env.local             # Environment variables
```

---

## 🧩 Backend

This project uses the backend from  
**[posts-crud](https://github.com/MrGrigoryAlexandrovich/posts-crud)**  
which provides REST API routes for managing posts.

---

## 🧑‍💻 Author

**Ahmed Cvrčak**  
[🌐 cadev.eu](https://cadev.eu)  
[💼 LinkedIn](https://linkedin.com/in/ca-dev)  
[🐙 GitHub](https://github.com/MrGrigoryAlexandrovich)

---

## 📝 License

MIT License © 2025 [CA DEV](https://cadev.eu)
