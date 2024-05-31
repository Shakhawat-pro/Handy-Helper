import carpenter from '../../../assets/carpenter.png'
import Elec from '../../../assets/Elec.png'
import b4 from '../../../assets/image/b4.jpg'
import b5 from '../../../assets/image/b5.jpg'

const AboutUs = () => {
    return (
        <div className="my-32 w-11/12 mx-auto flex-col md:flex-row flex items-center gap-10 " data-aos-delay="100">
            <div className="md:w-1/2" data-aos="zoom-in-right">
                <h1 className='text-[#ED1D24] font-bold text-lg '>About US</h1>
                <h1 className='text-4xl font-semibold'>We Provide Cost Effective <br /> Solution For You.</h1>
                <p className='my-2'>Our platform hosts a diverse array of experts, each specialized in their respective fields, offering unparalleled expertise across various domains to cater to your unique needs effectively.</p>
                <div className='flex my-5'>
                    <div className='flex items-center'>
                        <img className='h-[70px]' src={carpenter} alt="" />
                        <h1>The Best Quality Services</h1>
                    </div>
                    <div className='flex items-center'>
                        <img className='h-[70px]' src={Elec} alt="" />
                        <h1>The Best Quality Services</h1>
                    </div>
                </div>
                <ul className='list-disc ml-5'>
                    <li>Expertise: Tap into our vast network of seasoned professionals.</li>
                    <li>Convenience: Access a diverse range of services easily.</li>
                    <li>Quality Assurance: Expect top-notch service delivery every time.</li>
                </ul>
            </div>
            <div className=' w-3/4 sm:w-1/2 relative' data-aos="zoom-in-left" data-a>
                <img src= {b5} alt="" />
                <img className='absolute w-[40%] bottom-[-50px] left-[-40px] border-4 border-white' src={b4} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;