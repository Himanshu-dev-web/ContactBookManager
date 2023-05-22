import React,{useState} from 'react'
import { removeFromContact,updateContact } from '../slices/contactslice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

interface contactProps {
   // 👈️ allows dynamic keys and values
    first_name: string;
    last_name:string;
    mobile: number;
    city:string;
    status: string;
  }



const Contacts :React.FC<contactProps> = ({first_name,last_name,mobile,city,status}) => {

  const dispatch = useDispatch();
  const [ isEditing, setEditing ] = useState(false);
  const [ error, setError ] = useState(false);
  const navigate = useNavigate();

  const [state, setState ] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    city:"",
    status: "active"
})

const handleChange = (e: any) => {
  setState({
       ...state,
       [e.target.name]: e.target.value
   })
}
  const removeContact = () => {
    //remove item from redux
    dispatch(removeFromContact({mobile}));

    navigate("/"); 

  }

  const editContact = (mobile:any,first_name:any,last_name:any,city:any,status:any) => {
    setEditing(true);
    console.log(mobile,first_name,last_name,city,status);
    setState({...state,first_name,last_name,city,status,mobile})
  }

  const edit = () => {

    if(state.first_name==='' || state.last_name==='' || state.city==='' ){
      console.log(state);
      alert("please change something")
    }
    else{
      console.log(state)
      dispatch(updateContact(state));
    }
      setEditing(false);
    }

  return (
    <>
    {
      isEditing ? 
<div className="mx-5 min-h-screen grid place-content-center">
   <div className="bg-white  text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
   <form className=" bg-white rounded-lg shadow p-4 w-[100%]" >
      <label className="flex flex-row justify-center uppercase tracking-wide text-gray-700 text-lg underline font-bold mb-2" >
            Edit Form
          </label>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            First Name
          </label>
          <input value={state.first_name} required  onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" name='first_name' type="text" placeholder="Jane"></input>
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Last Name
          </label>
          <input required  value={state.last_name} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name"  name='last_name' type="text" placeholder="Doe"></input>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            City
          </label>
          <input value={state.city} onChange={handleChange} name='city' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="Delhi..."></input>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Status
          </label>
          <div className="relative">
            <select value={state.status}   onChange={handleChange} id="status" name='status'  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
              <option value={'active'}>Active</option>
              <option value={'inactive'}>In Active</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className=' flex flex-row justify-center'>
        <button type='button' onClick={edit} className=" w-[50%] my-6 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
          Edit
        </button>
        </div>
    </form>
 </div>
</div>

   :
   <div className="mx-5 min-h-screen grid place-content-center">
   <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
   <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://cdn.onlinewebfonts.com/svg/img_550782.png" alt="User avatar"></img>
   <p className="capitalize text-xl mt-1">{first_name}  <span>{last_name}</span> </p>
   <p className="capitalize text-md mt-1">{mobile}</p>
   <p className="capitalize text-md mt-1" >{city}</p>
   
     {(status === 'active') ?  <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>{status}</span>
     :  <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-red-500 rounded-full w-2.5 h-2.5 block mr-2"></div>{status}</span>}
  
  <div className='flex flex-col items-center'>
       <button type='submit' onClick={removeContact}  className="rounded-md bg-gradient-to-r from-red-500 to-red-600 text-lg text-white py-1 px-2 inline my-2">Delete</button>
       <button type='submit' onClick={() => editContact(mobile,first_name,last_name,city,status)}  className="rounded-md bg-gradient-to-r from-green-400 to-green-500 text-lg text-white py-1 px-2 inline my-2">Edit Contact</button>
  </div>
 </div>
</div>
    }  
    </>
  )
}

export default Contacts