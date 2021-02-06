import React from "react";

export namespace RouterConfig {

    export type Component = React.FC;
}

export interface RouterConfig {
    path: string;
    component?: RouterConfig.Component;
    exact?: boolean;
    name?: string;
    children?: RouterConfig[];
}
