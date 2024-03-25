import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        //console.log("Parent constructor")
    }
    componentDidMount(){
        //console.log("Parent componetDidMount called");

    }
    render (){
        //console.log("Parent rendering");
        return (
            <div>
                <h1>About</h1>
                <div>
                    loggedInUser :
                    <UserContext.Consumer>
                        {({loggedInUser})=>(<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <h2>This is React Web Series</h2>
                <UserClass name={"1st (class)"} location = {"Hyderabad (class)"}/>

            </div>

        )
    }
}

export default About;