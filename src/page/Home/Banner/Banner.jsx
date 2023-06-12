

const Banner = () => {
    return (
        <div className="lg:py-28 w-full flex items-center justify-between gap-16">

            <div className="w-1/2">
                  <h1 className="text-7xl font-bold text-slate-100"> Unveiling the Mastery of Bangladeshi Chefs</h1>
                  <p className="text-xl py-10">Experience the authentic taste of Bengal with our website, where renowned Bangladeshi chefs share their culinary mastery through a tantalizing array of dishes and stories that celebrate Bangladeshi gastronomy.</p>
                  <button className="btn btn-primary"> Explore </button>
            </div>

            <div className="w-1/2">
                 <img className="rounded-lg" src="https://i.ibb.co/6tbQhqv/rashedul-islam-hridoy-T9l-EAb-Njc4-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;