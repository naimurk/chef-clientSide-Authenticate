import { useLoaderData } from 'react-router-dom'
import SingleCard from './SingleCard';
import { useEffect, useState } from 'react';

const SingleSpecific = () => {
    const [loading , setloading] = useState(true)
    const loadData = useLoaderData();
    // const [loading , setloading] = useState(true)
    const {chefName,  numberOfRecipes} = loadData;
    console.log(numberOfRecipes);
    useEffect(()=> {
        if(loadData){
            setloading(false)
        }
    },[loadData])
    // console.log(loadData);
    return (
        loading ? <><h1 className='text-7xl text-white'>sayem</h1></> : <>
        <div className='my-24'>
            <div className='mt-14' style={{
                backgroundImage: 'url("https://i.ibb.co/s355FQZ/vegetables-set-left-black-slate.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#f1f1f1',
                width: '100%',
                height: '500px',
                position: 'relative'
            }}>

                <div className='flex justify-center items-center' style={{
                    position : "absolute",
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '500px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>
                   
                 <div className=''> <h1 className='text-7xl font-bold text-slate-300'>{chefName}</h1></div>

                </div>

            </div>
            <div className='py-16'>
                 <h1 className=' text-slate-300 text-5xl text-center'> Recipe of The  Chef</h1>
                 <div className='grid my-12 grid-cols-3 gap-12 justify-center items-center'>
                     {
                       numberOfRecipes?.map((item, index)=> <SingleCard
                       key={index}
                       item={item}
                       >

                       </SingleCard>) 
                     }
                 </div>
            </div>
        </div>
        </>
    );
};

export default SingleSpecific;