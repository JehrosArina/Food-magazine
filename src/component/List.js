import React from 'react'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  


import { faTrash, faEdit, faClose, faSave } from '@fortawesome/free-solid-svg-icons'
import { useState,useMemo } from 'react'
const List = ({data, setData}) => {


   const Trash = <FontAwesomeIcon icon={faTrash} />
   const Edit = <FontAwesomeIcon icon={faEdit} />
   const close = <FontAwesomeIcon icon={faClose} />
   const save = <FontAwesomeIcon icon={faSave} />

  const handleDelete = (itemId) => {
    // Filter out the item with the provided itemId from the data array
    const updatedData = data.filter(item => item.id !== itemId);
    // Update the state with the new data array without the deleted item
    setData(updatedData);
  };


  //EDIT ELEMENT DATA
  const [edittext, setEditText] = useState([])  //state for making some changes on the element

  //functionality to cancel edit button
  const handleCloseEditField =(id) =>{
  const CancelEdit = edittext.filter((el) => el.id !== id);
  setEditText(CancelEdit)

}
  const [editTitle, setEditTitle] =useState('')
  const [editCategories, setCategories] =useState('')
  const [editPriceAmount,setPriceAmount] =useState('')
const [iditIngredientsText,setIditIngredientsText] =useState('')
  

const handleEditTitle =(event) =>{
 const title = event.target.value;
 setEditTitle(title)
}

const handleEditCategory=(event) =>{
 const categoryText = event.target.value;
 setCategories(categoryText)
}
const handleEditPrice =(event) =>{
 const priceAmount = event.target.value;
 setPriceAmount(priceAmount)
}

const handleIngredientsText =(event) =>{
 const editIngredients = event.target.value;
 setIditIngredientsText(editIngredients.split(","));
}
 const handleEdit = (id) => {
    // Find the item to be edited using the provided id
    const itemToEdit = data.find((item) => item.id === id);
    if (itemToEdit) {
      // Add the item to the edittext state to enable edit mode
      setEditText([itemToEdit]);
      // Set the initial values for the edit fields
      setEditTitle(itemToEdit.recipeName);
      setCategories(itemToEdit.category);
      setPriceAmount(itemToEdit.price);
      // Join the ingredients array to a string for easy editing
      setIditIngredientsText(itemToEdit.ingredients.join(","));
    }
  };
 
 

//Save Functionality 
const memoizedhandleSave = useMemo(() =>{ // used memoized name function to get a better performance
return (id) =>{
 const updateData = edittext.find((el) => el.id === id);  // finding the same key Id
  if (updateData) {   // if true
    const start = performance.now();   // used a performance function
    updateData.recipeName = editTitle;  
    updateData.category = editCategories;
    updateData.price = editPriceAmount;
    updateData.ingredients = iditIngredientsText
    const end = performance.now();
    console.log(`Time taken by memoized saving changes: ${end - start}ms`);
    setEditText([...edittext, updateData]); 
    setEditText('')
  }
  }
},[edittext, editTitle,editCategories,editCategories,editPriceAmount,iditIngredientsText])  // dependencies are pass a second argument

  return (
     <div className='container'>
        <div className='image-container'>
          <img className='image' src={process.env.PUBLIC_URL + '/image/logo.jpg'} alt="My Image" />
        </div>
        <div className='formContainer'>
          {/* Use the map function to render each item in the data array */}
          {data.map(item => (
            <div key={item.id}>
              <div className='displayFood'>
             
              <img className='foodImage' src={process.env.PUBLIC_URL + item.image} alt={item.image} />
              <h3>{item.recipeName}</h3>
              <p>Category: {item.category}</p>
              <p>Price: {item.price}</p>
              
              <p className='ingredients'>Ingredients: {item.ingredients.join(", ")}</p>
               <button onClick={() => handleDelete(item.id)}>{Trash}</button>
                <button className='btnEdit' onClick={() => handleEdit(item.id)}>{Edit} </button>
              {/* Render the image using the 'image' property */}
                {edittext.length >0  && (
                      <>
                      {edittext.map(el =>{
                        return (
                        <div key={el.id}>
                          <div className='displayEditField'>
                           
                               <p>Edit Content</p>  
                               <div className='inputHolder'>
                               <input  required className='editText' Placeholder='Title ' onChange={handleEditTitle}></input>
                               <input required className='editText' Placeholder='Catergory 'onChange={handleEditCategory}></input>
                               <input  required className='editText' Placeholder='Price' onChange={handleEditPrice} ></input>
                               <textarea  required className='editText' Placeholder='Ingredients' onChange={handleIngredientsText} ></textarea>  
                               </div>
                               <div className='btnHolder'>
                               <button className='savebtn'onClick={()=> memoizedhandleSave(el.id)}>{save}</button>
                               <button className='closebtn'onClick={()=> handleCloseEditField(el.id)}>{close}</button> 
                               </div>
                              
                          </div>
                        </div>
                        )
                      })}
                      </>
                      
                   )}

              </div>
            
            </div>
          ))}
        </div>
      </div>
  )
}

export default List