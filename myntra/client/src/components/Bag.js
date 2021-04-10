import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {useState} from 'react'


const Bag = ({img1, img2, img3, name}) => {


    return (
        <div>
            <Card>
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block"
                    
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption
                    >
                    <h3>{name}</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>{name}</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>{name}</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Card>
        </div>
  )
    }




export default Bag