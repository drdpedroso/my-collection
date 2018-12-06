import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DiscoveryScreen from "../screens/DiscoveryScreen";
import DetailsScreen from "../screens/DetailsScreen";
import AddScreen from "../screens/AddScreen";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};


const AddStack = createStackNavigator({
    Add: AddScreen,
});

AddStack.navigationOptions = {
    tabBarLabel: 'Add +',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={'md-add'}
        />
    ),
};

const DiscoverStack = createStackNavigator({
    Discovery: DiscoveryScreen,
});

DiscoverStack.navigationOptions = {
    tabBarLabel: 'Discover',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={'md-compass'}
        />
    ),
};

const ProfileStack = createStackNavigator({
    Settings: SettingsScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'User',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={'md-person'}
        />
    ),
};


export default createBottomTabNavigator({
    HomeStack,
    AddStack,
    DiscoverStack,
    ProfileStack
});
