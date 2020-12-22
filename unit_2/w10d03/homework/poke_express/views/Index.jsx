const React = require("react");
const Layout = require("./Layout.jsx");


class Index extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <Layout>
                <h1>Pokemon Index Page</h1>
                <ul>
                    {
                        pokemon.map((pokemon,index)=> {
                            return (
                                <li key={index}>
                                    The <a href={`/pokemon/${index}`}>{pokemon.name}</a> is {pokemon.color} <br />
                                    {pokemon.readyToEat ? "Is ready to eat" : "Is not ready to eat"}
                                </li>
                            )
                        })
                    }
                </ul>
            </Layout>
        )
    }
}
module.exports = Index;
