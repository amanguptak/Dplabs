import React from 'react'
import './search.css'

export default function Search() {
  return (
    <div className="search">
     <p className="path"><span className="pathli"> MedicalDarpan{'>'}Search{'>'}</span>  <span className="med">Fabiflu Tablet</span></p>
     <div className="searchbar">
     <div className="box2">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" className="field"  placeholder="Paracetmol"/></div>
      
      <button className="btn">Search</button>
     </div>

     <div className="data">
     
        <span className="medname">Paracetmol</span>
        <span className="detail">(128 products)</span>
        <span className="box">Acelofenac&emsp;X</span>
        <span className="box">500mg&emsp;X</span>
        <span className="delete">Remove all</span>
        
     </div>
    </div>
  )
}
