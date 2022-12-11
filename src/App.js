import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import { Toaster } from 'react-hot-toast';
import BlogLayout from './Layout/BlogLayout';
import Blog from './Pages/Blog/Blog';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>

        },

      ]
    },
    {
      path:'/blog',
      element:<BlogLayout></BlogLayout>,
      children:[
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
