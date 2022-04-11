import React from "react";
import axios from "axios";


const Simpson = ({quote}) => {
    return (
<div>
    <p>{quote.quote}</p>
    <p>{quote.character}</p>
    <img src={quote.image} alt={quote.character}></img>
</div>
);
}


export default Simpson;