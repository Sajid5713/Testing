import { useRouteError } from "react-router";

const Error = () => {
        
    const {data,status,statusText} = useRouteError();
    
    return(
        <>
            <h1>{status}</h1>
            <h2>{statusText}</h2>
            <p>{data}</p>
        </>
    )
}

export default Error;