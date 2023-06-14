

const Banner = () => {
    return (
        <div className="lg:py-28 py-14 w-full lg:flex  lg:items-center lg:justify-between lg:gap-16">

            <div className="lg:w-1/2 w-full">
                  <h1 className="lg:text-7xl text-4xl font-bold text-slate-100"> Unveiling the Mastery of Bangladeshi Chefs</h1>
                  <p className="text-xl py-10">Experience the authentic taste of Bengal with our website, where renowned Bangladeshi chefs share their culinary mastery through a tantalizing array of dishes and stories that celebrate Bangladeshi gastronomy.</p>
                  <button className="btn btn-primary"> Explore </button>
            </div>

            <div className="lg:w-1/2 mt-5 lg:mt-0 w-full">
                 <img  className="rounded-lg w-full" src="https://i.ibb.co/6tbQhqv/rashedul-islam-hridoy-T9l-EAb-Njc4-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;