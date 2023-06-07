import React from 'react'
import { Route , Routes , Link , useParams } from 'react-router-dom'
import Home from './componant/Home'
import About from './componant/About'
import Navbar from './componant/Navbar'
import NotFound from './componant/NotFound'
import Book from './componant/Book'
import BookList from './componant/BookList'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


        <Route path='/book'>
        <Route path="" element={<BookList />}></Route>
        {/* <Route path="/book/" element={<BookList />} /> */}
        <Route path=":id" element={<Book />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
