import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, TextInput, Image, Button, Picker } from 'react-native';
import Row from './Row';
import StateSelector from './StateSelector';

export default class WeatherBug extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isLoading: true,
	  state: 'CO',
	  city: 'Denver' 
    }
  }
  
  //Method for fetching State from State picker
   onSelect = (value) =>{
    this.setState({state : value});
  }
 
   // filters any non alphabet or space characters from city input
//  Then combines city and state to make api call
// takes returned JSON and loads rows into the datasource property for the component
// Resets the loading tag to show the loading spinner again, sets the city to the 
// filtered string to get rid of character babble grossness.   
  getNewWeather(){
  var cityCorrect = this.state.city.toString();
  cityCorrect= cityCorrect.replace(/[^" *"a-z]/gi, '');
  var urlTarget = 'http://api.wunderground.com/api/24f0b7e4ed53f605/forecast/q/' + this.state.state +'/' +cityCorrect+'.json';
    return fetch(urlTarget)
      .then((response) => response.json()) 
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
		  city: cityCorrect,
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.forecast.txt_forecast.forecastday),
        }, function() {
          // do something with new state, for future logic
        });
      })
      .catch((error) => {
        console.error(error);
      });
	  }
 
 // a similar function to getNewWeather, ideally the overlap between the two should be combined
 // to reduce redundancy, however time was of the essence. Next time! The only thing to note
 // about this method is that it fires the first time the component loads on page, allowing 
 // us that nice little spinner until we have our first response and the app is ready.

  componentDidMount() {
	var urlTarget = 'http://api.wunderground.com/api/24f0b7e4ed53f605/forecast/q/' + this.state.state +'/' +this.state.city+'.json';
    return fetch(urlTarget)
      .then((response) => response.json()) 
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.forecast.txt_forecast.forecastday),
        }, function() {
          // do something with new state, for future logic
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

 
//the markup here speaks for itself, the data is being displayed through 
// a standard list view with specialized row components.
// See Row.js and StateSelector.js for the two subcomponents listed
// when pressed, the button calls getNewWeather
  render() {
       
	// controls spinner during loading 
    if (this.state.isLoading) {
      return (
		 <View style={{flex: 1, paddingTop: 20}}>
	 <StateSelector value = {this.state.state} onSelect={this.onSelect} />
	  <TextInput 
	 label = 'Input City Here'
	 onChangeText={(city) => this.setState({city})}
	 value = {this.state.city} 	  />
	 <Button
		onPress={ () => {
		this.state.isLoading = true;
		this.setState(this.state);
		this.getNewWeather();
		}}   
		title='Get Weather'
		color="#841584"
	 /> 
          <ActivityIndicator />
        </View>
      );
    }
    return (
	<View style={{flex: 1, paddingTop: 20}}>
	 <StateSelector value = {this.state.state} onSelect={this.onSelect} />
	  <TextInput 
	 label = 'Input City Here'
	 onChangeText={(city) => this.setState({city})}
	 value = {this.state.city} 	  />
	 
	       
	 <View style={{flex: 6, paddingTop: 20}}>
	 <Button
		onPress={ () => {
		this.state.isLoading = true;
		this.setState(this.state);
		this.getNewWeather();
		}}   
		title='Get Weather'
		color="#841584"
	 /> 

	    
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
		   <Row {...rowData}/>
		   }
        />
		</View>
      </View>
    );
  }
}
