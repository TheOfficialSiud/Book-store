import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { Select } from 'flowbite-react';



const EditBooks = () => {
const {id} = useParams();
const{bookTitle, authorName,imageURL, category, bookDescription, bookPdfURL} = useLoaderData();

const bookCategories = [
  "Action and Adventure",
  "Classics",
  "Comic Book or Graphic Novel",
  "Detective and Mystery",
  "Fantasy",
  "Historical Fiction",
  "Horror",
  "science Fiction",
  "Autobiographies",
  "Self-Help",
  "Travel",
  "Cookbooks",
  "Business",
  "Programming",
  "Technology",
  "Art"
]

const [selectedCategory, setSelectedCategory] = useState(bookCategories[0]);

const handleChangeSelectedValue =(event)=>{
  console.log(event.target.value);
  setSelectedCategory(event.target.value);
}

//handle book submission
const handleUpdate = (event)=>{
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageURL = form.imageURL.value;
  const category = form.categoryName.value;
  const bookDescription = form.bookDescription.value;
  const bookPdfURL = form.bookPdfURL.value;

  const updatebookObj={
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPdfURL
  
  }

  // console.log(bookObj);



  // update Book data
  fetch(`https://book-store-backend-deployed.onrender.com/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatebookObj)
  })
  .then(res=>res.json())
  .then(data=>{
    alert("Book Updated Successfully")
    // setAllBooks(data);
  })  
} 


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Book</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

       {/* first_row  */}
      <div className='flex gap-8'>

        {/* book title */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required defaultValue={bookTitle}/>
      </div>

      {/* authorName */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName}/>
      </div>
      </div>
        
        {/* second_row */}
        <div className='flex gap-8'>

          {/* image url*/}
          <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value=" Book Image URL" />
          </div>
          <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image" required defaultValue={imageURL}/>
          </div>

          {/* category */}
          <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value=" Book Categeory" />
          </div>

          <Select id="inputState" name="categoryName" className="w-full rounded" value={selectedCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option)=>
              <option key={option} value={option}>{option}</option>)
          }
          </Select> 
          </div>
          </div>

        {/* third_row */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Decription" />
        </div>
        
      <Textarea
       id="bookDescription" name="bookDescription" 
       placeholder="Write your Book Description here..."
       required 
       className='w-full'
       rows={6} defaultValue={bookDescription}/>
      </div>
      {/* pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book PDF Link" />
        </div>
        <TextInput id="bookPdfURL" name='bookPdfURL' type="text" placeholder="PDF Link" required defaultValue={bookPdfURL}/> 
      </div>
        
        {/* submit button */} 
        <Button type="submit" className='mt-5'>Update Book</Button>
    </form>
    </div>
  )
}

export default EditBooks