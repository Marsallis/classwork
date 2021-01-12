const React = require('react');

class Show extends React.Component {
    render(){
        const budget = this.props.Budget;
        
        return(
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Budgtr</title>
                <link rel="stylesheet" href="/normalize.css"></link>
                <link rel="stylesheet" href="/skeleton.css"></link>
            </head>
            <body>
                <div class="container">
                    <h1>{budget.name}</h1>
                    <button><a href="/budget">Back</a></button>
                    <p><strong>date</strong></p>
                    <p><blockquote>{budget.date}</blockquote></p>
                    <p><strong>name</strong></p>
                    <p><blockquote>{budget.name}</blockquote></p>
                    <p><strong>from</strong></p>
                    <p><blockquote>{budget.from}</blockquote></p>
                    <p><strong>amount</strong></p>
                    <p><blockquote>{budget.amount}</blockquote></p>
                    <p><strong>tags</strong></p>
                    <p><blockquote>{budget.tags}</blockquote></p>
                    
                </div>
            </body>
            </html>
        ) 
    }   
}

module.exports = Show;