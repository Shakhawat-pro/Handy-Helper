import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosSecure from "../hook/useAxiosSecure";
import BookingsRow from "./BookingsRow";

import Lottie from "lottie-react";
import notFound from "../assets/notFound.json"

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    const url = `/bookings?email=${user?.email}&role=customer`;

    useEffect(() => {
        document.title = "Booking";
        axiosSecure.get(url)
            .then(res => setBookings(res.data))

    }, [axiosSecure, url])

    console.log(bookings);

    return (
        <div className="w-11/12 mx-auto max-w-[1200px] mt-10" data-aos="zoom-in-up" data-aos-delay="100">
            {bookings.length > 0 ?
                < div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Service Provide</th>
                                <th>date</th>
                                <th>Price</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(service => <BookingsRow key={service._id} service={service}></BookingsRow>)
                            }
                        </tbody>
                    </table>
                </div> :
                <div className="w-[300px] mx-auto text-center">
                    <h1 className="text-xl">You havent made any bookings yet</h1>
                    <Lottie animationData={notFound} loop={false} ></Lottie>
                </div>
            }
        </div>
    );
};

export default Bookings;