import React from 'react'
import { Link } from 'react-router-dom'
import { selectItems } from '../slices/contactslice.js'
import { useSelector } from 'react-redux';
import Contacts from "../components/Contacts"





const Home = () => {

  const items = useSelector(selectItems);

  console.log(items.length)
  return (
    <>
     <div className="w-[100%] flex flex-col items-center  px-[10rem]">
      <Link to="/contactform">
        <h1 className='bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded relative mt-[10%] '>Create a Contact</h1>
     </Link>

     {/* Avaialaible Contacts mapping  */}

    {  (items.length === 0) ? <h1 className='bg-transparent  text-lg font-extrabold text-black font-semibol py-2 px-4  rounded relative mt-[10%] '>No Availaible Contacts...</h1>:
        <div className='flex flex-row flex-wrap justify-center'>
        {items?.map((item:any,i:any) => (
          <Contacts
          key={i}
          first_name={item.first_name}
          last_name={item.last_name}
          mobile={item.mobile}
          city={item.city}
          status={item.status}
          />
          
        ))} 
        </div>
        }
     
   
                   
      </div>
    </>
  )
}

export default Home