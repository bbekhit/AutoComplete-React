import React from 'react'
import {Link} from "react-router-dom"

const Landing = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className='row align-items-center text-center landing'>
          <div className="col-md-12">
            <Link to="/cities" className="btn btn-lg btn-light mr-2">
              City
            </Link>
            <Link to="/books" className="btn btn-lg btn-light">
              Book
           </Link>
         </div>
        </div>
     </div>
    </div>
  )
}

export default Landing
