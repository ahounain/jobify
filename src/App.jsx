import { RouterProvider, createBrowserRouter } from
'react-router-dom';

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashBoardLayout,
  Error,
  Stats
} from "./pages";
const router = createBrowserRouter([
  {
    // forward slash means home page
    
    path: "/",
    element: <HomeLayout />,
    // lets us choose a page as our error page
    errorElement: <Error />,
    // 7-24-23
    // the children all get <HomeLayout /> passed into them,
    // as of now, all it does is add in a navbar 
    children: [
      {
        // 7-24-23
        // the index being set to true indicates what page
        // we want to display on the home page
        
        index:true,
        // in this case we want to show Landing
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <DashBoardLayout />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: 'dashboard/stats',
        element: <Stats />,
      }
    ],
  },
 
]);

const App = () => {
  return <RouterProvider router = {router} />;
};
export default App