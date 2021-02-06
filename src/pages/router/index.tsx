import React, {ReactElement} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {RootRouter} from "~/routerConfig/router";
import {RouterConfig} from "~/routerConfig/routerConfig";


export const Router = (): ReactElement => {

    function routes(route: RouterConfig): ReadonlyArray<RouterConfig> {
        const map = [];
        let index = 0;

        const r: RouterConfig[] = [];
        r.push(route);

        let _path = '';

        while (r.length > index) {
            const cr = r[index];
            index++;
            map.push({name: cr.name, path: `${_path}${cr.path}`, component: cr.component, exact: cr.exact});
            cr.children?.forEach(it => r.push(it));
            _path = `${_path}${cr.path}`;
        }

        return map;
    }

    return (
        <Switch>
            {RootRouter.map(it => (
                routes(it).map(route => (
                    <Route
                        key={route.name}
                        path={route.path}
                        component={route.component}
                        exact={route.exact ?? false}
                    />
                ))
            ))}
            <Redirect path="*" to='/'/>
        </Switch>
    )
}
