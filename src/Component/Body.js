import { useEffect, useState } from "react";
import useFetch from "../useFetch";

function Body(){

// ye wala part useFetch mein likh do , this is the custom hook
const {generateProfile,numberofProfile,setnumberofProfile,Profile}= useFetch();

//     // body me card ko display karna hai therefore jo bhi card display karna hai unki information fetch karna padega
  
//   const [Profile,setProfile] = useState([]);
//   const[numberofProfile,setnumberofProfile] = useState("");



// // ye user ke data ko la raha hai fetch wala
//  async function generateProfile(count){
//     const ran = Math.floor(1+Math.random()*1000);
  
//     const response =await fetch(`https://api.github.com/users?since=${ran}&per_page= ${count}`); // yaha pe hamne js ka variable daal dia `` isse lagana important hai
//     const data =await response.json();
  
//     // respose wale data ko json file  mein convert karega
    

//     setProfile(data);
//     // initailly toh profile khali hogi par jab data aayega toh usse setProfile mein daal denge
//   }

//   useEffect(()=>{
//    generateProfile(10);  //  means initially 10 profile hi dekhegi
//   },[]);

//   // empty array rakha hai yaha taki ye function ek hi baar call ho
//   // kyunki mujhe ek hi baar chahiye , ek hi baar profile frtch kar sake
  
  return (
    <div className="but">
    <input type="text" className="input" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
    <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile</button>
    {/* // numberofProfile ko Number mein convert kia hai because string mein tha */}

    <div className="profiles">
         {// yaha 10 card bana hai toh ek ek kar ke aaya vo value ke andar rakh dia
            Profile.map((value)=>{
                // map jab single line mein hota hai toh by default return kar deta hai but multiple mein return karwana padta hain
          return (<div key={value.id} className="cards">
                   <img src={value.avatar_url}></img>
                    <h2>{value.login}</h2>
                    <a href={value.html_url} target="_blank">Profile</a>
                     {/* // target _blank dia taki new page mein open ho */}
                 </div>)
            })
         } 
    </div>
    </div>
  )

}

export default Body;

// Try catch.functionality add karo
// .UseCallBack function add karne ki koshish
//.Search button: Name ke basis: User profile exist, display kara dena