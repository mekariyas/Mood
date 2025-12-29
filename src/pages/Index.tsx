import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.tsx"
import Footer from "../components/Footer.tsx"
const Index = () => {
  return (
    <>
      <Navbar/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </>
  )
}

export default Index