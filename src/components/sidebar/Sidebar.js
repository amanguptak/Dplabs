import React from 'react'
import './sidebar.css'
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="catogery">
            <p className="heading">Related Categories</p>
            <ul className="data">
                <li className="list">Paracetmol Tablets</li>
                <li className="list">Paracetmol Syrup</li>
                <li className="list">Paracetmol Powder</li>
                <li className="list"><span className="box1">Acelofenac&emsp;X</span></li>
                <li className="list">Magaladrate Simethicone Oral Suspension</li>
                <li className="list">Mefenamic Paracetmol Syrup</li>
                
            </ul>
        </div>
        <div className="catogery">
            <p className="heading">Related Brands</p>
            <ul className="data">
                <li className="list">Cipmol Paracetmol</li>
                <li className="list">Pandal Paracetmol Tablets</li>
                <li className="list">Combiflam</li>
                
                <li className="list">Crocin Tablets</li>
                <li className="list"> Calpol Paracetmol Tablets</li>
                <li className="list">Sumo Tablet</li>
            </ul>
        </div>
        <div className="catogery">
            <p className="heading">Business Type</p>
            <ul className="data">
                <li className="list"> Wholesaler</li>
                <li className="list">Manufacture</li>
                
                <li className="list">Retailer</li>
                <li className="list">Exporter</li>
                
            </ul>
        </div>
        <div className="catogery">
            <p className="heading">Strength</p>
            <ul className="data">
                
                <li className="list"><span className="box1">500mg&emsp; &emsp;X</span></li>
                <li className="list">650mg</li>
                
            </ul>
        </div>
        <div className="catogery">
            <p className="heading">Manufacture</p>
            <ul className="data">
                <li className="list">Intas Pharmaceutical Ltd</li>
                <li className="list">Alkem Laboratories Ltd</li>
               
            </ul>
        </div>
        <div className="catogery">
            <p className="heading">Prescription/Non prescription</p>
            <ul className="data">
                <li className="list">Intas Pharmaceutical Ltd</li>
                <li className="list">Alkem Laboratories Ltd</li>
               
            </ul>
        </div>

    </div>
  )
}
