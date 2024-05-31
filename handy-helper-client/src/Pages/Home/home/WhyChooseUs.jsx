import Why from '../../../assets/Why.jpg'
const WhyChooseUs = () => {
    return (
        <div className='w-11/12 max-w-[1200px] mx-auto my-20'>
            <div className=' flex flex-col md:flex-row items-center gap-10'>
                <img className='max-h-[600px] min-sm:w-1/2 object-cover object-left-top ' src={Why} alt="" />
                <div className='space-y-5'>
                    <div className='space-y-3'>
                        <h1 className='text-lg font-bold text-[#ED1D24]'>Why Choose Us</h1>
                        <h1 className='text-2xl font-bold'>Offer Reliable Services For Most Home Services</h1>
                        <p>Choose us for reliable service, exceptional quality, and customer satisfaction guaranteed every time.</p>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>Residential carpenters</h1>
                            <h1 className='font-bold'>85%</h1>
                        </div>
                        <progress className="progress progress-error " value="85" max="100"></progress>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>plumbers</h1>
                            <h1 className='font-bold'>90%</h1>
                        </div>
                        <progress className="progress progress-error " value="90" max="100"></progress>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>Industrial electricians</h1>
                            <h1 className='font-bold'>95%</h1>
                        </div>
                        <progress className="progress progress-error " value="95" max="100"></progress>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>Handy man</h1>
                            <h1 className='font-bold'>82%</h1>
                        </div>
                        <progress className="progress progress-error " value="82" max="100"></progress>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;