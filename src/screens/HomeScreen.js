import React, {useState} from 'react';
import NavBar from '../components/NavBar.js';
import InfoPannel from '../components/InfoPannel.js';
import FootNav from '../components/FootNav.js';


export default function HomeScreen() {
    const screenConfig = useState(0);

    return (
        <div>
            <NavBar />
            
            <InfoPannel currentScreen = {screenConfig[0]}/>
            <FootNav screenConfig = {screenConfig} />
        </div>
    )
}
