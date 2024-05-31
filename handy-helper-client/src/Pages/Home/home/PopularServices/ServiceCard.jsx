import PropTypes from 'prop-types';
import { CgDollar } from "react-icons/cg";
import { useLocation, useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, imgURL, serviceName, price, serviceArea, description, providerImage, providerName, category } = service
    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/services/${id}`)
    }
    return (
        <div className={`border-2 border-red-600 rounded-lg flex flex-col ${location.pathname === '/services' ? '' : 'lg:flex-row'} shadow-2xl gap-5 overflow-clip`}>
            <img className={` h-full w-full  ${location.pathname === '/services' ? '' : 'max-lg:mx-auto lg:max-w-[40%]'}  object-cover border-r-2 border-[#ED1D24] `} src={imgURL} alt="" />
            <div className={`flex flex-col py-5  pr-10   ${location.pathname === '/services' ? 'px-5' : 'max-lg:px-5 lg:py-10'}`}>
                <div className='flex gap-3 items-center'>
                    <div className="avatar">
                        <div className="w-full h-16 rounded-full">
                            <img src={providerImage} />
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex items-center gap-5'>
                            <h1 className='text-lg'>{providerName}</h1>
                            <h1 className='badge badge-ghost font-semibold'>{category}</h1>
                        </div>
                        <h1 className={`text-3xl  ${location.pathname === '/services' ? '' : 'max-lg:text-lg'} font-bold`}>{serviceName}</h1>
                    </div>
                </div>
                <div>
                    <div className="divider"></div>
                    <h1>{description}</h1>
                    <h1 className='text-lg mt-6'><span className='font-semibold'>Service Area:</span> {serviceArea}</h1>
                    <h1 className='text-2xl font-bold text-[#ED1D24] flex items-center '><CgDollar className='text-3xl' />{price}</h1>
                    <button onClick={() => handleClick(_id)} className='btn lg:btn-wide mt-4 text-white bg-[#ED1D24]'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
};