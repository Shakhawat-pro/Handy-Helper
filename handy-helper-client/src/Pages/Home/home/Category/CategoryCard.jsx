import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
 '../../../../Context/AuthProvider';

const CategoryCard = ({ cat }) => {
    const { category, img, _id } = cat;
    const navigate =useNavigate()

    const handleClick = (id) => {
        navigate(`/category/${id}`)
    }

    return (
        <div onClick={() => handleClick(_id)} className={`border-[4px] rounded-lg bg-white border-[#ED1D24] transition-transform hover:scale-105 text-center py-5 hover:-translate-y-10`}>
            <img className='h-20 mx-auto w-f' src={img} alt="" />
            <h1 className='text-[#ED1D24] text-xl font-bold'>{category}</h1>
        </div>
    );
};

export default CategoryCard;

CategoryCard.propTypes = {
    cat: PropTypes.object
};

