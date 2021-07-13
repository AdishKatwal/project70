import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen ';
import ReadStoryScreen from './screens/ReadStoryScreen';
export default class App extends React.Component{
    render(){
      return(

<View>
<AppContainer/>
</View>

      )
    }
}

const TabNavigator = createBottomTabNavigator({
  ReadStoryScreen:{screen:ReadStoryScreen},
  WriteStoryScreen:{screen:WriteStoryScreen}
})

const AppContainer = createAppContainer(TabNavigator)
