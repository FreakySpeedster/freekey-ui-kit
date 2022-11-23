import React from 'react';
import './App.css';
import { BUTTON_TYPES } from './common/data/freekey-button';
import FreekeyButton from './components/freekey-button';

const App = () => {
  const handleClick = () => {
    console.log('Something');
  }
  return (
    <div className='app'>
      {/* To test Button Component remove in future */}
      <FreekeyButton 
        buttonClick={handleClick} 
        type={BUTTON_TYPES.PRIMARY} 
        text={'Login'} 
        inProgressText={'Logging In'} 
        isInProgress={false}
        iconPosition={'RIGHT'} 
        isDisabled={false}
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-loader" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="12" y1="6" x2="12" y2="3" />
                <line x1="16.25" y1="7.75" x2="18.4" y2="5.6" />
                <line x1="18" y1="12" x2="21" y2="12" />
                <line x1="16.25" y1="16.25" x2="18.4" y2="18.4" />
                <line x1="12" y1="18" x2="12" y2="21" />
                <line x1="7.75" y1="16.25" x2="5.6" y2="18.4" />
                <line x1="6" y1="12" x2="3" y2="12" />
                <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
              </svg>} 
      />
      <FreekeyButton 
        buttonClick={handleClick} 
        type={BUTTON_TYPES.PRIMARY} 
        text={'Login'} 
        inProgressText={'Logging In'} 
        isInProgress={true}
      />
    </div>
  )
}

export default App