import React from "react";
import axios from "axios";

const [Quote, setQuote] = React.useState(setQuote)

const Simpson() = {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
    .then((response) => response.data)
    .then((data) => {

      setQuote(data.results[0]);

    });

}



export default Simpson; 