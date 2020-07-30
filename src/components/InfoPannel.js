import React from 'react';
import GlobalStates from '../global/GlobalStates';
import AllCountries from './AllCountries';


export default function InfoPannel({currentScreen}) {

   if (currentScreen === 0) 
       return <GlobalStates />
   else if (currentScreen === 1)
       return <AllCountries />
   else
    return <GlobalStates />
}