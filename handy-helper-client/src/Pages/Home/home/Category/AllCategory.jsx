import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../PopularServices/ServiceCard";

const AllCategory = () => {
    const loadedCat = useLoaderData();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 
        fetch('https://handy-helper-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(a => a.category === loadedCat.category);
                setServices(filtered);
                setLoading(false); 
            })
            .catch(error => {
                console.error("Error fetching services:", error);
                setLoading(false); 
            });
    }, [loadedCat.category]);

    if (loading) {
        return(
            <div className="text-center mt-5"><span className="loading text-[#FF3811] loading-infinity w-32"></span></div>
        )
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center mt-20 mb-16">
                <h1 className="text-3xl ">Total Service in <span className="text-[#ED1D24] font-bold">{loadedCat.category}</span> Category : <span className="text-[#ED1D24] font-bold">{services.length}</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
                {services.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default AllCategory;
