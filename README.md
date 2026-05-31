# Car Rent Management System

A full-stack Car Rent Management System containing a React/Vite frontend and a Node.js/Express/MongoDB backend.

## Project Structure
- `/frontend`: Vite React App
- `/backend`: Express REST API

---

## Local Development

### 1. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the `.env` file with your credentials:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run start
   # or with nodemon if dev script exists:
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. The frontend runs at `http://localhost:5173`. By default, it connects to the local backend at `http://localhost:5000/api`.

---

## Vercel Deployment

Deploying both frontend and backend on Vercel from this repository is simple. You will create **two separate projects** in the Vercel Dashboard.

### 1. Deploy the Backend API
1. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New** > **Project**.
2. Import this GitHub repository (`car-rent-system`).
3. For **Project Name**, enter `car-rent-system-api` (or similar).
4. For **Root Directory**, click *Edit* and select the **`backend`** folder.
5. In **Framework Preset**, leave it as *Other* (it will automatically detect Node.js using the `vercel.json` config).
6. Under **Environment Variables**, add:
   - `MONGO_URI` = `your_mongodb_connection_string`
   - `JWT_SECRET` = `your_jwt_secret`
7. Click **Deploy**.
8. Once deployed, copy your backend URL (e.g., `https://car-rent-system-api.vercel.app`).

### 2. Deploy the Frontend
1. Go back to the Vercel Dashboard, click **Add New** > **Project**.
2. Import this same GitHub repository (`car-rent-system`).
3. For **Project Name**, enter `car-rent-system`.
4. For **Root Directory**, click *Edit* and select the **`frontend`** folder.
5. In **Framework Preset**, select **Vite** (if it isn't automatically selected).
6. Under **Environment Variables**, add:
   - `VITE_API_URL` = `https://your-backend-vercel-url.vercel.app/api` (make sure it ends with `/api` and points to your deployed backend URL).
7. Click **Deploy**.
