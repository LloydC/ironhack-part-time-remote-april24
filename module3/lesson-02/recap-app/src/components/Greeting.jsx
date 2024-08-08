function Greeting(props) {
    const message = `Hello ${props.firstName} ${props.lastName}!`;
   
    return (
      <div>
        <u>{message}</u>
      </div>
    );
  }
   
  export default Greeting;