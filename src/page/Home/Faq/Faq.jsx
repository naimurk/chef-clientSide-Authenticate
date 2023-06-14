// import Lottie from "lottie-react";
// import faqjson from '../../../../faq.json'
import faqImg from '../../../assets/about.jpg'

const Faq = () => {
    return (
        <div className="lg:py-24 py-14">
            <h1 className=" lg:text-5xl text-4xl pb-14 font-bold lg:pt-14 lg:pb-24 text-white text-center">FAQ</h1>
            <div className="lg:flex w-full flex-row-reverse justify-between gap-16 items-center">
            <div className="lg:w-1/2 w-full"><img className=' mx-auto w-full rounded-xl lg:w-3/4' src={faqImg} alt="" /></div>                <div className="lg:w-1/2 w-full">
                    <h1 className="lg:text-5xl text-4xl py-8 text-primary pb-8 font-bold">Frequently Asked Questions</h1>
                    <div>
                        {/* one */}
                        <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                            Are the recipes on your website suitable for beginners?
                            </div>
                            <div className="collapse-content">
                                <p>Our recipes are designed to cater to all skill levels, including beginners. We provide clear instructions, step-by-step guides, and helpful tips to ensure that even novice cooks can successfully recreate the flavors of Bangladeshi cuisine.</p>

                            </div>
                        </div>

                        {/* one */}
                        <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Can I substitute ingredients in the recipes ?
                            </div>
                            <div className="collapse-content">
                                <p>While we encourage you to explore and experiment, some traditional Bangladeshi recipes rely on specific ingredients to achieve their authentic flavors. However, we understand that certain ingredients may not be readily available everywhere. In such cases, we provide suggestions for possible substitutions, ensuring you can still enjoy the essence of the dish.</p>

                            </div>
                        </div>


                        {/* one */}
                        <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                                Are your recipes suitable for dietary restrictions or allergies?
                            </div>
                            <div className="collapse-content">
                                <p>Are your recipes suitable for dietary restrictions or allergies?</p>
                            </div>
                        </div>
                        {/* one */}
                        <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-200">
                            <div className="collapse-title text-xl font-medium">
                            Can I request specific recipes or ask for cooking tips?
                            </div>
                            <div className="collapse-content">
                                <p>Absolutely! We welcome your recipe requests and are happy to provide cooking tips and advice. You can reach out to us through our contact page or join our community forum to engage with other cooking enthusiasts and share your ideas, questions, and suggestions.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;