import './App.css';
import React, {useState, useEffect} from 'react'
import { FaSearch } from "react-icons/fa"
import { GiCook } from "react-icons/gi";
import Recipe from './Recipe'

const App = () => {

  const APP_ID='13cd3ea1';
  const APP_KEY='902c018df8d20bc11553734bd7d6308e';

 //[] useeffect runs once, when the first time the app runs
 // [component] every other time the component re-renderes
 // nothing-it runs everytime anything re-renderes                                 
 // useEffect(()=>{
 //   console.log('effect deployed');
 //}, [])

 const [recipes, setRecipes] = useState([]);
 const [search, setSearch] = useState('');
 const [query, setQuery]=useState('biriyani');

 useEffect(()=>{
  getRecipes();
 },[query])

 const getRecipes = async()=>{
   const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const fetchedData= await response.json();
   setRecipes(fetchedData.hits);
   console.log(fetchedData);
 }

  const makesearch=(e)=>{
      setSearch(e.target.value);
  }

  const onSearch=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className='App' >
      <h> !tans recipe!!<GiCook/></h>
      <form onSubmit={onSearch} className='search-form'>
         <input className='search-bar' type='text' value={search} onChange={makesearch}  placeholder='Whaddya Wanna Eat Or Drink? Type In naaa!'/>
         <button className='btn' type='submit'> <FaSearch/></button> 
      
      </form>
      {recipes.map(recipe=>(
        <Recipe 
         
         key={recipe.recipe.label}
         ingredients={recipe.recipe.ingredients}
         title={recipe.recipe.label}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         cuisineType={recipe.recipe.cuisineType}
         dishType={recipe.recipe.dishType} 

         />
         
      ))}
    </div>
  )
}

export default App
