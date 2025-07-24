
# 🤖 AlitechGrid Chatbot Integration

This repository contains the complete frontend setup for the **AI-powered Chatbot** integrated into the [alitechgrid.com](https://alitechgrid.com) website.

## 🔧 Files Included

- `index.html` – Main webpage with chatbot toggle button and UI
- `style.css` – Chatbot and page styling
- `chatbot.js` – Handles communication with backend AI server
- `chatbot-icon.png` – Chatbot floating icon

## 🚀 Deployment Instructions

1. **Frontend Hosting**: Upload these files to your GitHub Pages repo (e.g., `zali39/alitechgrid.github.io`).
2. **Backend API**: Host the Flask backend using [Render](https://render.com) or [PythonAnywhere](https://www.pythonanywhere.com).
3. **Edit `chatbot.js`**: Update the `fetch()` URL to your deployed backend (e.g., `https://your-backend.onrender.com/chat`).

## 🔐 Security

- The API key is stored securely in your backend `.env` file.
- Never include your OpenAI key in frontend or public repositories.

## 🧠 Features

- GPT-4 powered AI chatbot
- Predefined system prompt for focused educational help
- Works on desktop and mobile
- Free to host using GitHub Pages + Render (or PythonAnywhere)

## 📩 Contact

For support or improvements, reach out to: **john@alitechgrid.com**

---

Built with ❤️ for educational AI integration.
