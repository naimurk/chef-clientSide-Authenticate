

const SingleCard = ({ item }) => {
    const {recipeName,ingredients,cookingMethod,rating} = item
    // console.log(recipeName);

    return (
        <div>
            <div className="card w-full h-[400px] p-14 bg-primary shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className="text-md font-bold text-white">Recipe Name</span> : {recipeName}</h2>
                    <p className="py-3"><span className="text-md font-bold text-white">ingredients</span> : {ingredients?.map(item => item).join(" , ")}</p>
                    <p><span className="text-md font-bold text-white"> Cooking Method</span>: {cookingMethod}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;