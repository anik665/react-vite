import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className="card">
        <img src="https://www.shutterstock.com/shutterstock/photos/2473384115/display_1500/stock-photo-programmer-people-working-laptops-or-smartphones-with-ai-artificial-intelligence-software-engineer-2473384115.jpg" alt="" />
        <h1>{props.title}</h1>
        <p>{props.des}</p>
    </div>
  )
}

export default Card