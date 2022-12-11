import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className="header">
       <div className="logo">
        <img src="https://pngimg.com/uploads/square/square_PNG20.png" alt="" className="image1" />
        <p>Medical Darpan</p>
       
        </div>
        

        <ul className="headerTitle">
            <li className="options">Home</li>
            <li className="options">Products</li>
            <li className="options">Distributors</li>
            <li className="options">Manufactures</li>
            <li className="options">About us</li>
            <li className="options">Blog</li>
        </ul>
    <div className="login">
    <p>Login</p>
    <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" alt="" className="image2" />
    </div>
    
    </div>
  )
}
