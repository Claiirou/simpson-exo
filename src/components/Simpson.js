import React from "react";
import axios from "axios";

export default class QuoteList extends React.Component{

    state = {
        quote: [],
    };

componentDidMount() {
    axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes?count=10`)
    .then(res => {
        console.log(res);
        this.setState({quote: res.data});
    });
}

render(){
    return(
        <ul>
            {this.state.quote.map(quote => <li>{quote.name}</li>)}
        </ul>
    )
}

}




/*const [Quote, setQuote] = React.useState(setQuote)
const Simpson() = {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
    .then((response) => response.data)
    .then((data) => {
      setQuote(data.results[0]);
    });
}*/



