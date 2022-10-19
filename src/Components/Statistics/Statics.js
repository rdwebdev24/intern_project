import React, { useEffect, useRef, useState } from 'react'
import statData from './StatisticData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai'
import {ImStatsBars} from 'react-icons/im'
import StatModel from './StatModel';

const Statics = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [modelDisp,setModelDisp] = useState('0')
  const [modelData,setModelData] = useState('')
  const [slideToshow,setSlideToShow] = useState(3);

     useEffect(()=>{
      const width = document.body.getBoundingClientRect().width
      if(width<=768){setSlideToShow(1)}
      if(width>768 && width<=1024){setSlideToShow(2)}
     })

     const NextArrow = ({ onClick }) => {
          return (
            <div className="arrow next" onClick={onClick}>
              <AiFillRightCircle />
            </div>
          );
        };
      
        const PrevArrow = ({ onClick }) => {
          return (
            <div className="arrow prev" onClick={onClick}>
              <AiFillLeftCircle />
            </div>
          );
        };
     var settings = {
          infinite: true,
          lazyLoad: true,
          speed: 300,
          slidesToShow: slideToshow,
          centerMode: true,
          centerPadding: 0,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next),
        };
        const handleDetail = (item) => {
          setModelDisp('1')
          setModelData(item)
        }
  return (
    <section id='StatisticWrapper'>
          <h1 className='statHeading'><ImStatsBars/>Your Statics</h1>
          <Slider {...settings} className="statSlider">
               {statData.map((item,index)=>{
                    const {title,amount,total,detail} = item
                    return (
                         <div key={index} className={index === imageIndex ? "slide activeSlide " : "slide"}>
                              <h2>{title}</h2>
                              <div className="earning">{amount}</div>
                              <button onClick={()=>handleDetail(item)} className="viewDetails">Detail</button>
                         </div>
                    )
               })}
          </Slider>
          <StatModel modelData={modelData} modelDisp={modelDisp} setModelDisp={setModelDisp}/>
    </section>
  )
}

export default Statics
