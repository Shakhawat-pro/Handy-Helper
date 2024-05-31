import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/home/PopularServices/ServiceCard";
import { useState, useEffect } from "react";

import Lottie from "lottie-react";
import notFound from "../../assets/notFound.json"

const Services = () => {
    const loadedServices = useLoaderData();
    const [search, setSearch] = useState('');
    const [filteredServices, setFilteredServices] = useState([]); // State to store filtered services
    const [loading, setLoading] = useState(false); // State to manage loading

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        setLoading(true); 
        document.title = 'Services';
        const filterServices = (services, searchTerm) => {
            const lowerCaseSearch = searchTerm.toLowerCase();
            return services.filter(service => {
                const lowerCaseServiceName = service?.serviceName?.toLowerCase();
                const lowerCaseCategory = service?.category?.toLowerCase();
                return lowerCaseServiceName && lowerCaseServiceName.includes(lowerCaseSearch) ||
                       lowerCaseCategory && lowerCaseCategory.includes(lowerCaseSearch);
            });
        };

        setTimeout(() => {
            const filtered = filterServices(loadedServices, search);
            setFilteredServices(filtered); 
            setLoading(false); 
        }, 1000);

    }, [loadedServices, search]);

    return (
        <div className="w-11/12 max-w-[1350px] mx-auto my-5" data-aos="zoom-in-up" data-aos-delay="100">
            <div className="text-center my-10">
                <h1 className="text-4xl text-[#ED1D24] font-bold">Explore Our Services</h1>
                <p className="max-w-[1000px] mx-auto my-5">Discover a wide range of home repair and maintenance services offered by our skilled professionals. From plumbing and electrical work to carpentry and painting, we have you covered. Browse through our extensive list of services and find the perfect solution for your home improvement needs.</p>
                <form>
                    <label className="input input-bordered w-[400px] mx-auto flex items-center border-4 border-red-600 gap-2">
                        <input type="text" name="name" className="grow" placeholder="Search" onChange={handleSearch} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </form>
            </div>

            {loading ? ( // Show loader if loading is true
                <div className="flex justify-center ">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <div>
                    {
                        filteredServices.length > 0 ?
                        <div className="grid grid-cols-1 mx-auto max-w-[1000px] md:grid-cols-2 gap-10 " data-aos="zoom-in-up">
                        {filteredServices.map(service => <ServiceCard key={service._id} service={service} />)}
                        </div> :
                               <div className="w-[300px] mx-auto text-center" data-aos="zoom-in-up">
                                    <h1 className="text-xl">No Matching Service</h1>
                                    <Lottie animationData={notFound} loop={false} ></Lottie>
                                </div>
                    }
                </div>
 

            )}
        </div>
    );
};

export default Services;
