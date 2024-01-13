import { useEffect } from "react"
import { useLocation } from "react-router-dom";

export function Scroll () {
    const path = useLocation();
    useEffect(()=>{
        window.scroll(0,0);
    }, [path])
}