import React from 'react'
import { Link , Route  , Routes  , useParams} from 'react-router-dom'
function BookList() {
  return (
    <>
      <div>BookList</div>
      <Link to={"/Book/1"}>Book1</Link>
      <br />
      <Link to={"/Book/2"}>Book2</Link>
      <br />
      <Link to={"/Book/3"}>Book3</Link>
      <br />
    </>
  );
}

export default BookList