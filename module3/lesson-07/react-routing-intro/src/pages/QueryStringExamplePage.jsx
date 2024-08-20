import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
 
function QueryStringExample(props) {
  const [searchParams, setSearchParams] = useSearchParams();
 
  // Get the values from the URL query strings 
  // Example: http://localhost:5173/example?place=Miami&destType=Hotel
  const place = searchParams.get("place");
  const destType = searchParams.get("destType");
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(e.target)
    // let params = {place, destType}
    // setSearchParams(params);
  }

  useEffect(() => {
    console.log('place', place)
    console.log('destType', destType);
  }, []);
 
  return (
    <div>
      <h2>Query String Example</h2>
      <p>
        Open the console to see the logged query string values
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="place" id="" placeholder='Place'/>
        <input type="text" name="destination" id="" placeholder='Destination' />
        <button type="submit">Find accomodation</button>
      </form>
    </div>
  )
}
 
export default QueryStringExample;