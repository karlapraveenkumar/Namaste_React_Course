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

            <div className=" justify-center">
            <   h1 className="text-center font-bold text-2xl p-2 m-2">About</h1>
                <div className="p-4 m-4">
                    <h1 className="text-lg text-center">LoggedInUser : </h1>
                    <UserContext.Consumer>
                        {({loggedInUser})=>(<h1 className="text-lg font-bold text-center">{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <h1 className="text-center font-bold">GitHub Info</h1>

                <UserClass name={"1st (class)"} location = {"Hyderabad (class)"}/>
            </div>

        )
    }
}

export default About;