import React from 'react';
import {ResponsiveNavBar} from "./components/navbar/ResponsiveNavBar";
 
const links = [
    {href: '#', name: 'Dashboard'},
    {href: '#', name: 'Team'},
    {href: '#', name: 'Projects'},
    {href: '#', name: 'Calendar'}
]

function App() {
    return (
        <ResponsiveNavBar
            links={links}
        />
    )
}

export default App;
