import React from "react";
import { useParams } from "react-router-dom";
import GalleryNavigation from "../GalleryNavigation";
import {harvardArt} from '../../data/harvardArt'


export default function GalleryView(props){
    //props.galleries

    return <>
         <GalleryNavigation galleries={harvardArt.records}/>
        <h1>View of Gallery {props.match.params.id}</h1>
    </>
   
    
}