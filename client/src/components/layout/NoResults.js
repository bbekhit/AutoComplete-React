import React from 'react'

const NoResults = () => {
  return (
    <div className="container">
       <div className="row justify-content-center d-flex flex-column align-items-center" style={{marginTop:"200px"}}>
         <i className="fa fa-frown-o fa-2x"/>
         <div>Oops!! No Results Found</div>
       </div>
    </div>
  )
}

export default NoResults
