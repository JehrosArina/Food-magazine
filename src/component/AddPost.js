import { useState } from "react";
import './AddPost.css'
const AddPost = ({ data, setData }) => {

  const [image, setImage] = useState(null);
  const [recipe, setRecipe] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");


const handleImageChange = (event) => {
  const file = event.target.files[0];
  setImage(file);
};

const handlerecipe = (event) => {
  const value = event.target.value;
  setRecipe(value);
};

const handleCategory = (event) => {
  const value = event.target.value;
  setCategory(value);
};
const handlePrice = (event) => {
  const value = event.target.value;
  setPrice(value);
};

const handleingredients = (event) => {
  const value = event.target.value;
  setIngredients(value);
};


const handleSubmit = (event) => {
  event.preventDefault();

  // Create a new post object
  const newPost = {
    id: Date.now(),
    image: URL.createObjectURL(image),
    recipeName: recipe,
    category: category,
    price: price,
    ingredients: ingredients.split("\n").map((ingredient) => ingredient.trim()),
  };

  // Update the posts state with the new post
  setData((prevPosts) => [...prevPosts, newPost]);

  // Clear the form inputs
  setImage(null);
  setRecipe("");
  setCategory("");
  setIngredients('')
  setPrice('')
};


return (
  < div className="containerPost">
    
   <h2 className="headerTitle">New Post</h2>
    
    <form onSubmit={handleSubmit}>

      <div className="forContainer">
       <div className="recipe">
        <label htmlFor="title" >Recipe Name</label>
        <input className='recipeText' placeholder="Recipe Name" required type="text" id="title" value={recipe} onChange={handlerecipe} />
      </div>
      <div className="category">
        <label htmlFor="title" >Category</label>
        <input className='categorText' placeholder="Category" required type="text" id="title" value={category} onChange={handleCategory} />
      </div>

        <div className="price">
        <label htmlFor="title" >Price</label>
        <input className='priceText' placeholder="Price" required type="text" id="title" value={price} onChange={handlePrice} />
      </div>

      <div className="ingreditnesName">
        <label htmlFor="text" >Ingredients</label>
        <textarea className='textArea'placeholder="Add ingedients" id="text" required value={ingredients} onChange={handleingredients}></textarea>
      </div>
       <div className="uploadImage"> 
        <label htmlFor="image" ></label>
        <input  type="file" accept="image/*"  onChange={handleImageChange}  />
      </div>
      
       <button className='postBtn' type="submit">Save</button>
   </div>

    <div className="imageContainer">
      
       {image && (
          <div className="imagePreview">
            <img src={URL.createObjectURL(image)} alt="Image Preview" className="imageDisplay"/>
          </div>
          
        )}
        </div>

    </form>
  </div>
);

};
export default AddPost
