import React from 'react'
import './client.css'

const Client = () => {
    const client = [
        {
            count: '80+',
            desc: 'Satisfiend Client'
        },
        {
            count: '200+',
            desc: 'Project Completed'
        },
        {
            count: '99+',
            desc: 'Reviews Given',
        }
    ]
  return (
    <div className='container-client'>
        <div className="client-section">
            {client.map((item, idx) => (
            <div key={idx} className="grid-item-client">
                <h1>{item.count}</h1>
                <h3>{item.desc}</h3>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Client