 const Snowflake = (props) => {
    return(
        <p className="Snowflake" id={`item${props.id}`} style={props.style}>
            *
        </p>
    )
 }

 export default Snowflake;