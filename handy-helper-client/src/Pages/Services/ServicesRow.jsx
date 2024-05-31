import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { CgDollar } from "react-icons/cg";

const ServicesRow = ({ service, handleDelete }) => {
    const { _id, imgURL, serviceName, price, serviceArea, providerImage, providerName, category } = service
    const navigate = useNavigate()

    const handleUpdate = id => {
        navigate(`/updateService/${id}`)
    }

    return (
        <tr  >
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle text-[#FF3811] hover:bg-[#FF3811] hover:text-white bg-transparent border-[#FF3811]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td className='flex gap-3'>
                <div className="avatar">
                    <div className="mask mask-squircle w-14 h-14">
                        <img src={imgURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{category}</span>
                </div>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={providerImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{providerName}</div>
                        <div className="text-sm opacity-50">{serviceArea}</div>
                    </div>
                </div>
            </td>

            <td className='flex items-center text-xl text-green-600'><CgDollar />{price}</td>
            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </button>
            </th>
        </tr>
    );
};

export default ServicesRow;

ServicesRow.propTypes = {
    service: PropTypes.object,
    handleDelete: PropTypes.func,
    // handleConfirm: PropTypes.func
}