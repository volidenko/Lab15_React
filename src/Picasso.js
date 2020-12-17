import React from "react";
import { Route, Switch } from "react-router-dom";
import img1 from "./image";

export default function Main(props) {
    return (
        <>
            <h2>{props.data.name} {props.data.surname}</h2>
        </>
    )
}

export function BestPicture() {
    return (
        <>
            <h2>Best Picture</h2>
            <img src={img1}></img>
        </>
    )
}