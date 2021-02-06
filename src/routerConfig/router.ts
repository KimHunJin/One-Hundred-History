import {RouterConfig} from "~/routerConfig/routerConfig";
import Home from "~/pages/router/home";
import History from "~/pages/router/history";
import {Version} from "~/pages/router/history/version";

export const RootRouter: RouterConfig[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        exact: true,
    },
    {
        path: '/history',
        name: 'history',
        component: History,
        exact: true,
        children: [
            {
                path: '/version',
                name: 'month',
                component: Version
            }
        ]
    }
]
