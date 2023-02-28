import React, { Component } from 'react';
import './App.css';
import { BUTTON_TYPES } from './common/data/freekey-button';
import FreekeyButton from './components/freekey-button';
import FreekeyCheckbox from './components/freekey-checkbox';
import FreekeyTags from './components/freekey-tags';
import FreekeyTextbox from './components/freekey-textbox';
import FreekeyTagsInput from './components/freekey-tags-input';
import FreekeySearch from './components/freekey-search';
import FreekeyDropdown from './components/freekey-dropdown';

class App extends Component {
  constructor(props){  
    super(props);  
    this.state = {changeProgress : false}
    this.handleClick = this.handleClick.bind(this);  
  }
  handleClick() {
    console.log('Something');
    this.setState({changeProgress : true});
    setTimeout(function(state){
      console.log('Inside wait function.. waits for request');
      this.setState({changeProgress : false});
    }.bind(this), 5000);
    
  }
  render() {
    return (
      <div className='app'>
        {/* To test Button Component remove in future */}
        <FreekeyButton 
          buttonClick={this.handleClick} 
          type={BUTTON_TYPES.PRIMARY} 
          text={'Login'} 
          inProgressText={'Logging In'} 
          isInProgress={this.state.changeProgress}
          isDisabled={false}
          iconPosition={'LEFT'}
          icon={<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
        <FreekeyCheckbox
          label={'Agree to terms and conditions'}
          isDisabled={false}
          isChecked={true}
        />
        <FreekeyTextbox 
          primaryLabel={'Name'}
          isDisabled={false}
          isError={false}
          errorText={''}
          placeholder={'Enter Full Name'}
        />
        <FreekeyTags tags={[{id: 1, name: 'Wow'}, {id: 2, name: 'Excellent'}, {id: 3, name: 'Marvellous'}, {id: 4, name: 'Awesome'}]} 
        containerClass={'adjust-size'} valuePath={'name'}/>
        <FreekeyTagsInput />
        <FreekeySearch />
        <FreekeyDropdown isError={false} errorText={'Invalid Selection'} isDisabled={false} placeholder={'Search City'} options={[
                { value: 'default', label: '-----'},
                { value: 'apple', label: 'Apple' },
                { value: 'banana', label: 'Banana' },
                { value: 'orange', label: 'Orange' },
              ]}
        />
      </div>
    );
  }
}

export default App;