import React from "react"
class UserClass extends React.Component {

    constructor(props){
        super(props);
        
        console.log(this.props.name + "Child constructor");
        this.state = {
            userInfo : {
                name : "dummyname",
                location : "getit",
                avatar_url : "https://dummyapi",
            }
        }
    }
    async componentDidMount(){
        console.log(this.props.name + "ComponentDidMount called");
        const data = await fetch("https://api.github.com/users/karlapraveenkumar");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate called")
    }
    render() {
        
        const {name, location, avatar_url} = this.state.userInfo;
        console.log(this.props.name + "Child render");
        
        return (
            <div className="user-card">
                <img src= {avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @karlapraveenkumar</h4>
            </div>
        )
    }
}
export default UserClass;