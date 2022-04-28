import React from 'react';
import { useMediaQuery } from 'react-responsive'

import './App.css';

import { Header } from './components/header/header';
import { Staking } from './components/staking/staking';
import { Alpha } from "./components/alpha/alpha";

function App() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
    <div className={`App ${isTabletOrMobile ? 'Mobile-App' : ''}`}>
      <Header isDesktopOrLaptop={isDesktopOrLaptop} isTabletOrMobile={isTabletOrMobile}/>
      <Staking isDesktopOrLaptop={isDesktopOrLaptop} isTabletOrMobile={isTabletOrMobile}/>
      <Alpha isDesktopOrLaptop={isDesktopOrLaptop} isTabletOrMobile={isTabletOrMobile}/>
    </div>
  );
}

export default App;
