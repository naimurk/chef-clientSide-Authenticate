import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleCard = ({ item }) => {
    
    const { recipeName, ingredients, cookingMethod, rating } = item
    // console.log(recipeName);
    const [disable, setDisable] = useState(false)

    const handleFavorite = () => {
        setDisable(true)
        toast('added successfully')
    }
    return (
        <div>
            <div className="card w-full h-[500px] p-14 bg-primary shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className="text-md font-bold text-white">
                        Recipe Name</span> : {recipeName}
                    </h2>
                    <p className="py-3"><span className="text-md font-bold text-white">
                        ingredients</span> : {ingredients?.map(item => item).join(" , ")}
                    </p>
                    <p>
                        <span className="text-md font-bold text-white"> Cooking Method</span>: {cookingMethod}
                    </p>
                    <p>
                        <span className="text-md font-bold text-white"> Rating</span>: {rating}
                    </p>
                    <div className="card-actions justify-end">
                        <button disabled={disable} onClick={handleFavorite} className="btn">
                            Favorite
                        </button>
                        
                    </div>
                </div>

            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default SingleCard;


/**
 * import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleCard = ({ item }) => {
  const { recipeName, ingredients, cookingMethod, rating } = item;
  const [disable, setDisable] = useState(false);

  const handleFavorite = () => {
    setDisable(true);
    toast('Added to favorites!');
  };

  return (
    <div>
      <div className="card w-full h-[500px] p-14 bg-primary shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <span className="text-md font-bold text-white">Recipe Name</span>: {recipeName}
          </h2>
          <p className="py-3">
            <span className="text-md font-bold text-white">Ingredients</span>: {ingredients?.join(", ")}
          </p>
          <p>
            <span className="text-md font-bold text-white">Cooking Method</span>: {cookingMethod}
          </p>
          <p>
            <span className="text-md font-bold text-white">Rating</span>: {rating}
          </p>
          <div className="card-actions justify-end">
            <button disabled={disable} onClick={handleFavorite} className="btn">
              Favorite
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

 * 
 */