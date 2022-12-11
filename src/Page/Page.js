import React from 'react'
import './page.css'
import Card from '../components/card/Card'
import Sidebar from '../components/sidebar/Sidebar'
export default function Page() {
  return (
    <div className="page">
        <Sidebar/>
        <Card/>
    </div>
  )
}
