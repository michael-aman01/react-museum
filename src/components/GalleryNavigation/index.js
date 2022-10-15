import React from "react"
import { NavLink } from "react-router-dom"
import './GalleryNavigation.css'


export default function GalleryNavigation(props){
    console.log(Object.keys(props.galleries[0]))

  const galleryNames = props.galleries.map(galleryObj => {
        
        return <NavLink 
        to={ '/galleries/' + galleryObj.id.toString()}
        style={{color:"black"}} 
        >
                {galleryObj.name}
        </NavLink>

    })
    console.log(galleryNames)
    return (
       
           <nav className="GalleryNavigation">
                {galleryNames}
           </nav>
       
    )
}