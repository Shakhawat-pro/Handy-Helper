import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";

const PopularServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://handy-helper-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching services:", error));
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5"><span className="loading text-[#FF3811] loading-infinity w-32"></span></div>
        );
    }

    return (
        <div className="mt-32 w-11/12 max-w-[1250px] mx-auto">
            <div className="text-center my-10 space-y-5">
                <h1 className="text-4xl font-bold">Popular Services</h1>
                <h1 className="">High-demand services catering to diverse needs, providing essential solutions efficiently and reliably.</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
                {services.slice(0, 6).map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
            <div className="text-center mt-5">
                <button onClick={() => navigate('/services')} className="btn bg-[#ED1D24] text-white btn-wide">View All</button>
            </div>
        </div>
    );
};

export default PopularServices;
