import './styles.css'
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import Tilty from 'react-tilty'

import data from '../data/img.json'



export default function Design() {
    
    const [images, setImages] = useState([])

    useEffect(()=>{
        setImages(data.images)
    }, [])

    return (
        <div className="Design">
            <section className="jumbo">
            <div className="bar">
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>   
            </div>
            <div className="bar bar-2">
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
            </div>
            <div className="bar special">
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
            </div>
            <div className="bar bar-2 special">
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
            </div>
            <div className="main">
                <h1 style={{ fontSize: 50 }}>de·sign</h1>
                <p>"Design is not just what it looks like and feels like. Design is how it works. ~ Steve Jobs</p>
                <p className="prompt">Scroll down to view portfolio <FaAngleDown id="icon"/></p>
                <Link className="back link fancy" to="/">Home <FaLongArrowAltRight id="icon" /></Link>
            </div>
            <div className="bar">
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>   
            </div>
            <div className="bar bar-2">
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
            </div>
            <div className="bar special">
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
                <h1 className="fancy">design</h1>
            </div>
            <div className="bar bar-2 special">
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
                <h1 className="fancy">portfolio</h1>
            </div>
            </section>
            <div className="portfolio-wrapper">
                {
                    images.map(img => {
                        return (
                            <div className="image-wrapper" key={img.fileName} style={{ backgroundColor: img.palette.background }}>
                                <div className="head">
                                    <div className="name">
                                        <h1 className="fancy" style={{ color: img.palette.backgroundInverse }}>Ansh</h1>
                                        <h1 className="fancy" style={{ color: img.palette.backgroundInverse }}>Chauhan</h1>
                                        <h1 className='fancy' style={{ color: img.palette.backgroundInverse }}>{img.fileName}</h1>
                                    </div>
                                    <div className="colors">
                                        <h1 className="background fancy" style={{ color: img.palette.background, WebkitTextStroke: `1px ${img.palette.backgroundInverse}` }}>{img.palette.background}</h1>
                                        <h1 className="fancy" style={{ color: img.palette.primary }}>{img.palette.primary}</h1>
                                        <h1 className="fancy" style={{ color: img.palette.secondary }}>{img.palette.secondary}</h1>
                                        <h1 className="fancy" style={{ color: img.palette.tertiary }}>{img.palette.tertiary}</h1>
                                        <h1 className="fancy" style={{ color: img.palette.other }}>{img.palette.other}</h1>
                                    </div>
                                </div>
                                <Tilty scale={1.05}>
                                    <img src={img.location} alt={img.description} style={{ height: img.relativeSize, width: "auto" }}/>
                                </Tilty>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}