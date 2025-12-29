import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-between pb-2 pt-2  bg-slate-950 text-white gap-6">
        <section className="w-full h-[20vh]">
          <h4 className="text-xl md:text-2xl text-white pl-10 font-extrabold mt-2">Mood</h4>
          <section className="w-full flex flex-col justify-center items-center gap-2">
            <h5 className="text-lg md:text-xl text-white pl-10 font-extrabold mt-2">Subscribe To Our News Letter</h5>
            <form className="w-[90%] md:w-[55%] flex justify-center items-center">
              <input type="email" className="text-blue-900 bg-white outline-none rounded-tl-md pl-3 md:text-lg rounded-bl-md w-[75%] h-12" required title="enter your email address" placeholder="Eg:-John@blahblah.com"/>
              <button type="submit" className="bg-slate-300 text-blue-900 h-12 w-[20%] md:text-lg font-semibold rounded-tr-md rounded-br-md cursor-pointer" title="subscribe to news letter">Subscribe</button>
            </form>
          </section>
        </section>
        <section className="w-full flex flex-col md:flex-row justify-around items-center">
          <section className="w-[45%]">
          <h5 className="text-lg md:text-xl text-white pl-10 font-extrabold mt-2 text-center mb-3">Our Socials</h5>
          <ul className="w-full flex flex-col justify-around items-center pl-6 md:pl-0">
             <li><a className="transition hover:underline delay-100 ease-in-out duration-200 font-light md:text-lg cursor-pointer">Instagram</a></li>
             <li><a className="transition hover:underline delay-100 ease-in-out duration-200 font-light md:text-lg cursor-pointer">Facebook</a></li>
             <li><a className="transition hover:underline delay-100 ease-in-out duration-200 font-light md:text-lg cursor-pointer">Tiktok</a></li>
             <li><a className="transition hover:underline delay-100 ease-in-out duration-200 font-light md:text-lg cursor-pointer">X</a></li>
          </ul>
        </section>

         <section className="w-[60%] md:w-[45%] h-[25vh]">
          <h5 className="text-lg md:text-xl text-white pl-10 font-extrabold mt-2 text-center mb-3">Address</h5>
          <section className="w-full flex flex-col justify-around items-center md:text-lg gap-2">
            <p>Evergreen Terrace, Springfield </p>
            <p>Phone Number: 555-1235-7853</p>
          </section>
        </section>

        </section>
        
        <section className="w-full flex items-center justify-center pl-10">
          <p className="italic md:text-lg">&copy; 2025, All rights reserved</p>
        </section>

    </footer>
  )
}

export default Footer