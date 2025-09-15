
# 📄 SaaS Contracts Dashboard

A React + Tailwind single-page application (SPA) that simulates a SaaS contracts management dashboard.  
Users can log in, upload files, view a contracts dashboard, and explore contract insights including clauses, AI risks, and evidence.

---

## 🚀 Demo
👉 [Live Demo on Vercel](https://sass-dashboard-pq6rxabbk-shrishtimishra09s-projects.vercel.app)

---

## ⚙️ Setup Instructions

1. **Clone the repo**
   - `git clone https://github.com/<your-username>/contracts-dashboard.git`
   - `cd contracts-dashboard`

2. **Install dependencies**
   - `npm install`

3. **Run locally**
   - `npm start`
   - App runs at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   - `npm run build`

---

## ✨ Features
- 🔐 **Authentication** → Mock login (username: any, password: `test123`)
- 📂 **File Upload** → Simulated with progress + status updates
- 📊 **Contracts Dashboard** → Table with search, filters, and pagination (10 rows/page)
- 📝 **Contract Insights** → Clauses, AI risk analysis, evidence section
- 📱 **Responsive UI** → Mobile-first design with Tailwind

---

## 🛠 Tech Stack
- ⚛️ **React** (functional components + hooks)
- 🎨 **Tailwind CSS** → utility-first responsive UI
- 🧭 **React Router** → client-side navigation
- 📦 **Context API** → lightweight state management
- 📑 **Mock API** (contracts.json) → simulates backend data
- ▲ **Vercel** → hosting & deployment
- 🐙 **GitHub** → version control & repo

---

## 📌 Assumptions Made
- **Auth**: Mocked (username: any, password: `test123`). JWT stored in localStorage.
- **API**: Using `public/contracts.json` to mock `/contracts` and `/contracts/:id`.
- **File Upload**: Simulated with timeout + status messages.
- **Search & Filters**: Client-side filtering.
- **Pagination**: Fixed at 10 rows per page.
- **Design**: Mobile-first responsive with Tailwind.

