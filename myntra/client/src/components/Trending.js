import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'


import Bag from './Bag'

const Trending = () => {
    return (
        <>
        <div style={{width:"300px", backgroundColor:'#F2D2BD'}}
         >
            <Header className="mt-2"/>
            <Bag img1={"/images/1.jpeg"}
            img2={"/images/15.jpeg"}
            img3={"/images/3.jpeg"}
            name={'Ajita'} />
            <Bag img1={"/images/17.jpeg"}
            img2={"/images/5.jpeg"}
            img3={"/images/6.jpeg"}
            name={'Aradhana'} />
            <Bag img1={"/images/7.jpeg"}
            img2={"/images/18.jpeg"}
            img3={"/images/16.jpeg"}
            name={'Saumya'} />
        </div>
        </>
    )
}

export default Trending
