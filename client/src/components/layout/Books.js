import React from 'react'

const Books = (props) => {
  return (
    <div className="book-item">
      {props.filteredBooks.map((item,i) => 
          <ul key={i}>
            <li  style={{listStyle:"none", margin:"0"}}>Book:{item.title} - Author:{item.author}</li>
          </ul>
        )}
    </div>
  )
}

export default Books
