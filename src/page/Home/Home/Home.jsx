import About from "../About/About";
import Banner from "../Banner/Banner";
import Chef from "../ChefSection/Chef";
import Faq from "../Faq/Faq";


const Home = () => {
    return (
        <div className="w-full">
            <Banner></Banner>
            <Chef></Chef>
            <About></About>
            <Faq></Faq>
        </div>
    );
};

export default Home;