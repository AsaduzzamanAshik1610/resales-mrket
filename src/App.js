import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Detailes from './Components/Detailes/Detailes';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DashboardLayout from './Components/DashboardLayout/DashboardLayout';
import MyProduct from './Components/Header/MyProduct/MyProduct';
import NotepageFound from './Components/NotepageFound/NotepageFound';
import OthersPage from './Components/OthersPage/OthersPage';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
         {
          path:'/',
          element:<Home></Home>
         },
         {
          path:'blog',
          element:<Blog></Blog>
         },
         {
          path:'/login',
          element:<Login></Login>
         },
         {
          path:'/register',
          element:<Register></Register>
         },
         {
          path:'/products/:id',
          element:<PrivateRoute><Detailes></Detailes></PrivateRoute>,
          
         },
         {
          path:'/page',
          element:<OthersPage></OthersPage>
         }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:'/dashboard',
          element:<MyProduct></MyProduct>
        }
      ]
    },
    {
      path:'*',
      element:<NotepageFound></NotepageFound>
    }
  ])

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
