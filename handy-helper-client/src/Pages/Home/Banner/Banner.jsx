import b5 from "../../../assets/image/b5.jpg"
import b1 from "../../../assets/image/b1.jpg"
import b2 from "../../../assets/image/b2.jpg"
import b4 from "../../../assets/image/b4.jpg"
import { useNavigate } from "react-router-dom";
const Banner = () => {
    {/* <img src={img5} className="w-full h-full object-cover rounded-lg" /> */ }
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/services')
    }
    return (
        <div>
            <div className="carousel min-h-[350px] h-s w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative  overflow-clip">
                        <img src={b5} className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                    </div>
                    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="absolute  text-white lg:w-[800px] mx-10 md:ml-28 lg:translate-x-[15%] top-[25%] space-y-3 md:space-y-7 ">
                        <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold ">Discover Top Services <br /> Near You</h1>
                        <h1 className="text-sm md:text-lg lg:text-xl">Explore a wide range of services tailored to your needs. From home repairs to professional consultations, find trusted providers in your area.</h1>
                        <button onClick={handleNavigate} className="btn bg-[#ED1D24] border-none md:btn-wide text-white">Book Now</button>
                    </div>
                    <div className="absolute flex md:justify-between transform -translate-y-1/2 md:left-5 right-5 md:top-1/2 max-md:bottom-0 max-md:gap-3">
                        <a href="#slide4" className="btn btn-circle bg-transparent  text-white border-white hover:text-[#ED1D24] hover:bg-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent  text-white border-white hover:text-[#ED1D24] hover:bg-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative  overflow-clip">
                        <img src={b1} className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                    </div>
                    <div className="absolute text-white lg:w-[800px] mx-10 md:ml-28 lg:translate-x-[15%] top-[25%] space-y-3 md:space-y-7 ">
                        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold ">Quality Services, Trusted Providers</h1>
                        <h1 className="text-sm lg:text-xl">Explore our curated collection of services delivered by verified professionals. Experience top-notch quality and reliable assistance for every task.</h1>
                        <button onClick={handleNavigate} className="btn bg-[#ED1D24] border-none md:btn-wide text-white">Book Now</button>
                    </div>
                    <div className="absolute flex md:justify-between transform -translate-y-1/2 md:left-5 right-5 md:top-1/2 max-md:bottom-0 max-md:gap-3">
                        <a href="#slide1" className="btn btn-circle bg-transparent text-white border-white hover:text-[#ED1D24] hover:bg-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent text-white border-white hover:text-[#ED1D24] hover:bg-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative  overflow-clip">
                        <img src={b2} className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                    </div>
                    <div className="absolute text-white lg:w-[800px] mx-10 md:ml-28 lg:translate-x-[15%] top-[25%] space-y-3 md:space-y-7 ">
                        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold ">Your One-Stop Service Destination</h1>
                        <h1 className="text-sm lg:text-xl">Unlock a world of convenience with our comprehensive service offerings. Whether its repairs, consultations, or events, find everything you need in one place.</h1>
                        <button onClick={handleNavigate} className="btn bg-[#ED1D24] border-none md:btn-wide text-white">Book Now</button>
                    </div>
                    <div className="absolute flex md:justify-between transform -translate-y-1/2 md:left-5 right-5 md:top-1/2 max-md:bottom-0 max-md:gap-3">
                        <a href="#slide2" className="btn btn-circle bg-transparent text-white border-white hover:text-[#ED1D24] hover:bg-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-transparent text-white border-white hover:text-[#ED1D24] hover:bg-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className=" w-full h-full relative  overflow-clip">
                        <img src={b4} className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                    </div>
                    <div className="absolute text-white lg:w-[800px] mx-10 md:ml-28 lg:translate-x-[15%] top-[25%] space-y-3 md:space-y-7 ">
                        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold ">Elevate Your Experience with Premium Services</h1>
                        <h1 className="text-sm lg:text-xl">Experience excellence with our premium service providers. From specialized consultations to luxury experiences, elevate every aspect of your life with our elite offerings.</h1>
                        <button onClick={handleNavigate} className="btn bg-[#ED1D24] border-none md:btn-wide text-white">Book Now</button>
                    </div>
                    <div className="absolute flex md:justify-between transform -translate-y-1/2 md:left-5 right-5 md:top-1/2 max-md:bottom-0 max-md:gap-3">
                        <a href="#slide3" className="btn btn-circle bg-transparent text-white border-white hover:text-[#ED1D24] hover:bg-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-transparent text-white border-white hover:text-[#ED1D24] hover:bg-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;