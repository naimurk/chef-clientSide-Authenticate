import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import LazyLoad from 'react-lazy-load';




const Chef = () => {
  const [chef, setChef] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    fetch('http://localhost:5000/chef')
      .then(res => res.json())
      .then(data => setChef(data))
  }, [])
  // console.log(chef);
  return (
    <div>
      <h1 className='lg:text-5xl text-4xl font-bold lg:pt-14 lg:pb-24 text-white text-center'>Our Honorable Chef</h1>

      <div className='grid mt-24 grid-cols-1 lg:grid-cols-3 justify-center items-center gap-11'>

        {
          chef && chef?.map(item => <div
            key={item?.id}
            className="card w-full bg-base-100 shadow-xl">

            <LazyLoad threshold={0.95}><img className=' h-[400px] lg:h-[500px] w-full lg:w-[400px] ' src={item?.chefPicture} alt="Shoes" /></LazyLoad>
            <div className="card-body">
              <h2 className="card-title"> Name:  {item?.chefName}</h2>
              <p> Experience : {item?.yearsOfExperience}</p>
              <p> Number Of Recipe :  {item?.numberOfRecipes?.length}</p>
              <p> Likes : {item?.likes}</p>
              <div className="card-actions justify-end">
                <Link to={user?.email ? `/chef/${item?.id}` : '/login'}><button className='btn btn-primary'>view  details</button></Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Chef;