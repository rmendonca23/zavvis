# Corporate Finance Observability Dashboard

A modern, responsive corporate finance observability dashboard built with React, TypeScript, and CSS. The application provides a centralized interface for monitoring financial KPIs, transactions, cash flow, revenue, expenses, alerts, and operational metrics.

## Design Decisions
 - Lucide-react libary provides modern interactive look and feel
 - Dashboards are integarted in the dashboard page which provides a statistic data for the users to make real financial decisions. MockData has been used in this project for the design overview.
 - Search bar on the top menu provides an easy access to the users to search for a quick navigation
 - Sidebar menu is placed for design purpose and can be customized accordingly
 - Each of the sidebar menu clicks routes to details page, but the content is not yet specified to each routes




## 🚀 Technology Stack

* **Frontend:** React
* **Language:** TypeScript
* **Build Tool:** Vite
* **Styling:** CSS3
* **Package Manager:** npm
* **Architecture:** Component-based frontend
* **Data:** Mock financial data (can be integrated with REST APIs)

## 📁 Project Structure

```text
corporate-finance-observability/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── DashboardHeader.tsx
│   │   │   └── DashboardLayout.tsx
│   │   │   └── DashboardLayout.css
│   │   │   └── DashboardMenuItem.tsx
│   │   │   └── DashboardSidebar.tsx
│   │   │   └── menuConfigt.tsx
│   │   │  
│   │   └── dashboard.css
│   │
│   ├── data/
│   │   └── mockData.ts
│   ├── types/
│   │   └── finance.ts
│   ├── utils/
│   │   └── formatter.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📋 Prerequisites

Ensure the following software is installed:

* Node.js (LTS version recommended)
* npm
* Visual Studio Code (recommended)

Verify installation:

```bash
node -v
npm -v
```

## ⚙️ Installation

### Step 1: Clone the repository
https://github.com/rmendonca23/zavvis.git
### Step 2: Navigate to project directory
### Step 3: Install dependencies

```bash
npm install
```

## ▶️ Running the Application

Start the local development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

Open this URL in your browser.

The Vite development server supports Hot Module Replacement (HMR), allowing changes to appear automatically during development.

