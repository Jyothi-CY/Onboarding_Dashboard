# 🚀 Onboarding & Dashboard Interface

A clean, responsive onboarding and dashboard web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project demonstrates a professional multi-step onboarding flow, dynamic dashboard interface, and persistent user experience through localStorage—all wrapped in a modern UI.

🌐 **Live Demo:** [magical-panda-fc9e76.netlify.app](https://magical-panda-fc9e76.netlify.app)  
📁 **GitHub Repo:** [Jyothi-CY/Onboarding_Dashboard](https://github.com/Jyothi-CY/Onboarding_Dashboard)

---

## 📝 Task Overview

**Frontend Assignment:** Build a fully functional onboarding flow and dashboard using modern web technologies.

### ✅ What Was Built:

#### 1️⃣ Multi-step Onboarding Wizard
- **Step 1:** Personal Info – Name, Email  
- **Step 2:** Business Info – Company Name, Industry, Size  
- **Step 3:** Preferences – Theme, Default Layout  
- **Core Features:**
  - Progress bar with animation
  - “Next”, “Back”, and “Submit” navigation
  - Input validation for all required fields
  - Smooth transitions and error handling

#### 2️⃣ Dashboard Page
- Auto-redirects after successful onboarding
- Displays user info submitted during onboarding
- Three informative cards:
  - 🧑‍🤝‍🧑 Team Members Count
  - 📂 Active Projects
  - 🔔 Notifications
- *(Bonus)*: Includes a chart showing weekly activity via **Recharts**

#### 3️⃣ Bonus Touches
- Persistent user data using `localStorage`
- Fully responsive layout for mobile & desktop
- Smooth micro-interactions & UI transitions

---

## 🛠️ Tech Stack

- **React 18** (with Vite)
- **TypeScript** for type safety
- **Tailwind CSS** for responsive styling
- **React Context API** for global state management
- **Recharts** for optional data visualization
- **LocalStorage** for persistence

---

## 📁 Folder Structure

project-root/
├── src/
│   ├── components/
│   │   ├── onboarding/
│   │   │   ├── PersonalInfoStep.tsx
│   │   │   ├── BusinessInfoStep.tsx
│   │   │   └── PreferencesStep.tsx
│   │   ├── Dashboard.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── OnboardingWizard.tsx
│   │   └── ProgressBar.tsx
│   ├── context/
│   │   └── UserContext.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── index.html


---

## ⚙️ Getting Started

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/Jyothi-CY/Onboarding_Dashboard.git
cd Onboarding_Dashboard

# Install dependencies
npm install

# Run the app
npm run dev

The app will start on http://localhost:5173 or the next available port.

📦 Production Build
To build the app for production:
npm run build
This will generate the optimized files in the dist/ folder.

🧪 Demo Flow for Presentation
Start with the Onboarding Wizard — fill in the steps or submit empty to see validation.
Watch the animated progress bar and smooth transitions.
After submission, view the dashboard auto-redirect.
Highlight user info, cards, and (optionally) the chart.
Refresh the browser to verify data persistence with localStorage.
Resize the window to showcase mobile responsiveness.

🔗 Deployment
This project is deployed on Netlify.

🌍 Live Site: https://magical-panda-fc9e76.netlify.app
🔐 Claim Netlify Ownership: Claim Deployment
