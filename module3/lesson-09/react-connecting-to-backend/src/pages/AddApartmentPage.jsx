import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");     // <== ADD
  const [price, setPrice] = useState(1);            // <== ADD
 
  const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault()

    const body = { title: headline, pricePerDay: price };
    
    axios
      .post("http://localhost:5005/apartments", body)
      .then((response) => {
        // Reset the state
        setHeadline("");
        setPrice(1);
        navigate('/');
      });
 }

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />
 
        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        
        <button type="submit">Create Apartment</button>

      </form>
    </div>
  );
}
 
export default AddApartmentPage;