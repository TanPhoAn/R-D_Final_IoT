import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HiveList from "./pages/HiveList";
import HiveDetail from "./components/HiveDetail";
import Sidebar from "./components/sideBar";
import DashBoard from "./pages/DashBoard";
import { SearchHeader } from "./components/searchHeader";
import Documentation from "./pages/Documentation";
import Support from "./pages/Support";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// ✅ Auth check wrapper
function RequireAuth({ children }) {
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// ✅ Main Layout
function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen">
        <SearchHeader />
        <div className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/hivelist" element={<HiveList />} />
            <Route path="/hives/:hiveId" element={<HiveDetail />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

// ✅ App Entry
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Layout and Routes */}
        <Route
          path="/*"
          element={
            <RequireAuth>
              <MainLayout />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
