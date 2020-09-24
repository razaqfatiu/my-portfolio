import React from 'react'
import './Card.scss';

export default function Card(props) {
  return (
    <div className="card-component">
      <div className="card-sub-component">
        <div className="card-detail" onClick={(e) => window.open(props.card.url, '_blank')}>
          {/* style={{ background: `url( ${props.card.image})` }} */}
          <div className="card-description">
            <p>
              {props.card.description}
            </p>
          </div>
          <div className="card-description-h3">
            <h3>{props.card.details}</h3>
          </div>


        </div>
      </div>
    </div>
  )
}
