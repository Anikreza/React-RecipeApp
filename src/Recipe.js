import React, {useState} from 'react';



const Recipe = ({title, calories, image,ingredients,cuisineType, dishType} ) => {

   const [toggle, setToggle]=useState('true')
    
    const disprecipe =(e)=>{
        
    }

    const toggler =()=>{
        setToggle((prev)=> !prev);
    }
    return (
        <div className='main'>
            <h1>{title}</h1>
            <p> Origin: {cuisineType}</p>
            <p>{dishType}</p>
            <img className='im' src={image} alt=''/>
            <p> Total Calories: {calories}</p>
            <button className='btn1' onClick={toggler}> ingredients</button>
            <ul  className={toggle ? 'recipe-hidden' :'recipe-active' }> 
                {ingredients.map(ing=>
                 <li>{ing.text}</li>)}   
            </ul>        
        </div>
    )
}

export default Recipe
