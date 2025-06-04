import { createBrowserRouter } from "react-router-dom";

import Home from "./src/pages/Home";
import ListUsers from './src/pages/ListUsers'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'lista-de-usuarios',
        element: <ListUsers/>
    }
])

export default router

/*
    yarn add react-router-dom -> possibilita as rotas no front end
*/