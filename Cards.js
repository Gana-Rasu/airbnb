import React from "react";
import Card from "./Card";
import './Card.css';
import data from "./data";
console.log(data);
export default function Cards(){
// using the map function to access the elements of the data seperately and displaying it out properly
    const cards = data.map((e)=>{
        return (
            <Card
        key={e.id}
        // 
        e={e}

        // {...e}
        // img={e.img}
        // rating={e.rating} 
        // reviewcount={e.reviewcount} 
        // country={e.country}
        // title={e.title}
        // price={e.price}
        // openspots={e.openspots}
         />
        );
    })

    return(
        <>
        <div className="cards">
        {/* <Card img="https://images.unsplash.com/photo-1514283880237-cd47bb2961d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fCUyM3N3aW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" rating="5.0" reviewcount="(6)" country="USA" title="Life lessons with Katie Zaferes" price="136$" />
        <Card img="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" rating="5.0" reviewcount="(30)" country="INDIA" title="Wedding Photography" price="125$" />
        <Card img="https://images.unsplash.com/photo-1572111504021-40abd3479ddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" rating="4.8" reviewcount="(2)" country="USA" title="Group Mountain Bike" price="50$" /> */}
        {cards}
        </div>
        </>
    );
}