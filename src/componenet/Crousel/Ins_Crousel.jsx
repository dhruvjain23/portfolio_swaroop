import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme_pattern from '../../assets/theme_pattern.svg'


import ghatimg from '../../assets/sliderimage/ganga_ghat_swaroop.jpg'
import img1 from '../../assets/sliderimage/b&wcat.jpg'   //i learn here to move folder one level by ../ and for move folder two level up use ../../
import img2 from '../../assets/sliderimage/water_flw.jpg'
import img3 from '../../assets/sliderimage/img1.jpg'
import img4 from '../../assets/sliderimage/img2.jpg'
import img5 from '../../assets/sliderimage/img3.jpg'
import img6 from '../../assets/sliderimage/img4.jpg'
import img7 from '../../assets/sliderimage/img5.jpg'
import img8 from '../../assets/sliderimage/img6.jpg'
import img9 from '../../assets/sliderimage/pink_rose.jpg'


const Ins_Crousel = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                infinite: true,
                
            }
        },
        {
            // breakpoint: 1024,
            // settings: {
            // slidesToShow: 3,
            // infinite: true,
            // 
            // }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                infinite: true,
                
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
          ]
      };

  return (
    <>
    <div id='carousel' className='flex flex-col justify-center  items-center text-4xl font-semibold mt-16 mb-20 mx-[170px] relative px-8'>
        <h1>My latest work</h1>
        
        <img src={theme_pattern} alt="" className='w-40 absolute right-[450px]  -z-10'/>
        
    </div>
    <div  className='w-3/4 m-auto rounded-xl'>
        <div className='' >
            <Slider {...settings}>
                {data.map((d,index)=>(
                    <div key={index} className='bg-white h-[420px] mt-1 rounded-xl'>
                        <div className='rounded-t-2xl flex justify-center items-center h-full w-full'>
                            <img src={d.img} alt="" className='rounded-xl h-auto object-cover' />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
    </>
  )
}

const data = [
    {
        img: ghatimg,
        name: `ganga ghat`
    },
    {
        img: img1,
        name:'img 1'
    },
    {
        img: img2,
        name:`img 2`
    },
    {
        img: img3,
        name:`img 3`
    },
    {
        img: img4,
        name:`img4`
    },
    {
        img: img5,
        name:`img5`
    },
    {
        img: img6,
        name:`img6`
    },
    {
        img: img7,
        name:`img7`
    },
    {
        img: img8,
        name:`img8`
    },
    {
        img: img9,
        name:`img9`
    },
    
    
]

export default Ins_Crousel
