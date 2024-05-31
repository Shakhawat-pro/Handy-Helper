import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import ServicesRow from "./ServicesRow";
import Swal from 'sweetalert2'
import Lottie from "lottie-react";
import notFound from "../../assets/notFound.json"

const ManageServices = () => {
    const loadedServices = useLoaderData()
    const { user } = useContext(AuthContext)
    const userEmail = user.email;
    console.log(userEmail);
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const filteredSpots = loadedServices.filter(a => a.providerEmail === userEmail);
        document.title = "Manage Service";
        const timeout = setTimeout(() => {
            setLoading(false);
            setServices(filteredSpots);
            document.title = 'All Tourist Spots';
            window.scrollTo(0, 0);
        }, 500);

        return () => clearTimeout(timeout);
    }, [loadedServices, userEmail])

    console.log(loadedServices);
    console.log(services);

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://handy-helper-server.vercel.app/services/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            }).then(() => {
                                const remaining = services.filter(spo => spo._id !== _id)
                                setServices(remaining)
                            }
                            )

                        }
                    })
            }
        });
    }

    return (
        <div className="w-11/12 max-w-[1100px] mx-auto mt-20">
            {loading ? (
                <div className="flex justify-center items-center h-screen" data-aos="zoom-in-up" data-aos-delay="100">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (< div className="overflow-x-auto" >
                {
                    services.length > 0 ?
                        <table className="table" data-aos="zoom-in-up" data-aos-duration="1000" >
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Remove</th>
                                    <th>Service</th>
                                    <th>Provide</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    services.map(service => <ServicesRow key={service._id} service={service} handleDelete={handleDelete}></ServicesRow>)
                                }
                            </tbody>
                        </table> :
                        <div className="w-[300px] mx-auto text-center">
                            <h1 className="text-xl">No Services found.</h1>
                            <Lottie animationData={notFound} loop={false} ></Lottie>
                        </div>
                }
            </div>)
            }
        </div >
    );
};

export default ManageServices;