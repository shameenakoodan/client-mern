import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  HomeLayout,
  Landing,
  Register,Login,DashboardLayout,Error
} from './pages';
 const router =createBrowserRouter ([
  {
  path:'/',
  element:<HomeLayout />
 },
 {
  path:'/register',
  element:<Register />
 },
 {
  path:'/login',
  element:<Login />
 },
 {
  path:'/dashboard',
  element:<DashboardLayout />
 },
 {
  path:'/error',
  element:<Error />
 },
 {
  path:'/landing',
  element:<Landing />
 },
]);
const App = () => {
    return<RouterProvider router={router} />;
}

export default App
