import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaUpload } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from 'sweetalert2'


const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const [serviceImg, setServiceImg] = useState(user.photoURL || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const URL = form.providerImage.value;

        Swal.fire({
            title: "Are you sure?",
            text: "You want to change your Profile",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed){
                updateProfile(auth.currentUser, {
                    displayName: name, 
                    photoURL: URL
                }).then(() => {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your profile has been Update.",
                        icon: "success"
                    })
                  }).catch((error) => {
                    console.log(error.message);
                  });
                }
            })



    };

    console.log("edit", user);
    return (
        <div className="w-11/12 mx-auto mt-20">
            <form onSubmit={handleSubmit}>
            <h1 className="text-center text-[#ED1D24] font-bold text-4xl">Update Your Profile</h1>
                <div className="max-w-[500px] w-full mx-auto mt-10">
                    <div className="border-2 bg-base-200 border-[#ED1D24] max-w-[700px] p-8 shadow-xl">
                        <div className="tooltip tooltip-error w-full" data-tip="Please provide the image URL">
                            <div className="avatar bg-base-200 border-2 border-[#ED1D24] shadow-xl">
                                <div className="w-32 rounded">
                                    {
                                        serviceImg ? <img src={serviceImg} alt="Preview" className="w-full h-full" /> : <FaUpload className="text-7xl ml-7 mt-5" />
                                    }
                                </div>
                            </div>
                            <label className="w-full">
                                <div className="label">
                                    <p className="label-text">Profile Picture <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                                </div>
                                <input
                                    type="url"
                                    name="providerImage"
                                    defaultValue={serviceImg}
                                    required
                                    onChange={(e) => setServiceImg(e.target.value)}
                                    placeholder="Type here"
                                    className="input border-[#ED1D24] w-full"
                                />
                            </label>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <p className="label-text">Your name <span className="text-xl text-[#ED1D24] font-bold">*</span></p>
                            </div>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user.displayName}
                                required
                                placeholder="Name"
                                className="input border-[#ED1D24] w-full"
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <p className="label-text">Your Email</p>
                            </div>
                            <input
                                type="email"
                                defaultValue={user.email}
                                readOnly
                                name="email"
                                required
                                placeholder="Email"
                                className="input border-[#ED1D24] w-full"
                            />
                        </label>
                        <input type="submit" value="Update" className="btn w-full bg-[#ED1D24] text-white mt-4" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
