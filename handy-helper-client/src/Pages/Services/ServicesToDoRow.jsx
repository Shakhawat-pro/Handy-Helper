import PropTypes from 'prop-types';

const ServicesToDoRow = ({ service, number }) => {
    const {_id, imgURL, serviceName, price, location, customerImg, customerName, category, date, status } = service

    const handleStatus = (id, newStatus) => {
        fetch(`https://handy-helper-server.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: newStatus })
        })
            .then(res => res.json())
            .then(data => {
                  console.log(data);
            })
    }

    return (
        <tr>
            <td className='font-semibold'>{number}</td>
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
                            <img src={customerImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>{date}</td>
            <td className="text-xl text-green-500 font-bold">${price}</td>
            <th>
                <select name="category" defaultValue={status} onChange={(e) => handleStatus(_id, e.target.value)} readOnly required className="select select-bordered border-[#ED1D24] ">
                    <option value="Pending" >Pending</option>
                    <option value="Working....">Working</option>
                    <option value="Completed">Completed</option>
                </select>
            </th>
        </tr>
    );
};

export default ServicesToDoRow;

ServicesToDoRow.propTypes = {
    service: PropTypes.object,
    number: PropTypes.number
}