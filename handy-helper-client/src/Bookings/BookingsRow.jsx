import PropTypes from 'prop-types';


const BookingsRow = ({ service }) => {
    const {imgURL, serviceName, price, serviceArea, providerImage, providerName, category, date, status } = service

    return (
        <tr>

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
            <td>{date}</td>
            <td className="text-xl text-green-500 font-bold">${price}</td>
            <th><button className="btn bg-[#ED1D24] text-white w-[100px]">{status}</button></th>
        </tr>
    );
};

export default BookingsRow;


BookingsRow.propTypes = {
    service: PropTypes.object,
    // handleDelete: PropTypes.func,
    // handleConfirm: PropTypes.func
}