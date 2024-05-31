import { useLoaderData, useNavigate } from "react-router-dom";
import { CgDollar } from "react-icons/cg";
import { useEffect } from "react";

const ServiceDetails = () => {
    const services = useLoaderData()
    const {_id, imgURL, serviceName, price, serviceArea, description, providerImage, providerName, category } = services
    const navigate = useNavigate()

    useEffect(() =>{
        document.title = serviceName;
    },[serviceName])

    const handleBooked = (id) => {
        navigate(`/checkOut/${id}`)
    }

    console.log(services);
    return (
        <div className="w-11/12 mx-auto my-10 ">
            <div className=' rounded-lg flex flex-col lg:flex-row shadow-2xl gap-5 overflow-clip border-2 border-red-600 lg:pl-8'>
                <img className='lg:max-w-[50%] h-full w-full max-lg:mx-auto  object-cover my-auto  ' src={imgURL} alt="" />
                <div className='flex flex-col py-5 lg:py-10 pr-10 max-lg:px-5'>
                    <div className='flex gap-3 items-center'>
                        <div className="avatar">
                            <div className="w-full h-16 rounded-full">
                                <img src={providerImage} />
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-10'>
                                <h1 className='text-lg'>{providerName}</h1>
                            </div>
                            <h1 className='text-3xl max-lg:text-lg font-bold'>{serviceName}</h1>
                        </div>
                        <h1 className='bg-base-200 px-5 rounded-lg font-semibold'>{category}</h1>
                    </div>
                    <div>
                        <div className="divider"></div>
                        <h1>{description}</h1>
                        <h1 className='text-lg mt-6'><span className='font-semibold'>Service Area:</span> {serviceArea}</h1>
                        <h1 className='text-2xl font-bold text-[#ED1D24] flex items-center '><CgDollar className='text-3xl' />{price}</h1>
                        <h1 className="font-bold mt-4">Facility:</h1>
                        <ul className="list-disc ml-8 space-y-2 ">
                            <li>Enjoy 24/7 quality service with our facility, ensuring round-the-clock assistance and top-notch quality in every aspect of your experience.</li>
                            <li>Providing top-notch services at competitive prices, ensuring both quality and affordability for our customers.</li>
                        </ul>
                    </div>
                    <button onClick={()=>handleBooked(_id)} className='btn lg:btn-wide mt-4 text-white bg-[#ED1D24]'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;