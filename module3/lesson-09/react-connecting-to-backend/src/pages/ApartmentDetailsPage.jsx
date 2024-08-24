import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ApartmentDetailsPage(){
    const [apartment, setApartment] = useState({});

    const { apartmentId } = useParams();

    const getApartment =  async () => {
       try {
        const response=  await axios.get(`http://localhost:5005/apartments/${apartmentId}`)
        setApartment(response.data)
       } catch (error) {
            console.log(error)
       }
    }

    useEffect(()=>{
        getApartment()
    }, [])
    return(
        <div>
            <h1>Apartment Details Page</h1>

            <h3>{apartment.title}</h3>
            <img src={apartment.img} alt="apartment_image" />
            <p>{apartment.pricePerDay}</p>
        </div>
    )
}

export default ApartmentDetailsPage;