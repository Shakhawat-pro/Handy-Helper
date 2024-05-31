import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FaUpload } from "react-icons/fa";


const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { _id, imgURL, serviceName, price, serviceArea, category, providerName, providerEmail, providerImage } = service

    useEffect(() =>{
        document.title = "Check Out";
    },[])

    const handleBookService = e =>{
        e.preventDefault()
        const form = e.target
        const imgURL = form.imgURL.value
        const serviceName = form.serviceName.value
        const price = form.price.value
        const location = form.location.value
        const note = form.note.value
        const customerImg = form.customerImg.value
        const customerName = form.customerName.value
        const customerEmail = form.customerEmail.value
        const date = form.date.value
        const category = form.category.value
        const status = 'Pending'
        const info = { imgURL, serviceName, price, serviceArea, location, note, providerEmail, providerImage, serviceId: _id, providerName, category, customerImg , customerName, customerEmail, date, status}
        console.log(info);

        fetch('https://handy-helper-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <div className="w-11/12 mx-auto" >
            <form onSubmit={handleBookService}>
                <div className=" mt-16 flex  flex-col md:flex-row justify-center gap-7">
                    <div className="flex  justify-center flex-col-reverse  gap-5">
                        {/* service image */}
                        <div className="tooltip tooltip-error" data-tip="Please provide the image URL">
                            <div>
                                <div className="w-[320px] h-[300px] mx-auto bg-base-200 border-2 border-[#ED1D24] flex items-center justify-center shadow-xl">
                                    {
                                        imgURL ? <img src={imgURL} alt="Preview" className="w-full h-full" /> : <FaUpload className="text-7xl " />
                                    }
                                </div>
                                <label className=" w-full ">
                                    <div className="label">
                                        <p className="label-text ">Service Image URL </p>
                                    </div>
                                    <input type="url" name="imgURL" defaultValue={imgURL} required readOnly placeholder="Type here" className="input border-[#ED1D24] w-full " />
                                </label>
                            </div>
                        </div>
                        {/* service image */}
                        <div className="tooltip tooltip-error" data-tip="Please provide the image URL">
                            <div>
                                <div className="avatar bg-base-200 border-2 border-[#ED1D24] shadow-xl">
                                    <div className="w-32 rounded">
                                        {
                                            user.photoURL ? <img src={user.photoURL} alt="Preview" className="w-full h-full" /> : <FaUpload className="text-7xl ml-7 mt-5 " />
                                        }
                                    </div>
                                </div>
                                <label className=" w-full ">
                                    <div className="label">
                                        <p className="label-text ">Profile Picture </p>
                                    </div>
                                    <input type="url" name="customerImg" defaultValue={user.photoURL} readOnly required placeholder="Type here" className="input border-[#ED1D24] w-full " />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 bg-base-200 border-[#ED1D24] max-w-[700px] p-8 shadow-xl">
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text ">Your name </p>
                            </div>
                            <input type="text" name="customerName" defaultValue={user.displayName} readOnly required placeholder="Name" className="input border-[#ED1D24] w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text">Service Name </p>
                            </div>
                            <input type="text" name="serviceName" readOnly defaultValue={serviceName} required placeholder="Type here" className="input border-[#ED1D24] w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text ">Your Address <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                            </div>
                            <input type="text" name="location"  required placeholder="Location" className="input border-[#ED1D24] w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text ">Service Date <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                            </div>
                            <input type="date" name="date"  required className="input border-[#ED1D24] w-full " />
                        </label>
                        <div className="flex gap-5">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <p className="label-text ">Price </p>
                                </div>
                                <input type="number" name="price" readOnly defaultValue={price} required placeholder="Price" className="input border-[#ED1D24] w-full " />
                            </label>
                            <label className=" w-full">
                                <div className="label">
                                    <p className="label-text">Category </p>
                                </div>

                                <input type="text"  defaultValue={category} readOnly name="category" required placeholder="Email" className="input border-[#ED1D24] w-full " />
                            </label>
                        </div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text ">Your Email</p>
                            </div>
                            <input type="email" defaultValue={user.email} readOnly name="customerEmail" required placeholder="Email" className="input border-[#ED1D24] w-full " />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Note <span className="text-xl text-[#ED1D24] font-bold">*</span></span>
                            </div>
                            <textarea name="note" required className="textarea textarea-bordered h-24 border-[#ED1D24]" placeholder="Note"></textarea>
                        </label>
                        <input type="submit" value="Check Out" className="btn w-full bg-[#ED1D24] text-white mt-4" />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default CheckOut;