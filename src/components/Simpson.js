import React from "react";


const Simpson = ({quote}) => {
    return ( quote && (
<div>
    <p>{quote.quote}</p>
    <p>{quote.character}</p>
    <img src={quote.image} alt={quote.character}></img>
</div>
    )
);
}


export default Simpson;