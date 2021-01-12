const React = require('react');

class New extends React.Component {
    render() {
        return (
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
                <h1>Add a New Item</h1>
                <form action="/budget" method="POST">
                    Date: <input type="text" name="date"/> <br/>
                    Name: <input type="text" name="name"/> <br/>
                    Amount: <input type="text" name="amount"/> <br/>
                    From: <input type="text" name="from"/> <br/>
                    Tags: <input type="text" name="tags"/> <br/>
                    <input type="submit" name="" value="Add Item"/>
                </form>
            </div>
           </body>
           </html> 
        )
    }
}
module.exports = New;