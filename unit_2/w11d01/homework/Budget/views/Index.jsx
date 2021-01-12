const React = require("react");
const Budget = require("../models/budget.js");


class Index extends React.Component {
    render() {
        const Budget = this.props.Budget;
        return (
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Budgtr</title>
                <link rel="stylesheet" href="/normalize.css"></link>
                <link rel="stylesheet" href="/skeleton.css"></link>
            </head>
            <body >
                <div class="container">
                    <h1>Budgtr ALL</h1>
                    <h3>{bankAccount}</h3>
                    <button><a href="/budget/new">Add a New Item</a></button>
                    <table>
                        {
                        budget.map((budget, i) => { 
                            return(
                                <tr>     
                                  <td>{budget.date}</td>
                                  <td key={i}><a href= {`/budget/${i}`}>{budget.name}</a></td>
                                  <td>{budget.from}</td>   
                                  <td>{budget.amount}</td> 
                                  {/* <td>{budget.tags}</td>  */}
                                </tr>
                            )
                        })}
                        
                    </table>
                </div>
            </body>
            </html>
        )
    }
}

module.exports = Index;