import React from "react";
import ReactDom from 'react-dom/client'
import App from "./view/Home";



const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <App/>
)