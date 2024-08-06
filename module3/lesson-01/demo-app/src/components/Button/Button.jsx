function Button(props){
    return(
        // eslint-disable-next-line react/prop-types
        <button onClick={props.action}>{props.banana}</button>
    )
}

export default Button;