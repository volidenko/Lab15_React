import React from "react";
import { Route, Switch } from "react-router-dom";

export function Main() {
    return <h2>Main</h2>
}

export function About() {
    return <h2>About page</h2>
}

export function NotFound() {
    return <h2>Not Found</h2>
}

export function News() {
    return (
        <>
            <Switch>
                <Route exact path="/news" children={() => <h2>News</h2>}></Route>
                <Route path="/news/london" component={London}></Route>
                <Route path="/news/kyiv" component={Kyiv}></Route>
                <Route path="/news/lviv" component={Lviv}></Route>
            </Switch>
        </>
    )
}

export function London() {
    return <h3>Новости о офисе компании в Lonlon</h3>
}

export function Kyiv() {
    return <h3>Новости о киевском офисе компании</h3>
}

export function Lviv() {
    return <h3>Новости о львовском офисе компании</h3>
}

export function Staff(props) {
    let department = props.match.params.departmen;
    let id = props.match.params.id;
    return (
        <>
            <h3>Информация о сотруднике</h3>
            <div>Отдел:{department}</div>
            <div>Id:{id}</div>
        </>
    )
}

export function Product(props) {
    let id = props.match.params.id;
    return (
        <>
            <h2>Product</h2>
            <div>Id:{id}</div>
        </>
    )
}