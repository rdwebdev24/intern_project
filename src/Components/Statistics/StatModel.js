import React from 'react'

const StatModel = ({modelDisp,setModelDisp,modelData}) => {
     
     const {title,detail,total,amount} = modelData
     const closeHandler = () => {
          setModelDisp('0')
     }
  return (
    <div style={{scale:modelDisp}} className='statModel'>
          <h3>{title}</h3>
          <div style={{display:"flex",gap:"1rem"}}>
               <h4>earning : {amount}</h4>
               <h4>total : {total}</h4>
          </div>
          <div>{detail}</div>
      <button onClick={closeHandler}  className='viewDetails'>close</button>
    </div>
  )
}

export default StatModel
