const React = require('react');
const myStyle = {
    color: '#ffffff',
    backgroundColor: 'red',
    textAlign: 'center',
  };
class Show extends React.Component{
    render(){
        const newImage = (this.props.Prods.img + '.jpg');
        return(
            <body style={myStyle}>
                <h1>Gotta catch 'em all!</h1>
                <p>WOW!, You caught a:</p> 
                <h2>{this.props.Prods.name}</h2>
                <img src={newImage}></img>
                <h3>This Products has a price of {this.props.Prods.price}</h3>
                <h3>Back to the <a href={`/Products/`}>Products</a></h3>
            </body>
        )
    }
}

module.exports = Show;