import { useState, useEffect } from "react";
import axios from 'axios';
import { Spin } from 'antd';
import { Link } from "react-router-dom";
 
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {                              
    axios
      .get("http://localhost:5005/apartments")
      .then((response) => {
        setApartments(response.data)
      });
    
  }, [] ); 
  
  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.length === 0 ? <Spin /> : 
          apartments.map((apartment) => (
            <div key={apartment._id} className="card">
             <Link to={`/apartments/${apartment._id}`}><img src={apartment.img} alt="apartment" /></Link> 
              <h3>{apartment.title}</h3>
              <p>Price: {apartment.pricePerDay}</p>
            </div>
      ))}
    </div>
  );
}
 
export default ApartmentsPage;