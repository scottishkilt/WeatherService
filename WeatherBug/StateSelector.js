// This component takes a state value and a callback function as properties,
// it uses them to maintain the proper state of the picker on reload, and 
// pass the relevant State to the higher level component.

import React, {Component} from 'react';
   
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';

 
 class StateSelector extends React.Component {
	

	onSelect = (val) => {
      this.props.onSelect(val);
  }  
      
 render(){
	 return(
    
    <Picker
		selectedValue= {this.props.value}
		onValueChange={(itemValue, itemIndex) => this.onSelect(itemValue)}>
          <Picker.Item value = "AK" label = "Alaska" />
          <Picker.Item value = "AZ" label = "Arizona" />
          <Picker.Item value = "AR" label = "Arkansas" />
          <Picker.Item value = "CA" label = "California" />
          <Picker.Item value = "CO" label = "Colorado" />
          <Picker.Item value = "CT" label = "Connecticut" />
          <Picker.Item value = "DE" label = "Delaware" />
          <Picker.Item value = "FL" label = "Florida" />
		  <Picker.Item value = "GA" label = "Georgia" />
          <Picker.Item value = "HI" label = "Hawaii" />
          <Picker.Item value = "ID" label = "Idaho" />
          <Picker.Item value = "IL" label = "Illinois" />
          <Picker.Item value = "IN" label = "Indiana" />
          <Picker.Item value = "IA" label = "Iowa" />
          <Picker.Item value = "KS" label = "Kansas" />
          <Picker.Item value = "KY" label = "Kentucky" />
		  <Picker.Item value = "LA" label = "Louisiana" />
          <Picker.Item value = "ME" label = "Maine" />
          <Picker.Item value = "MD" label = "Maryland" />
          <Picker.Item value = "MA" label = "Massachusetts" />
          <Picker.Item value = "MI" label = "Michigan" />
          <Picker.Item value = "MN" label = "Minnesota" />
          <Picker.Item value = "MS" label = "Mississippi" />
          <Picker.Item value = "MO" label = "Missouri" />
		  <Picker.Item value = "MT" label = "Montana" />
          <Picker.Item value = "NE" label = "Nebraska" />
          <Picker.Item value = "NV" label = "Nevada" />
          <Picker.Item value = "NH" label = "New Hampshire" />
          <Picker.Item value = "NJ" label = "New Jersey" />
          <Picker.Item value = "NM" label = "New Mexico" />
          <Picker.Item value = "NY" label = "New York" />
          <Picker.Item value = "NC" label = "North Carolina" />
		  <Picker.Item value = "ND" label = "North Dakota" />
          <Picker.Item value = "OH" label = "Ohio" />
          <Picker.Item value = "OK" label = "Oklahoma" />
          <Picker.Item value = "OR" label = "Oregon" />
		  <Picker.Item value = "PA" label = "Pennsylvania" />
          <Picker.Item value = "RI" label = "Rhode Island" />
		  <Picker.Item value = "SC" label = "South Carolina" />
          <Picker.Item value = "SD" label = "South Dakota" />
          <Picker.Item value = "TN" label = "Tennessee" />
          <Picker.Item value = "TX" label = "Texas" />
          <Picker.Item value = "UT" label = "Utah" />
          <Picker.Item value = "VT" label = "Vermont" />
          <Picker.Item value = "VA" label = "Virginia" />
          <Picker.Item value = "WA" label = "Washington" />
		  <Picker.Item value = "WV" label = "West Virginia" />
          <Picker.Item value = "WI" label = "Wisconsin" />
          <Picker.Item value = "WY" label = "Wyoming" />
        </Picker> 

	  
    );
	}
  }
export default StateSelector;

 

