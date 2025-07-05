import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Register from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import  SignUp from '../pages/SignUp';
import MyProject from '../pages/MyProject';
const MainDashboard = lazy(() => import('../pages/MainDashboard'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const EditProfile = lazy(() => import('../pages/EditProfile'));
const MyPortfolio = lazy(() => import('../pages/MyPortfolio'));
const MySales = lazy(() => import('../pages/MySales'));
const Transactions = lazy(() => import('../pages/Transactions'));
const MyBids = lazy(() => import('../pages/MyBids'));
const Workshops = lazy(() => import('../pages/Workshops'));
const Commissions = lazy(() => import('../pages/CommissionedServices'));
const Messages = lazy(() => import('../pages/Messages'));
const Settings = lazy(() => import('../pages/Settings'));

const routes = [
    // dashboard
    {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        ),
        layout: "blank",
      },
       {
        path: "/signup",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignUp />
          </Suspense>
        ),
        layout: "blank",
      },
      {
        path: "/dashboard",
        element: ( 
          <Dashboard /> 
        ),
        children: [
          { path: "", element: <Navigate to="maindashboard" replace /> }, // Redirect to default
          { path: "maindashboard", element: <MainDashboard /> },
          { path: "editProfile", element: <EditProfile /> },
          { path: "portfolio", element: <MyPortfolio /> },
          { path: "project", element: <MyProject /> },
          { path: "sales", element: <MySales /> },
          { path: "transactions", element: <Transactions /> },
          { path: "bids", element: <MyBids /> },
          { path: "workshops", element: <Workshops /> },
          { path: "commissions", element: <Commissions /> },
          { path: "messages", element: <Messages /> },
          { path: "settings", element: <Settings /> },
        //   { path: "communicationManagement", element: <CommunicationManagement /> },
        //   { path: "auditLog", element: <SecurityAuditLogs /> },
        ],
      },
    // {
    //     path: '/',
    //     element: <Dashboard />,
    //     layout: 'default',
    // },
    // {
    //     path: '/editProfile',
    //     element: <EditProfile />,
    //     layout: 'default',
    // },
    // {
    //     path: '/portfolio',
    //     element: <MyPortfolio />,
    //     layout: 'default',
    // },
    // {
    //     path: '/sales',
    //     element: <MySales />,
    //     layout: 'default',
    // },
    // {
    //     path: '/transactions',
    //     element: <Transactions />,
    //     layout: 'default',
    // },
    // {
    //     path: '/bids',
    //     element: <MyBids />,
    //     layout: 'default',
    // },
    // {
    //     path: '/workshops',
    //     element: <Workshops />,
    //     layout: 'default',
    // },
    // {
    //     path: '/commissions',
    //     element: <Commissions />,
    //     layout: 'default',
    // },
    // {
    //     path: '/messages',
    //     element: <Messages />,
    //     layout: 'default',
    // },
    // {
    //     path: '/settings',
    //     element: <Settings />,
    //     layout: 'default',
    // },



];

export { routes };
