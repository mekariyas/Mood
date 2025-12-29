import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from "./pages/Index.tsx"
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Product from "./pages/Product.tsx"
import Terms from "./pages/Terms.tsx"


const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      Component: Index,
      children:[
        {
          index : true,
          Component: Home
        },
        {
          path: "about",
          Component: About
        },
        {
          path: "products",
          Component: Product
        },
        {
          path: "Terms",
          Component: Terms
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App