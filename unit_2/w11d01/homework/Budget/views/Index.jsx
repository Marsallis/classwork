const React = require("react");
const Budget = require("../models/budget.js");
const Layout = require("./Layout.jsx");

class Index extends React.Component {
    render() {
        const Budget = this.props.Budget;
        return (
            <Layout>
                <h1>Budgets Index Page</h1>
                <table>
                    {
                        Budget.map((budget,index)=> {
                            return (
                                <li key={index}>
                                    The <a href={`/budgets/${index}`}>{budget.name}</a> is {budget.color} <br />
                                    {budget.readyToEat ? "Is ready to eat" : "Is not ready to eat"}
                                </li>
                            )
                        })
                    }
                </table>
            </Layout>
        )
    }
}

module.exports = Index;