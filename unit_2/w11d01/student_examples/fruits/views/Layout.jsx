const React = require("react");

class Layout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <title>My Fruits App</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <nav>
                        <a href="/fruits">Home</a>
                        <a href="/fruits/new">Create a new Fruit</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;