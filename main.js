import React , {useCallback, useEffect,useState} from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";

function GithubProfile(){
// Header
//Body : 10 card show karenge
return(
    <>
    <Header></Header>
    <Body></Body>
    </>
)

}

ReactDom.createRoot(document.getElementById('root')).render(<GithubProfile/>);