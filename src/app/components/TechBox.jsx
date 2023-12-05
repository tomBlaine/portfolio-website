import React from 'react'

const TechBox = ({ title }) => {
  return (
    <div class="bg-primary-800 text-lg text-white inline-block px-2 shadow-lg text-center font-semibold mr-2 mb-3 whitespace-nowrap">
        <p>{title}</p>
    </div>          
  )
}

export default TechBox