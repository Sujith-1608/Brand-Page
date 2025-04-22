import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css';
 

function Navbar(){
  return(
    <div>
      <nav>
        <div className="logo">
          <img src="./images/brand_logo.png" alt="Logo"/>
        </div>
        <ul className='nav-list'>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button className="login-btn">Login</button>

      </nav>
    </div>

  )
}

function ShoeContainer(){
  return(
    <>
    <div className="shoe-container">
      <img src="./images/shoe_image.png"/>
    </div>
    </>
  );
}


function DescriptionContainer(){
  return(
    <div className='description'>
    <div>
      <h1>YOUR FEET DESERVE<br></br> THE BEST</h1>
    </div>
    <div >
      <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. STEP INTO COMFORT AND STYLE WITH EVERY PAIR!</p>
    </div>
    <div>
      <button className='shop-btn'>Shop Now</button>
      <button className="category-btn">Category</button>
    </div>
    <div>
      <p className="shops">Also Available On</p>
      <div className='shops-imgs'>
        <img src="./images/flipkart.png" />
        <img src="./images/amazon.png" />
      </div>
    </div>
    </div>
  );
}

function Main(){
  return(
    <>
    <div className='main-container'>
    <DescriptionContainer />
    <ShoeContainer />
    </div>
    </>
  );
}


function App() {
  return (
    <>
    <Navbar />
    <Main />
    </>
  )
}

export default App
