import { useState } from "react";

const User = (props)=>{
    const [Count] = useState(0);
    const [Count2] = useState(2);
    return (
        <div className="user-card">
            <h1>Count : {Count}</h1>
            <h1>Count2 : {Count2}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Location : Hyderabad</h3>
            <h4>Contact : @karlapraveenkumar</h4>
        </div>
    )
}
export default User;