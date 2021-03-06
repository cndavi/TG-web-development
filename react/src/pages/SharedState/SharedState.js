import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './SharedState.css'

const SharedState = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <Navigation />
      <div className='shared-state'>
        <h2>Hello Function {searchValue} !</h2>
        <input type='text' onChange={handleInputChange} />
        <h2 className='class'>Hello Class {searchValue} !</h2>
        <input type='text' onChange={handleInputChange} />
      </div>
    </>
  )
}

export default SharedState
