import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://handy-helper-server.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCategory(data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-5"><span className="loading text-[#FF3811] loading-infinity w-32"></span></div>
        );
    }

    return (
        <div className="max-w-[1200px] w-11/12 mx-auto relative max-lg:mt-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 w-full gap-8 lg:absolute cursor-pointer bottom-[-55px]" data-aos="zoom-in-up">
                {category && category.map((cat) => (
                    <div className={`${cat.id === 5 && 'col-span-1 md:col-span-2 lg:col-span-1'}`} key={cat.id}>
                        <CategoryCard cat={cat} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
