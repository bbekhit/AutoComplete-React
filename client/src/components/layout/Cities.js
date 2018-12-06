import React from 'react'

const Cities = (props) => {
  return (
    <div className="city-item">
      {props.filteredCities.map((item,i) => 
          <ul key={i}>
            <li style={{listStyle:"none", margin:"0"}}>{item}</li>
          </ul>
        )}
    </div>
  )
}

export default Cities
