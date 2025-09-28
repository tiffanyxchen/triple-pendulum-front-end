# 🎡 Triple Pendulum Front-End
React + TypeScript + Vite • Visualization Dashboard for Triple Pendulum Simulations

The **Triple Pendulum Front-End** is a modern web interface for running and visualizing triple-pendulum simulations. It connects directly to the `triple-pendulum-api` backend, allowing users to input initial angles, trigger simulations, and view automatically generated animation GIFs.

This front-end is designed for computational physics visualization, intuitive UI, and seamless interaction with your backend simulation pipeline.

---

## 🚀 Features

### ✔ Input Simulation Parameters  
- Visit **`http://localhost:5173/simulate`**
- Enter **initial angles** (`theta1`, `theta2`, `theta3`)
- Submit values to trigger a backend simulation

### ✔ Backend Integration  
- Sends parameters to your NestJS backend (`triple-pendulum-api`)
- Backend computes:
  - Lagrangian-based ODE solution  
  - Time-series positions  
  - GIF animations  
- Returns metadata including `gifPath` and simulation ID

### ✔ GIF Visualization  
- Automatically displays the generated animation once processing is complete  
- Uses React components, Valtio global stores, and Axios requests

---

## 🧩 Technology Stack

### Front-End
- ⚛️ React (hooks + functional components)
- 🧪 TypeScript
- ⚡ Vite
- 🎨 Styled Components / MUI
- 🧱 Valtio
- 🔌 Axios

### Back-End (Connected Service)
- 🐍 Python physics engine
- 🧠 Lagrangian mechanics simulation
- 🌀 GIF generation
- 🗃 NestJS + Prisma data layer

---

## 📂 Project Structure (Simplified)

