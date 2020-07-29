import React from 'react';
import NavBar from '../components/NavBar.js';
import InfoPannel from '../components/InfoPannel.js';
import ContextProvider from '../global/GlobalData.js';

export default function HomeScreen() {
    return (
        <ContextProvider>
            <NavBar />
            <InfoPannel />
        </ContextProvider>
    )
}
