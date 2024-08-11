import React from 'react'
import './Home.css'

function Home() {

  return (
    <>
    
    <div className="home-container">
    <div className='div-one'>
        <h1 className='home-heading'>Welcome to InfoTech hub</h1>
        <p className='home-para'> Stay ahead in the fast-paced world of technology with our concise and insightful updates. Whether you're a tech enthusiast or a professional, our platform offers the latest information to keep you informed and inspired.</p>
    </div>
    <div className="div-two">
      <h1 className='home-heading'>Why Choose Us?</h1>
      <p className='home-para'>Our mission is to make technology accessible to all. We break down complex tech topics into easy-to-understand content, ensuring that you stay informed without the jargon. Discover the future of tech with us!</p>
    </div>
    <div className="div-three">
    <h1 className='home-heading'>Join Our Community</h1>
    <p className='home-para'>Engage with a community that shares your passion for technology. Join discussions, share ideas, and stay connected with others who are as excited about the tech world as you are.</p>
    </div>
    <footer className='home-footer'>Thank you for visiting us! don't forget to visit again</footer>
    </div>
    </>
  )
}

export default Home
