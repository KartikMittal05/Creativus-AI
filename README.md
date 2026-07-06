# Creativus AI

Creativus AI is a full-stack AI-powered SaaS platform that gives users a suite of content-creation and productivity tools in one place — article and blog title generation, AI image generation, background/object removal from images, and AI-powered resume review — with authentication, a free/premium usage model, and a community feed for shared creations.

**Live demo:** [creativus-ai-server.vercel.app](https://creativus-ai-server.vercel.app)

## Features

- ✍️ **AI Article Generator** — generate long-form articles from a prompt with adjustable length.
- 📰 **Blog Title Generator** — generate catchy, on-topic blog titles.
- 🎨 **AI Image Generation** — create images from text prompts.
- 🩹 **Background Removal** — remove the background from an uploaded image.
- 🧽 **Object Removal** — remove unwanted objects from an uploaded image.
- 📄 **Resume Review** — upload a resume (PDF) and get AI-generated feedback.
- 👥 **Community Feed** — browse creations shared by other users.
- 🔐 **Authentication & Plans** — Clerk-based auth with a free-usage limit and a premium plan tier.
- 📊 **Dashboard** — view your past creations and usage.

## Tech Stack

**Frontend (`client/`)**
- React 19 + Vite
- Tailwind CSS 4
- React Router
- Clerk (`@clerk/clerk-react`) for auth
- Axios, React Hot Toast, React Markdown, Lucide Icons

**Backend (`server/`)**
- Node.js + Express 5
- Clerk (`@clerk/express`) for auth middleware
- OpenAI SDK (configured against the Gemini API — `gemini-2.0-flash`) for text generation
- Cloudinary for image storage/transformations
- Multer for file uploads
- pdf-parse for resume text extraction
- Neon (serverless Postgres) for data storage

## Project Structure

```
Creativus-AI/
├── client/                        # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── WriteArticle.jsx
│   │   │   ├── BlogTitles.jsx
│   │   │   ├── GenerateImages.jsx
│   │   │   ├── RemoveBackground.jsx
│   │   │   ├── RemoveObject.jsx
│   │   │   ├── ReviewResume.jsx
│   │   │   └── Community.jsx
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── server/                        # Express backend
    ├── configs/                   # Cloudinary, DB, Multer config
    ├── controllers/
    │   ├── aiController.js        # Article/title/image/resume logic
    │   └── userController.js
    ├── middlewares/
    │   └── auth.js                # Clerk auth + plan/usage checks
    ├── routes/
    │   ├── aiRoutes.js
    │   └── userRoutes.js
    ├── server.js
    └── package.json
```

## Prerequisites

- Node.js 18+ and npm
- A [Clerk](https://clerk.com/) account (for authentication)
- A [Cloudinary](https://cloudinary.com/) account (for image storage)
- A Gemini API key ([Google AI Studio](https://aistudio.google.com/)), used via the OpenAI-compatible endpoint
- A [Neon](https://neon.tech/) Postgres database

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/KartikMittal05/Creativus-AI.git
cd Creativus-AI
```

### 2. Backend setup

```bash
cd server
npm install
```

Create a `.env` file in `server/` with:

```
PORT=3000
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_neon_postgres_connection_string
```

Run the server:

```bash
npm run server   # starts with nodemon
# or
npm start
```

The API will be live at **http://localhost:3000**.

### 3. Frontend setup

In a new terminal:

```bash
cd client
npm install
```

Create a `.env` file in `client/` with:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
```

Run the dev server:

```bash
npm run dev
```

The app will be live at **http://localhost:5173** (or the URL shown in your terminal).

## API Overview

All AI routes require authentication (Clerk) and are mounted under `/api/ai`:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/generate-article` | Generate an article from a prompt |
| POST | `/api/ai/generate-blog-title` | Generate a blog title from a prompt |
| POST | `/api/ai/generate-image` | Generate an image from a prompt |
| POST | `/api/ai/remove-image-background` | Remove background from an uploaded image |
| POST | `/api/ai/remove-image-object` | Remove an object from an uploaded image |
| POST | `/api/ai/resume-review` | Get AI feedback on an uploaded resume (PDF) |

User-related routes are mounted under `/api/user`.

## Usage Limits

Free-tier users get a limited number of generations (tracked via Clerk user metadata); premium-plan users get unlimited usage.

## Demo Video

Check out the project walkthrough here:
🔗 [LinkedIn post with demo video](https://www.linkedin.com/posts/kartik-mittal-b0b6a0250_ai-saas-fullstackdevelopment-ugcPost-7366250259817103361-eY3l)

## Deployment

The project is configured for [Vercel](https://vercel.com/) deployment (`vercel.json` present in both `client/` and `server/`). The live version is hosted at [creativus-ai-server.vercel.app](https://creativus-ai-server.vercel.app).

## License

No license file is currently included in this repository. Add one (e.g. MIT) if you intend for others to reuse this code.
