import React from "react"
import {Route, Switch} from "react-router-dom"
import FirstPage from "../Pages/FirstPage"
import SecondPage from "../Pages/SecondPage"
import ThirdPage from "../Pages/ThirdPage"


export const Routes = () => {
    return (
    <Switch>
        <Route path="/third">
            <ThirdPage/>
        </Route>
        <Route path="/second">
            <SecondPage/>
        </Route>
        <Route path="/">
            <FirstPage/>
        </Route>
    </Switch>)
}