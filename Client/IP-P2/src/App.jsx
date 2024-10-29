import { Login } from "./pages/LoginPage"
import {RouterProvider,createBrowserRouter}from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path:"/login",
      element:<Login/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App