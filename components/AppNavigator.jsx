import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => {
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home'/>
      <BottomNavigationTab title='Learn'/>
      <BottomNavigationTab title='Shop'/>
      <BottomNavigationTab title='Me'/>
    </BottomNavigation>
}

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='Home' component={HomePage}/>
      {/* <Screen name='Learn' component={LearnPage}/>
      <Screen name='Learn' component={ShopPage}/>
      <Screen name='Learn' component={ProfilePage}/> */}
    </Navigator>
  );

const AppNavigator = () => {
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
}

export default AppNavigator