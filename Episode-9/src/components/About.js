import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("Parent componetDidMount called");

    }
    render (){
        console.log("Parent rendering");
        return (
            <div>
                <h1>About</h1>
                <h2>This is React Web Series</h2>
                <UserClass name={"1st (class)"} location = {"Hyderabad (class)"}/>
            </div>
        )
    }
}

export default About;