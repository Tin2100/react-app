import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Authors from './pages/Authors.jsx';
import CreatePost from './pages/CreatePost.jsx';
import CatergoryPosts from './pages/CategoryPosts.jsx';
import AuthorPosts from './pages/AuthorPosts.jsx';
import Dashboard from './pages/Dashboard.jsx';
import EditPost from './pages/EditPost.jsx';
import Logout from './pages/Logout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
        {index: true, element: <Home />},
        {path: 'posts/:id', element: <PostDetail />},
        {path: 'register', element: <Register />},
        {path: 'login', element: <Login />},
        {path: 'profile/:id', element: <UserProfile />},
        {path: 'authors', element: <Authors />},
        {path: 'create', element: <CreatePost />},
        {path: 'posts/categories/:category', element: <CatergoryPosts />},
        {path: 'posts/users/:id', element: <AuthorPosts />},
        {path: 'mypost/:id', element: <Dashboard />},
        {path: 'posts/:id/edit', element: <EditPost />},
        {path: 'logout', element: <Logout />},
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);