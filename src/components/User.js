import { useEffect, useState } from "react";

const User = ({name,location}) => {

    const [count,setCount] = useState(0);
    

    useEffect(  () => {
        
        const a = setInterval(()=>{
            console.log('Interval cpunt')
        },1000)


        return ()=>{
            console.log('compoent leave in Fn')
            clearInterval(a);
        }
        
    })


    return(
        <>
            <h3>{name}</h3>
            <h5>{location}</h5>
        </>
    )
}


export default User;