// import { createBrowserRouter } from 'react-router-dom';
// import BlankLayout from '../components/Layouts/BlankLayout';
// import DefaultLayout from '../components/Layouts/DefaultLayout';
// import { routes } from './routes';

// const finalRoutes = routes.map((route) => {
//     return {
//         ...route,
//         element: route.layout === 'blank' ? <BlankLayout>{route.element}</BlankLayout> : <DefaultLayout>{route.element}</DefaultLayout>,
//     };
// });

// const router = createBrowserRouter(finalRoutes);

// export default router;

import { createBrowserRouter } from "react-router-dom";
import BlankLayout from "../components/Layouts/BlankLayout";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import { routes } from "./routes";

const finalRoutes = routes.map((route) => {
  const Layout = route.layout === "blank" ? BlankLayout : DefaultLayout;

  return {
    ...route,
    element: <Layout>{route.element}</Layout>,
    children: route.children?.map((child) => ({
      ...child,
      element: child.element,
    })),
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
