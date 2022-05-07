import React from "react";

export default function Card(props){
    console.log(props);
let badgetext;
if(props.e.openspots===0){
    badgetext="SOLD OUT";
}
else if(props.e.openspots>0){
    badgetext="ONLINE";
}

    return(
<>
{/* <div className="cardblock">
<div >
    <img className="cardimg" src="https://images.unsplash.com/photo-1514283880237-cd47bb2961d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fCUyM3N3aW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="lifelesson"></img>
</div>
<div className="data1">
    <p>⭐ 5.0 <span>(6) USA</span></p>
    <p>Life lessons with Katie Zaferes</p>
        <p><b>from 136$ </b>/person</p>
</div>
</div> */}


<div className="cardblock">
{badgetext && <div className="badge">{badgetext}</div>}
<div >
    <img className="cardimg" src={props.e.img} alt="lifelesson"></img>
</div>
<div className="data1">
    <p>⭐ {props.e.rating} <span>{props.e.reviewcount} {props.e.country}</span></p>
    <p>{props.e.title}</p>
        <p><b>from {props.e.price} </b>/person</p>
</div>
</div>


</>
    );
}

