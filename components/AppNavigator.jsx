import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, Icon, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import HomePage from './HomePage';
import SigninPage from './SigninPage';
import LearnPage from './LearnPage';
import ShopPage from './ShopPage';
import ProfilePage from './ProfilePage';

const {Navigator, Screen } = createBottomTabNavigator();

const stylingColors = {
    backgrorundColor: "#ECECEC",
    textColor: "#111111"
  };

const HomeIcon = (props) => (
    <Icon name='home-outline' {...props} />
  );

  const LearnIcon = (props) => (
    <Icon name='book-open-outline' {...props} />
  );

  const ShopIcon = (props) => (
    <Icon name='shopping-bag-outline' {...props} />
  );

  const MeIcon = (props) => (
    <Icon name='person-outline' {...props} />
  );

const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon}/>
      <BottomNavigationTab icon={LearnIcon}/>
      <BottomNavigationTab icon={ShopIcon}/>
      <BottomNavigationTab icon={MeIcon}/>
    </BottomNavigation>
)

const AppNavigator = ({user}) => {

    const TabNavigator = ({route}) => (
    <Navigator initialRouteName={'Home'} tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='Home'>{(props) => <HomePage {...props} user={user} stylingColors={stylingColors}/>}
</Screen>
      <Screen name='Learn'>{(props) => <LearnPage {...props} user={user} lessons={user.lessons} stylingColors={stylingColors}/>}</Screen>
      <Screen name='Shop' component={ShopPage}/>
      <Screen name='Profile' component={ProfilePage}/>
    </Navigator>
  );
  
    return(<NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>)
}

export default AppNavigator