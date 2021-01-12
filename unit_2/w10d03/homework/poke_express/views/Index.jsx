const nodemon = require('nodemon');
const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
    color: '#ffffff',
    backgroundColor: 'lightblue',
    textAlign: 'center',
  };
const textStyle = {
    textTransform: 'capitalize',
}
class Index extends React.Component{
    render(){
        const pokes = this.props.pokes;
        return (
            <body style={myStyle}>
                <h1>Look up all your Pokemon!</h1>
                <ul style={{ textDecoration: 'numbered' }}>
                    {
                        pokes.map((pokemon, index)=> {
                            return(
                                <li>
                                    <h1 style={textStyle}><a href={`/pokemon/${index}`}>{pokemon.name}</a></h1>
                                </li>
                            )
                        })
                    }
                
                </ul>
            </body>
        )
    }
}







module.exports = Index;