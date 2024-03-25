import React from "react";
import ReactDOM from "react-dom/client";


// react element with react from roots
const header = React.createElement(
    "div",
    {
        className:"title",
        key : "title"
    },
    [
        React.createElement("h1",{}, "This is h1 tag"),
        React.createElement("h2",{}, "This is h2 tag"),
        React.createElement("h3",{},"This is h3 tag")
    ]
);


// functional component using jsx
const Header2 = (
    <div className="title">
        <h1>This is from h1 tag inside header2</h1>
        <h2>This is from h2 tag inside header2</h2>
        <h3>This is from h3 tag inside header2</h3>
    </div>
);

// another functional component
const HeaderComponent = ()=>(
    <div>
        <h1>I am learning React</h1>
    </div>
)

// react element
const number = 137;

// functional component usign jsx
const Header3 = ()=>(
    <div className="title">
        <h1>h1 tag inside functional component</h1>
        <h2>h2 tag inside functional component</h2>
        <h3>h3 tag inside functional component</h3>
        <h1>{number}</h1>
        <HeaderComponent/>

    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(header);
//root.render(<Header2/>);
root.render(<Header3/>);