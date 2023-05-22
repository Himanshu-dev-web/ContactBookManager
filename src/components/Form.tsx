import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToContact } from '../slices/contactslice';
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    city:"",
    status: "active"
})

const handleChange = (e: any) => {
   setForm({
        ...form,
        [e.target.name]: e.target.value
    })

   
}

const addContact = (e:any) => {
  e.preventDefault()

 // console.log(form.first_name, form.last_name);
  if(form.first_name && form.last_name && form.mobile){
    dispatch(addToContact(form));
    navigate("/"); 
  }
  else{
    alert("Hey! Please Enter Name and Mobile") 
  }
}

  return (

  <>
  <div  className=" flex  flex-row justify-center pt-[10%]  	"> 

  <form className=" bg-white rounded-lg shadow p-4">
  <label className="flex flex-row justify-center uppercase tracking-wide text-gray-700 text-lg underline font-bold mb-2" >
        Contact Form
      </label>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        First Name
      </label>
      <input required value={form.first_name} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" name='first_name' type="text" placeholder="Jane"></input>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Last Name
      </label>
      <input required value={form.last_name} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name"  name='last_name' type="text" placeholder="Doe"></input>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Phone Number
      </label>
      <input required value={form.mobile} onChange={handleChange} name='mobile' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="9837463742"></input>
      <p className="text-gray-600 text-xs italic">Type Your Working Phone Number Above</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        City
      </label>
      <input value={form.city} onChange={handleChange} name='city' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="Delhi..."></input>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Status
      </label>
      <div className="relative">
        <select  value={form.status} onChange={handleChange} id="status" name='status'  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
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
    <button type='submit' onClick={addContact} className=" w-[20%] my-6 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
      Save
    </button>
    </div>
</form>

</div>

  </>
  )
}

export default Form