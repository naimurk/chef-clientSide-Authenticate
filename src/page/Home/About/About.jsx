// import Lottie from "lottie-react";
// import aboutjson from '../../../../about.json'
import aboutImg from '../../../assets/about1.jpg'

const About = () => {
    return (
        <div className="py-24">
            <h1 className=" text-5xl font-bold lg:pt-14 lg:pb-24 text-white text-center">know us</h1>
            <div className="flex w-full justify-between gap-10 items-center">
                <div className="lg:w-1/2 w-full"><img className=' mx-auto w-full rounded-xl lg:w-3/4' src={aboutImg} alt="" /></div>
                <div className="lg:w-1/2 w-full">
                    <h1 className="text-5xl text-primary pb-8 font-bold">About Us</h1>
                    <p>
                        Welcome to our website featuring the culinary talents of six exceptional Bangladeshi chefs! With a passion for authentic flavors, our chefs bring a diverse range of traditional and innovative recipes to your table. Drawing inspiration from the rich heritage of Bangladesh, they have honed their skills over years of experience. From the vibrant streets of Dhaka to the coastal regions of Chittagong, our chefs capture the essence of Bangladeshi cuisine. Join us on a gastronomic adventure as we share cherished family recipes and hidden gems. Explore our chef profiles and savor the vibrant spices, aromatic herbs, and delightful textures that define Bangladeshi cooking!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;