import React, { useRef } from 'react'
import {FaUserFriends,FaComment} from 'react-icons/fa'
import {AiFillLike} from 'react-icons/ai'
import clientData from './clientData'
const ClientReview = () => {
  return (
    <section id='clientWrapper'>
        <h1 className='clientHead'><FaUserFriends/>Client Review</h1>
        <div className="clientReviewWrapper">
         {clientData.map((item,index)=>{
          const {name,img,rating,otherRating,comment} = item
          return (
            <div key={index} className="clientReviewCard">
            <div className='clientImg'>
              <img src={img} alt="" />
            </div>
            <div className="clientreview">
              <div className="clientInfo">
                  <p>{name}</p>
                  <p>{rating}</p>
              </div>
              <div className="otherRating">
                    <span>Engagement : {otherRating[0].Engagement}</span>
                    <span>lead Response : {otherRating[1].lead_Response}</span>
                    <span>toTarget_Audiencetal : {otherRating[2].Target_Audience}</span>
              </div>
              <div className="review">
                {comment}
              </div>
            <div className="like_reply">
              <div><AiFillLike/>like</div>
              <div><FaComment/>reply</div>
            </div>
            </div>
          </div>
          )
         })}
        </div>
    </section>
  )
}

export default ClientReview
