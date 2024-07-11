import React, { useEffect, useState } from 'react'
import Nav from '../Components/navbar'
import rightBg from '../Components/Assets/cartoon-student-math-class.jpg'
import './CSS/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div>
      <Nav/>
      <div className='main-div container d-flex flex-column'>
        <div className='hero-title d-flex flex-column flex-grow-1'>
          <div>
            <h1>Start Your JEE/NEET Preparation with complete Resouces</h1>
          </div>
          <div className='mt-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel ipsam vitae a omnis minima quas sunt repellendus optio quibusdam?</p>
          </div>

        </div>
        
        <div className='card-container mt-5'>
          <div className="card col">
              JEE
          </div>
          <div className="card col">
              NEET
          </div>
          <div className="card col">
              CUET
          </div>
          <div className="card col">
              GATE
          </div>
          <div className="card col">
              BITSAT
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;
