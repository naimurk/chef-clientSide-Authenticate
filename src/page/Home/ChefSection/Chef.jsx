import  { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const Chef = () => {
   const [chef , setChef] = useState([])
   const {user} = useContext(AuthContext)

   useEffect(()=> {
    fetch('http://localhost:5000/chef')
    .then(res => res.json())
    .then(data => setChef(data))
   }, [])
  console.log(chef);
    return (
      // <img className='h-[500px] w-full' src={item?.chefPicture} alt="Shoes" />
        <div className='grid grid-cols-3 justify-center items-center gap-11'>
           {
             chef && chef.map(item => <div
             key={item?.id}
             className="card w-96 bg-base-100 shadow-xl">
             {/* <LazyLoadImage height = {1} src= {item?.chefPicture}></LazyLoadImage> */}
             <LazyLoad width={400} threshold={0.95}><img className=' h-[500px] ' src={item?.chefPicture} alt="Shoes" /></LazyLoad>
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
    );
};

export default Chef;