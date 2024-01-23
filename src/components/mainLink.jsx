import './styles.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MainLink (props) {
    useEffect(()=>{
   
        /* Animation */
        const links = document.querySelectorAll('.MainLink');
        links.forEach((link)=>{
            const filledElement = link.children[0].children[0].children[0];
            const strokeElement = link.children[0].children[0].children[1];
            link.addEventListener('mouseover', ()=>{
                filledElement.style.color = "rgba(0,0,0,0)";
                filledElement.style.webkitTextStroke = "1px var(--blue)";
                filledElement.style.transform = "translateX(30px) translateY(30px)";
                strokeElement.style.color = "var(--beige)";
                strokeElement.style.webkitTextStroke = "initial";
            });
            link.addEventListener('mouseleave', ()=>{
                strokeElement.style.color = "var(--black)";
                strokeElement.style.webkitTextStroke = "1px var(--blue)";
                filledElement.style.color = "var(--beige)";
                filledElement.style.webkitTextStroke = "initial";
                filledElement.style.transform = "translateX(50px) translateY(50px)"
            })
        })

    }, [props])
    return (
        <Link className='link' to={props.title}>
            <div className="MainLink" id="main" style={ props.align === 'left' ? {alignItems: "flex-start"} : {alignItems: "flex-end"} }>
            <div className="main">
                <div className="text">
                    <h1 id="titleFill" className='fancy filled'>{props.title}</h1>
                    <h1 id="titleStroke" className='fancy stroke'>{props.title}</h1>
                </div>
                <div className="icon"></div>
            </div>
            <div className="description">
                {props.icon}
                <p>{props.description}</p>
            </div>
        </div>
        </Link>
    )
}