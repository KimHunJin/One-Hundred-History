import React from "react"
import {ApolloProvider} from "react-apollo-hooks"
import client from "./ApolloClient";
import {BrowserRouter, NavLink} from "react-router-dom";
import {Router} from "~/pages/router";

export const Main = () => {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <ul>
                    <li><NavLink to={'/'} activeClassName={'active'} exact>Home</NavLink></li>
                    <li><NavLink to={'/history'} activeClassName={'active'}>History</NavLink></li>
                </ul>
                <Router/>
            </ApolloProvider>
        </BrowserRouter>
    )
}
