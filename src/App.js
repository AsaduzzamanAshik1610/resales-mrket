import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';
import Detailes from './Components/Detailes/Detailes';
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
          element:<Detailes></Detailes>,
          loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
         }
      ]
    }
  ])

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
