# 🤖 AI YouTube Scriptwriter

[![React Version](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Google Gemini API](https://img.shields.io/badge/Google-Gemini_API-blueviolet?logo=google)](https://ai.google.dev/)
[![Status](https://img.shields.io/badge/Status-Production_Ready-success)]()

> **Streamline your video creation workflow.**  
> Transform ideas into structured, time-stamped video scripts in seconds using advanced AI.

---

## 🚀 LIVE DEMO
Experience the power of AI Scriptwriting instantly:  
👉 **[https://doodax.com](https://doodax.com/tools/ai-youtube-scriptwriter/index.html)**

---

## 📖 Overview

The **AI YouTube Scriptwriter** is a modern, high-performance web application designed for content creators, marketers, and educators. It eliminates the daunting "blank page" syndrome by taking a simple video title and outline, then leveraging powerful Large Language Models (LLMs) to generate a professional, split-column script.

### Key Features
*   **Dual-Column Script Layout:** Automatically separates **Narration** from **B-Roll/Visuals**, mimicking professional screenplay standards.
*   **Smart Timing:** Calculates estimated timestamps to ensure your script fits your specific target duration (e.g., 5 mins, 10 mins).
*   **Hybrid AI Support:**
    *   **Cloud Power:** Seamless integration with Google's **Gemini 2.5 Flash** for blazing-fast, high-quality results.
    *   **Local Privacy:** Full support for **Ollama**, allowing you to run models like Llama 3 locally on your machine for 100% data privacy.
*   **Immersive UX:** Features a stunning, animated Nebula/Galaxy background with a "Glassmorphism" UI design for a premium user experience.
*   **SEO Optimized:** Built with JSON-LD Schema, meta tags, and semantic HTML to rank high on search engines.

---

## 📂 Project Structure

```
/
├── public/              # Static assets (SEO, Robots, Sitemap)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── components/          # Reusable UI Components
│   ├── Footer.tsx       # Contains Modal Logic for Legal pages
│   ├── Header.tsx
│   ├── ScriptInputForm.tsx
│   ├── ScriptOutputDisplay.tsx
│   ├── SeoContent.tsx   # SEO Blog Post Component
│   └── ...
├── services/
│   └── geminiService.ts # AI Interface (Gemini & Ollama)
├── hooks/               # Custom React Hooks
├── types/               # TypeScript Definitions
├── App.tsx              # Main Application Layout
├── index.html           # Entry point + Global Galaxy CSS
└── metadata.json        # Project capabilities definition
```

---

## 🛠️ Tech Stack

*   **Frontend:** React 19, TypeScript
*   **Styling:** Tailwind CSS (Glassmorphism, Grid Layouts, Animations)
*   **AI Integration:** `@google/genai` SDK
*   **Build Tool:** Vite (via dynamic import map)

---

## 👨‍💻 Developed By

**Hsini Mohamed**  
Full Stack Developer & AI Specialist  
*   GitHub: [hsinidev](https://github.com/hsinidev)
*   Website: [doodax.com](https://doodax.com)

---

## 📄 License

This project is open-source and available under the MIT License.
