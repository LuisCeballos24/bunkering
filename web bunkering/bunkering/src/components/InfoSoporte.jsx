import React from 'react'
import Soporte from '../json/Soporte.json'

function InfoSoporte() {
  return (
    <div className='infoSoporte'>
        {
            Soporte.map(s => (
                <div key={s.id} className='cardInfoSoporte'>
                    <img src={'http://localhost:5173'+s.image} alt={s.title} />
                    <h4>{s.title}</h4>
                    <p>{s.information}</p>
                </div>
            ))
        }
    </div>
  )
}

export default InfoSoporte