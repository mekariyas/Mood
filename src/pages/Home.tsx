import { useState,useEffect } from "react"
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useNavigate } from "react-router-dom"



//image import
import HeroImage from "../assets/hero/hero.webp"
import Pricing from "../assets/our-values/price-tag.webp"
import Quality from "../assets/our-values/quality.webp"
import Comfort from "../assets/our-values/comfort.webp"
import Trendy from "../assets/our-values/trendy.webp"

const Home = () => {
  const [ shouldTriggerCount, setShouldTriggerCount] = useState<boolean>(false)
  const navigate = useNavigate()

  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  const customersCount = useMotionValue(0)
  const customersRounded = useTransform(()=>Math.round(customersCount.get()))
  
  const locationsCount  = useMotionValue(0)
  const locationsRounded = useTransform(()=>Math.round(locationsCount.get()))   


  const handleCountTrigger = ()=>{
    if(window.scrollY >= 400 && window.scrollY <= 550){
      setShouldTriggerCount(true)
    }
  }

  //useEffect for triggerCount
  useEffect(()=>{
      document.addEventListener('scroll', handleCountTrigger)
      return ()=> document.removeEventListener("scroll", handleCountTrigger)
    },[])
  


  useEffect(() => {
      if(shouldTriggerCount){
        const controls = animate(count, 1000, { duration: 5 })
        return () => controls.stop()
      }
    }, [shouldTriggerCount])

  useEffect(() => {
      if(shouldTriggerCount){
        const controls = animate(customersCount, 200, { duration: 5 })
        return () => controls.stop()
      }
    }, [shouldTriggerCount])
  
  useEffect(() => {
      if(shouldTriggerCount){
        const controls = animate(locationsCount, 50, { duration: 5 })
        return () => controls.stop()
      }
    }, [shouldTriggerCount])  
  return (
    <>
      {/** Hero  */}
      <section className="w-full md:h-screen bg-blue-950 flex md:flex-row flex-col justify-around md:justify-between items-center md:pl-2  md:pr-2 bg-none">
        <section className="w-[80%] md:w-[50%] h-[80vh] md:h-[75%]  flex flex-col items-center order-2 md:order-1 gap-10 overflow-hidden">
          <motion.h1 initial={{y:-200, opacity: 0}} animate={{y : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.4 }} className="w-full text-center font-extrabold text-white text-xl md:text-3xl mt-6">Mood- Everyday denim, done right</motion.h1>
          <motion.p initial={{x:-200, opacity: 0}} animate={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:3, delay: 0.8 }} className="w-[80%] text-wrap text-center font-bold text-lg md:text-xl text-white">Premium jeans designed for comfort, durability, and everyday wear.</motion.p>
          <section className="w-full flex justify-around items-center mt-18">
            <motion.button initial={{scale: 0 , opacity: 0}} animate={{scale : 1, opacity: 1}} transition={{ease: "easeInOut", duration:3, delay: 0.9 }} className="border-white border-2 w-38 h-14 rounded-md md:text-lg font-medium text-blue-950 bg-white cursor-pointer transition-all delay-150 duration-300 ease-in-out hover:drop-shadow-white hover:-translate-y-1 hover:drop-shadow-xl" title="view product" onClick={()=>navigate("/products")}>View Products</motion.button>
            
          </section>
        </section>
        <section className="w-[85%] md:w-[45%] h-[70vh] mt-4 mb-6 md:mt-0 md:mb-0 md:h-[75%] order-1 md:order-2 overflow-hidden">
          <motion.img src={HeroImage} alt="Hero-image" loading="lazy" initial={{x:200, opacity: 0}} animate={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:3, delay: 0.8 }} className="w-full h-full object-cover rounded-md drop-shadow-2xl drop-shadow-slate-900"/>
        </section>
      </section>


      {/** Testimonial */}
      <section className="w-full h-[45vh] bg-blue-800 flex justify-around md:pl-20 items-center text-white text-xl md:text-2xl font-medium">
        <section className="w-[25%] flex flex-col">
          <section className="w-full flex">
            <motion.p className="mr-1 ml-14">{locationsRounded}</motion.p> +
          </section>
          <p className="ml-6">Locations</p>
        </section>
        <section className="w-[25%] flex flex-col">
          <section className="w-full flex">
            <motion.p className="mr-1 ml-14">{customersRounded}</motion.p>+
          </section>
          <p className="ml-6">Customers</p>
        </section>
        
        <section className="w-[25%] flex flex-col">
          <section className="w-full flex">
            <motion.p className="mr-1 ml-14">{rounded}</motion.p>+
          </section>
          <p className="ml-12">Brands</p>
        </section>
        
      </section>
      

      {/* Our Values */}
      <section className="w-full bg-blue-700 pt-3 overflow-hidden">
        <motion.h2 initial={{x:-200, opacity: 0}} whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }}   className="font-bold text-xl md:text-2xl  text-center h-30 pt-4 text-white">Our Values</motion.h2>
        
        <ul className="w-full flex flex-col justify-around gap-8">
          
          <li className="w-full flex flex-col items-center md:flex-row md:justify-around overflow-hidden">
            <section className="w-[70%]  md:w-[45%] h-[70vh]">
              <motion.img  initial={{scale: 0, opacity: 0}} whileInView={{scale : 1, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} src={Quality} alt="Quality" className="w-full h-full rounded-md object-cover drop-shadow-xl drop-shadow-slate-600" loading="lazy"/>
            </section>
            <motion.section   initial={{x: 200, opacity: 0}} whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} className="w-[45%] h-[20vh] md:h-[70vh] flex flex-col items-center">
              <h3 className="w-full text-center font-bold text-white text-lg md:text-xl mt-3">Quality</h3>
              <p className="text-white md:text-lg mt-6">Premium materials built to last</p>
            </motion.section>
          </li>
          
          <li className="w-full flex flex-col items-center md:flex-row md:justify-around overflow-hidden">
            <motion.section  initial={{x: -200, opacity: 0}} whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }}  className="w-[45%] h-[20vh] md:h-[70vh]  flex flex-col items-center order-2 md:order-1">
              <h3  className="w-full text-center font-bold text-white text-lg md:text-xl mt-3">Comfort</h3>
              <p className="text-white md:text-lg mt-6">Designed for everyday wear</p>
            </motion.section>
            <section className="w-[70%] md:w-[45%] h-[70vh] order-1 md:order-2">
              <motion.img src={Comfort} alt="Comfort" initial={{scale: 0, opacity: 0}} whileInView={{scale : 1, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }}  className="w-full h-full rounded-md object-cover drop-shadow-xl drop-shadow-slate-600" loading="lazy"/>
            </section>
          </li>

          <li className="w-full flex flex-col items-center md:flex-row md:justify-around overflow-hidden">
            <section className="w-[70%] md:w-[45%] h-[70vh]">
              <motion.img src={Pricing} alt="Clear pricing" initial={{scale: 0, opacity: 0}} whileInView={{scale : 1, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} className="w-full h-full rounded-md object-cover drop-shadow-xl drop-shadow-slate-600" loading="lazy"/>
            </section>
            <motion.section initial={{x: 200, opacity: 0}} whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} className="w-[45%] h-[20vh] md:h-[70vh] flex flex-col items-center">
              <h3  className="w-full text-center font-bold text-white text-lg md:text-xl mt-3">Transparency</h3>
              <p className="text-white md:text-lg mt-6">Clear Pricing and Sourcing</p>
            </motion.section>
          </li>
          
          <li className="w-full flex flex-col items-center md:flex-row md:justify-around mb-10 overflow-hidden">
            <motion.section initial={{x: -200, opacity: 0}} whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} className="w-[45%] h-[20vh] md:h-[70vh]  flex flex-col items-center order-2 md:order-1">
              <h3  className="w-full text-center font-bold text-white text-lg md:text-xl mt-3">Trendy</h3>
              <p className="text-white md:text-lg mt-6">We follow modern trends when it comes to fashion</p>
            </motion.section>

            <section className="w-[70%] md:w-[45%] h-[70vh] order-1 md:order-2 mb-2">
              <motion.img src={Trendy} alt="Trendy" initial={{scale: 0, opacity: 0}} whileInView={{scale : 1, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }} className="w-full h-full rounded-md object-cover drop-shadow-xl drop-shadow-slate-600" loading="lazy"/>
            </section>
          </li>
        </ul>
      </section>
      
      {/* News Letter */}
      <section className="w-full h-[50vh] bg-blue-600 flex flex-col">
        <motion.h2  initial={{x:-200, opacity: 0}}  whileInView={{x : 0, opacity: 1}} transition={{ease: "easeInOut", duration:2, delay: 0.1 }}  className="text-xl md:text-2xl font-bold text-center h-12 pt-4 text-white">Subscribe To Our Newsletter</motion.h2>
        <form className="w-full h-[45%] flex items-center justify-center">
          <input type="email" title="email" className="w-[60%] md:w-[40%] h-12 border-white border-2 bg-white outline-none pl-2 rounded-tl-lg rounded-bl-lg md:text-lg text-blue-900" required placeholder="Eg:-JohnDoe@blablah.com"/>
          <button type="submit" title="Subscribe to newsletter" className="w-30 h-12 border-white border-2 bg-blue-950 rounded-tr-lg rounded-br-lg md:text-lg text-white font-medium cursor-pointer"> Subscribe</button>
        </form>
      </section>
    
    </>
  )
}

export default Home