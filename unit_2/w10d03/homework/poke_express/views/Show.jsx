// require react
const React = require('react');
const Layout = require("./Layout.jsx");
class Show extends React.Component {
    // props = {
        //pokemon: ''
    //}
    render() {
        const pokemon = this.props.pokemon;
        // const isReadyToEat;
        // if (pokemon.readyToEat === true) {
        //     isReadyToEat = "Is ready to eat";
        // } else {
        //     isReadyToEat = "Is not ready to eat";
        // }
        return (
            <Layout>
                <h1>Show Page</h1>
                <p>The {pokemon.name} is {pokemon.color}</p>
                <p>{pokemon.readyToEat === true ? "Is ready to eat" : "Is not ready to eat"}</p>       
            </Layout>
        )
    }
}
module.exports = Show;