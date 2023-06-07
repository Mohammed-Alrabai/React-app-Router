import React from 'react'
import { Link , Route  , Routes  , useParams} from 'react-router-dom'
function Book() {
  const {id} = useParams();
    return (
      <>
        <h1>Book</h1>
        <div style={{display:'flex' , gap : '10px'}}>
          <p>BookId : {id}</p>
        </div>
      </>
    );
}

export default Book