import { useContext, useEffect, useState } from "react";
import ServicesToDoRow from "./ServicesToDoRow";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Lottie from "lottie-react";
import notFound from "../../assets/notFound.json"


const ServicesToDO = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    const url = `/bookings?email=${user?.email}&role=provider`;

    useEffect(() => {
        document.title = "Services To-Do";
        axiosSecure.get(url)
            .then(res => setBookings(res.data))

    }, [axiosSecure, url])

    console.log(bookings);

    return (

        <div className="w-11/12 mx-auto max-w-[1200px] mt-10">
            {bookings.length > 0 ?
                < div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Service</th>
                                <th>Service Provide</th>
                                <th>date</th>
                                <th>Price</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((service, Index) => <ServicesToDoRow key={service._id} service={service} number={Index + 1}></ServicesToDoRow>)
                            }
                        </tbody>
                    </table>
                </div>:
                 <div className="w-[300px] mx-auto text-center">
                    <h1 className="text-xl">No bookings found. Please check back later.</h1>
                <Lottie  animationData={notFound} loop={false} ></Lottie>
                 </div>
                }
        </div>

    );
};

export default ServicesToDO;