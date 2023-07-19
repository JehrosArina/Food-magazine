import './App.css';
import Header from './component/Header';

import 'bootstrap/dist/css/bootstrap.css'; //npm install bootstrap
import { useState } from 'react';
import List from './component/List';
import AddPost from './component/AddPost';

function App() {
  const [searchResult, setsearchResult] =useState([]) // for Search result
  console.log('tihis is the result')
  console.log(searchResult)
  const [data, setData] = useState([
    {
      "id": 1,
      "recipeName": "Classic Beef Burger",
      "category": "Beef Burgers",
      "price": 100,
      "ingredients": ["Ground beef", "Burger buns", "Lettuce", "Tomato", "Onion", "Cheese", "Ketchup", "Mustard", "Salt", "Pepper"],
     "image": "/image/1.jpg" // Update the image path here
    },
    {
      "id": 2,
      "recipeName": "Veggie Burger",
      "category": "Vegetarian Burgers",
      "price": 100,
      "ingredients": ["Veggie patty", "Burger buns", "Lettuce", "Tomato", "Onion", "Cheese", "Mayonnaise", "Ketchup", "Salt", "Pepper"],
      "image": "/image/2.jpg" // Update the image path here
    },
    {
      "id": 3,
      "recipeName": "Chicken Avocado Burger",
      "category": "Chicken Burgers",
      "price": 100,
      "ingredients": ["Chicken patty", "Burger buns", "Avocado slices", "Lettuce", "Tomato", "Onion", "Cheese", "Mayonnaise", "Salt", "Pepper"],
      "image": "/image/3.jpg" // Update the image path here
    },
    {
      "id": 4,
      "recipeName": "Mushroom Swiss Burger",
      "category": "Specialty Burgers",
      "price": 100,
      "ingredients": ["Beef patty", "Burger buns", "Sauteed mushrooms", "Swiss cheese", "Lettuce", "Tomato", "Onion", "Mayonnaise", "Salt", "Pepper"],
      "image": "/image/4.jpg" // Update the image path here
    },
    {
      "id": 5,
      "recipeName": "Beyond Meat Burger",
      "category": "Plant-Based Burgers",
      "price": 100,
      "ingredients": ["Beyond Meat patty", "Burger buns", "Lettuce", "Tomato", "Onion", "Vegan cheese", "Vegan mayonnaise", "Ketchup", "Salt", "Pepper"],
      "image": "/image/5.jpg" // Update the image path here
    }
  ]);

  // console.log(data);

  return (
    <div className="App">
   
      <Header data={data} setData={setData} searchResult={searchResult} setsearchResult={setsearchResult}/>

      <div className='post'>
              <AddPost data={data} setData={setData}  />
      </div>

         <List data={searchResult.length > 0 ? searchResult : data} setData={setData} />
    
    <footer>
      <p>All right reserve &copy; {new Date().getFullYear()}</p>
    </footer>
    </div>
  );
}

export default App;