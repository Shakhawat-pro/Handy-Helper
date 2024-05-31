import { useContext, useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../../Context/AuthProvider";


const AddService = () => {
    const { user } = useContext(AuthContext)
    const [serviceImg, setServiceImg] = useState('')

    useEffect(() =>{
        document.title = 'Add Service';
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target 
        const imgURL = form.imgURL.value
        const serviceName = form.serviceName.value
        const price = form.price.value
        const serviceArea = form.serviceArea.value
        const description = form.description.value
        const providerEmail = form.email.value
        const providerImage = form.providerImage.value
        const providerName = form.name.value
        const category = form.category.value
        const info = {imgURL, serviceName, price, serviceArea, description, providerEmail, providerImage, providerName,    category,  }
        console.log(info);
        
        fetch('https://handy-helper-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then((data) => {
            if(data.insertedId){
                // toast("Add Successfully!");
                Swal.fire({
                    title: 'success!',
                    text: 'Add Successfully',
                    icon: 'success',
                    confirmButtonText: 'GO Back'
                  }).then(()=>{
                    form.reset();
                  })
                
            }
        })
        
    }



    return (
        <div className="w-11/12 mx-auto mt-16">
            <h1 className="text-4xl font-bold text-[#ED1D24] text-center">Add Service</h1>
            <form onSubmit={handleSubmit}>
                <div className=" mt-16 flex  flex-col md:flex-row justify-center gap-7">
                    <div className="flex  justify-center flex-col-reverse  gap-5">
                        {/* service image */}
                        <div className="tooltip tooltip-error" data-tip="Please provide the image URL">
                            <div>
                                <div className="w-[320px] h-[300px] mx-auto bg-base-200 border-2 border-[#ED1D24] flex items-center justify-center shadow-xl">
                                    {
                                        serviceImg ? <img src={serviceImg} alt="Preview" className="w-full h-full" /> : <FaUpload className="text-7xl " />
                                    }
                                </div>
                                <label className=" w-full ">
                                    <div className="label">
                                        <p className="label-text ">Service Image URL <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                                    </div>
                                    <input type="url" name="imgURL" required onChange={(e) => setServiceImg(e.target.value)} placeholder="Type here" className="input border-[#ED1D24] w-full " />
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
                                        <p className="label-text ">Profile Picture <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                                    </div>
                                    <input type="url" name="providerImage" defaultValue={user.photoURL} readOnly required onChange={(e) => setServiceImg(e.target.value)} placeholder="Type here" className="input border-[#ED1D24] w-full " />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 bg-base-200 border-[#ED1D24] max-w-[700px] p-8 shadow-xl">
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text ">Your name <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                            </div>
                            <input type="text" name="name" defaultValue={user.displayName} readOnly required placeholder="Name" className="input border-[#ED1D24] w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text">Service Name <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                            </div>
                            <input type="text" name="serviceName" required placeholder="Type here" className="input border-[#ED1D24] w-full " />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text ">Service Area<span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                            </div>
                            <input type="text" name="serviceArea" required placeholder="Location" className="input border-[#ED1D24] w-full " />
                        </label>
                        <div className="flex gap-5">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <p className="label-text ">Price <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                                </div>
                                <input type="number" name="price" required placeholder="Price" className="input border-[#ED1D24] w-full " />
                            </label>
                            <label className=" w-full">
                                <div className="label">
                                    <p className="label-text">Category <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                                </div>
                                <select name="category" required className="select select-bordered border-[#ED1D24] w-full" defaultValue="">
                                    <option value="" disabled>Select a Category</option>
                                    <option value="Handyman">Handyman</option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="Carpenter">Carpenter</option>
                                    <option value="HVAC">HVAC</option>
                                </select>
                            </label>
                        </div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <p className="label-text ">Your Email <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                            </div>
                            <input type="email" defaultValue={user.email} readOnly name="email" required placeholder="Email" className="input border-[#ED1D24] w-full " />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea name="description" required className="textarea textarea-bordered h-24 border-[#ED1D24]" placeholder="description"></textarea>
                        </label>
                        <input type="submit" value="Submit" className="btn w-full bg-[#ED1D24] text-white mt-4" />
                    </div>
                </div>
            </form>
        </div>

    );
};

export default AddService;






{/* <div>
<input type="text" value={imageUrl} onChange={handleInputChange} placeholder="Enter image URL"/>
{imageUrl && (
    <div>
        <p>Preview:</p>
        <img src={imageUrl} alt="Preview" style={{ maxWidth: "100%" }} />
    </div>
)}
</div> */}