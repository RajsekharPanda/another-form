import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData((prev)=> ({...prev, [name]: type === "checkbox" ? checked : value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing form data .....");
    console.log(formData)
  }
  return (
 <div className='flex flex-col items-center mt-2'>
  <form onSubmit={submitHandler}>
    <label htmlFor="firstName">First Name</label>
    <br />
    <input 
    type="text"
    name='firstName'
    id='firstName'
    placeholder='Rajsekhar'
    value={formData.firstName}
    onChange={changeHandler}
    className='outline'
    />

    <br />
    <br />

    <label htmlFor="lastName">Last Name</label>
    <br />
    <input 
    type="text"
    name='lastName'
    id='lastName'
    placeholder='Panda'
    value={formData.lastName}
    onChange={changeHandler}
    className='outline'
    />

    <br />
    <br />

    <label htmlFor="email">Email</label>
    <br />
    <input 
    type="email"
    name='email'
    id='email'
    placeholder='abc@gmail.com'
    value={formData.email}
    onChange={changeHandler}
    className='outline'
    />

    <br />
    <br />

    <label htmlFor="country">Country</label>
    <br />
    <select
    name="country"
    id="country"
    value={formData.country}
    onChange={changeHandler}
    className='outline'
    >
      <option>India</option>
      <option>United States</option>
      <option>African Union</option>
      <option>Mexico</option>
    </select>

    <br />
    <br />

    <label htmlFor="streetAddress">Street Address</label>
    <br />
    <input 
    type="text"
    name='streetAddress'
    id='streetAddress'
    placeholder='Bose-Street'
    value={formData.streetAddress}
    onChange={changeHandler}
    className='outline'
    />

    <br />
    <br />

    <label htmlFor="city">City</label>
    <br />
    <input 
    type="text"
    name='city'
    id='city'
    placeholder='Banglore'
    value={formData.city}
    onChange={changeHandler}
    className='outline'
    />


    <br />
    <br />

    <label htmlFor="state">State</label>
    <br />
    <input 
    type="text"
    name='state'
    id='state'
    placeholder='Karnataka'
    value={formData.state}
    onChange={changeHandler}
    className='outline'
    />


    <br />
    <br />

    <label htmlFor="postalCode">Postal-Code</label>
    <br />
    <input 
    type="text"
    name='postalCode'
    id='postalCode'
    placeholder='530068'
    value={formData.postalCode}
    onChange={changeHandler}
    className='outline'
    />


    <br />
    <br />

    <fieldset>
      <legend>Buy Email</legend>

      <div className='flex'>
      <input 
      type="checkbox"
      id='comments'
      name='comments'
      checked={formData.comments}
      onChange={changeHandler}
      />
      <div>
      <label htmlFor="comments">Comments</label>
      <p>get notified when someone posts a comment on a posting</p>
      </div>
      </div>

      <div className='flex'>
      <input 
      type="checkbox"
      id='candidates'
      name='candidates'
      checked={formData.candidates}
      onChange={changeHandler}
      />
      <div>
      <label htmlFor="candidates">candidates</label>
      <p>get notified when a candidate applies for a job</p>
      </div>
      </div>

      <div className='flex'>
      <input 
      type="checkbox"
      id='offers'
      name='offers'
      checked={formData.offers}
      onChange={changeHandler}
      />
      <div>
      <label htmlFor="offers">offers</label>
      <p>get notified when a candidate accepts or rejects an offer</p>
      </div>
      </div>
    </fieldset>

    <br />
    <br />

    <fieldset>
      <legend>Push Notifications</legend>
      <p>These are delivered via SMS to your mobile phone.</p>
      
      <input 
      type="radio"
      name='pushNotifications'
      id='pushEverything'
      value="Everything"
      onChange={changeHandler}
      />
      <label htmlFor="pushEverything">Everything</label>
      <br />
      <input 
      type="radio"
      name='pushNotifications'
      id='pushEmail'
      value="Same as email"
      onChange={changeHandler}
      />
      <label htmlFor="pushEmail">Same as Email</label>
      <br />
      <input 
      type="radio"
      name='pushNotifications'
      id='pushNothing'
      value="No Push Notifications"
      onChange={changeHandler}
      />
      <label htmlFor="pushNothing">No Push Notifications</label>
    </fieldset>

    <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>

  </form>
 </div>
  )
}

export default App
