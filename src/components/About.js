import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends Component{

    constructor(){
        super()
        // console.log('parent constructor')
    }

    componentDidMount(){  // used to call an api call after the render
        console.log('Parent component did mount')
    }

    render(){
        // console.log('parent render')
        return(
            <div className="container">
                <h1>About</h1>
                <p>This is a about page for food app</p>
    
                <User name="function" location='function Location'/>
                <UserClass name="First" location='Class Location'/>
                <UserClass name="Second" location='Class Location'/>
               
    
            </div>
        )
    }
}

export default About;