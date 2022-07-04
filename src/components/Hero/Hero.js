import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import "./Hero.css"

export default function Hero() {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Find A Perfect House </h1>
        <p className='search-text'> Search the largest section of luxury high-rise appartments, multi-family homes and luxary homes.</p>
        <form className='search'>
          <div>
            <input type='text' placeholder="Enter Keyword..." />
          </div>
          <div className='radio'>
            <input 
            type="radio"
            name='radio'
             checked />
            <label>Buy</label>
            <input 
            type="radio"
            name='radio'
            />
            <label>Rent</label>
            <button> <AiOutlineSearch /></button>
          </div>
        </form>
      </div>

    </div>
  )
}