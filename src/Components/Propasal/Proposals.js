import React, { useEffect } from 'react'
import data from './proposalData.js'
import {GiDelicatePerfume} from 'react-icons/gi'
const Proposals = () => {
  return (
    <section id='proposal_wrapper'>
          <h1 className='proposalHeading'><GiDelicatePerfume/>Proposals</h1>
          <div className="porpasal_box">
            {data.map((item)=>{
              const {id,title,info,img} = item
              return (
                <div key={id} className="card">
                  <div className='img_cont'>
                    <img src={img} alt="perfume image" />
                  </div>
                  <div className="card_info">
                    <div className="title_price">
                      <span>{title} {id}</span>
                      <span style={{color:"#ff8d00"}}>$12.00</span>
                    </div>
                    <div className="info">
                     {info}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
    </section>
  )
}

export default Proposals
