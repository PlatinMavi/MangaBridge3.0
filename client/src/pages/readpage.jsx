import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../componments/header"
import { Link } from "react-router-dom"
import { useContext } from "react";

export default function ReadPage(){
    const params = useParams()
    const url = decodeURIComponent(params.link.replace(/\*/g, "/"))

    return(
        <div className=" h-screen w-sc">

            <iframe src={url} frameborder="0" id="frame" title={url}></iframe>

        </div>
    )
}