import AboutUs from "../assets/about/About-us.webp"
import OurMission from "../assets/about/our-mission.webp"
import Team from "../assets/about/our-team.webp"

const About = () => {
  return (
    <>
      <section className="w-full bg-slate-200 flex flex-col gap-4">
        <h1 className="w-full text-center font-extrabold text-blue-950 text-xl md:text-3xl mt-4">About Us</h1>
        <section className="w-full h-screen flex flex-col items-center  md:flex-row justify-around">
          <section className="w-[45%] h-[75%]">
            <img src={AboutUs} alt="About-us image" className="w-full h-full rounded-md object-cover drop-shadow-2xl drop-shadow-slate-400"/>
          </section>
        <section className="w-[80%] md:w-[45%] h-[75%] flex justify-center items-Start pt-16">
          <p className="w-[80%] text-start text-wrap text-blue-950 md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nisi quaerat vitae illum, 
            ea corporis tempora eligendi suscipit natus ipsum porro maxime esse possimus sequi? Nisi numquam officiis eligendi perferendis?
            Soluta architecto vitae, ipsa aspernatur nesciunt commodi nam inventore, ipsam incidunt et deserunt vero quasi officiis blanditiis numquam ad animi. 
            Vitae, praesentium? Nisi ea in repellat repellendus ab necessitatibus quisquam?
          </p>
        </section>
      </section>
    </section>

    {/* our team */}
    <section className="w-full bg-slate-200 flex flex-col gap-4">
      <h2 className="w-full text-center font-extrabold text-blue-950 text-xl md:text-3xl mt-4">Our Team</h2>
        <section className="w-full h-screen flex flex-col items-center  md:flex-row justify-around">
          <section className="w-[45%] h-[75%]">
            <img src={Team} alt="Our team image" className="w-full h-full rounded-md object-cover drop-shadow-2xl drop-shadow-slate-400"/>
          </section>
        <section className="w-[80%] md:w-[45%] h-[75%] flex justify-center items-Start pt-16">
          <p className="w-[80%] text-start text-wrap text-blue-950 md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nisi quaerat vitae illum, 
            ea corporis tempora eligendi suscipit natus ipsum porro maxime esse possimus sequi? Nisi numquam officiis eligendi perferendis?
            Soluta architecto vitae, ipsa aspernatur nesciunt commodi nam inventore, ipsam incidunt et deserunt vero quasi officiis blanditiis numquam ad animi. 
            Vitae, praesentium? Nisi ea in repellat repellendus ab necessitatibus quisquam?
          </p>
        </section>
      </section>
    </section>

    {/** Our Goal */}
    <section className="w-full bg-slate-200 flex flex-col gap-4">
      <h2 className="w-full text-center font-extrabold text-blue-950 text-xl md:text-3xl mt-4">Our Goal</h2>
        <section className="w-full h-screen flex flex-col items-center  md:flex-row justify-around">
          <section className="w-[45%] h-[75%]">
            <img src={OurMission} alt="Our Mission image" className="w-full h-full rounded-md object-cover drop-shadow-2xl drop-shadow-slate-400"/>
          </section>
        <section  className="w-[80%] md:w-[45%] h-[75%] flex justify-center items-Start pt-16">
          <p className="w-[80%] text-start text-wrap text-blue-950 md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nisi quaerat vitae illum, 
            ea corporis tempora eligendi suscipit natus ipsum porro maxime esse possimus sequi? Nisi numquam officiis eligendi perferendis?
            Soluta architecto vitae, ipsa aspernatur nesciunt commodi nam inventore, ipsam incidunt et deserunt vero quasi officiis blanditiis numquam ad animi. 
            Vitae, praesentium? Nisi ea in repellat repellendus ab necessitatibus quisquam?
          </p>
        </section>
      </section>
    </section>
    </>
  )
}

export default About