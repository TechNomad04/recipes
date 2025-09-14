import './App.css';
import { useEffect, useState } from 'react';
import './cont.css'

function App () {
  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=110&skip=0')
    .then((res) => res.json()).then((data) => setRecipes(data.recipes))
    .catch((err) => console.log(err))
  });

  return (
    <div className='page'>
      <div className='header'>Recipes</div>
      <div className='container'>
        {recipes.map(recipe => (
          <div key={recipe.id} className='recipe-box'>
              <img src={recipe.image} className='image'/>
            <div className='details'>
              <div className='name'>{recipe.name}</div>
              <div className='servings'>Servings: {recipe.servings}</div>
              <div className='cuisine'>Cuisine: {recipe.cuisine}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='footer'>Footer</div>
    </div>
  )
}

export default App;
