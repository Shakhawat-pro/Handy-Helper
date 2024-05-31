import { useEffect } from "react";
import Banner from "../Banner/Banner";
import AboutUs from "./AboutUs";
import Category from "./Category/Category";
import PopularServices from "./PopularServices/PopularServices";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    useEffect(() =>{
        document.title= 'Handy Helper'
    },[])
    return (
        <div>
            <Banner></Banner>      
            <Category></Category>      
            <AboutUs></AboutUs>
            <PopularServices></PopularServices>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;