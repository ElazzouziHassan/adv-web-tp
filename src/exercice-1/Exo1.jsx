import React, { useRef, useState } from 'react'

function Exo1() {

  const [data, setData] = useState({
    name: '',
    email: ''
  });

  // const emailRef = useRef();
  // const nomRef = useRef();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nom:', data.name);
    console.log('Email:', data.email);
  };

  return (
    <div className="exo-1 sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-y-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input 
            // ref={nomRef} 
            type="text" 
            name="nom" 
            value={data.name}  
            onChange={handleInputChange} 
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input 
            // ref={emailRef}
            type="email" 
            name="nom" 
            value={data.email}
            onChange={handleInputChange} 
            // required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Exo1