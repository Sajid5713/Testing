import React from 'react';
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
    'div',
    { 
        id:'parent',
    },
    [
        React.createElement(
            'div',
            {
                id:'child'
            },
            [
                React.createElement(
                    'h1',
                    {className:'h1'},
                    'I am an H11 tag'
                ),
                React.createElement(
                    'h2',
                    {},
                    'I am an H22 tag'
                )
            ],
            
        ),
        React.createElement(
            'div',
            {
                id:'child2'
            },
            [
                React.createElement(
                    'h1',
                    {className:'h1'},
                    'I am an H1 tag'
                ),
                React.createElement(
                    'h2',
                    {},
                    'I am an H2 tag'
                )
            ],
            
        )
    ]
)

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);