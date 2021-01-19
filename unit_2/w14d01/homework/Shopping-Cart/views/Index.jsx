const nodemon = require('nodemon');
const React = require('react');
const Products = require('../models/Products');
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
        const Prods = this.props.Products;
        return (
            <body style={myStyle}>
                <h1>Apple iPhones</h1>
                <ul style={{ textDecoration: 'numbered' }}>
                    {
                        Prods.map((Products, index)=> {
                            return(
                                <li>
                                    <h1 style={textStyle}><a href={`/Products/${index}`}>{Products.name}</a></h1>
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