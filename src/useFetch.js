 import { useState,useEffect } from "react";

export default function useFetch(){
      // body me card ko display karna hai therefore jo bhi card display karna hai unki information fetch karna padega
  
  const [Profile,setProfile] = useState([]);
  const[numberofProfile,setnumberofProfile] = useState("");



// ye user ke data ko la raha hai fetch wala
 async function generateProfile(count){
    const ran = Math.floor(1+Math.random()*1000);
  
    const response =await fetch(`https://api.github.com/users?since=${ran}&per_page= ${count}`); // yaha pe hamne js ka variable daal dia `` isse lagana important hai
    const data =await response.json();
  
    // respose wale data ko json file  mein convert karega
    

    setProfile(data);
    // initailly toh profile khali hogi par jab data aayega toh usse setProfile mein daal denge
  }

  useEffect(()=>{
   generateProfile(10);  //  means initially 10 profile hi dekhegi
  },[]);

  // empty array rakha hai yaha taki ye function ek hi baar call ho
  // kyunki mujhe ek hi baar chahiye , ek hi baar profile frtch kar sake

  return {generateProfile,numberofProfile,setnumberofProfile,Profile};
  // jo jo return kara rahe hai usse dekho dyhann se
}