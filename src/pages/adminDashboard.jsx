// src/pages/AdminDashboardLayout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/user/userSlice";
import { logoutAdmin } from "../features/adminSlice/adminAuthSlice";

const AdminDashboardLayout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
        dispatch(logoutAdmin());
        navigate('/admin-login');
    }
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <NavLink to="/admin" className="block hover:text-yellow-400">📊 Dashboard</NavLink>
        <NavLink to="/admin/products" className="block hover:text-yellow-400">🛍️ Products</NavLink>
        <NavLink to="/admin/users" className="block hover:text-yellow-400">👥 Users</NavLink>
        <NavLink to="/admin/categories" className="block hover:text-yellow-400">📁 Categories</NavLink>
        <button onClick={handleLogout} className="bg-black w-20 h-10 text-white">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
