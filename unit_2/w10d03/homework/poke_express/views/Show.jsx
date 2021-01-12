const React = require('react');
const myStyle = {
    color: '#ffffff',
    backgroundColor: 'red',
    textAlign: 'center',
  };
class Show extends React.Component{
    render(){
        const newImage = (this.props.pokes.img + '.jpg');
        return(
            <body style={myStyle}>
                <h1>Gotta catch 'em all!</h1>
                <p>WOW!, You caught a:</p> 
                <h2>{this.props.pokes.name}</h2>
                <img src={newImage}></img>
                <h3>This pokemon has a HP stat of {this.props.pokes.hp}</h3>
                <h3>This pokemon has an attack stat of {this.props.pokes.attack}</h3>
                <h3>Back to the <a href={`/pokemon/`}>Pokedex</a></h3>
            </body>
        )
    }
}

module.exports = Show;