import {Component} from "react";

class UserClass extends Component{

    constructor(props){
        super(props)
       this.state={
        userInfo:{
            login:'name',
            id:'324',            
        }
       }
    //    console.log(this.props.name +' child constructor')
    }

async componentDidMount(){
    
    // console.log(this.props.name + ' child component did mount')
    // const data = await fetch('https://api.github.com/users/Sajid5713');
    // const json = await data.json();
    // console.log(this.props.name + 'after api call')
    // console.log(json)

    // this.setState({
    //     userInfo:{
    //         login:json.login,
    //         id:json.id,
    //     }
    // })

    // this.timer = setInterval(()=>{
    //     console.log('interval')
    // },1000)
}

componentDidUpdate(prevProps, prevState){
    console.log(prevProps,prevState)
    console.log('component update')
}

componentWillUnmount(){
    console.log('component is changes')
    // clearInterval(this.timer)
}

    render (){
        const {name,location} = this.props;
        // console.log(name + ' child render')
            return(
                <>
                    <h3>{this.state.userInfo.login}</h3>
                    <h5>{this.state.userInfo.id}</h5>
                </>
            )    
    }
}

export default UserClass;