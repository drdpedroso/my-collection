import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DiscoveryScreen from "../screens/DiscoveryScreen";
import DetailsScreen from "../screens/DetailsScreen";
import AddScreen from "../screens/AddScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BuyScreen from "../screens/BuyScreen";

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
    Details: DetailsScreen,
    Profile: ProfileScreen,
    Buy: BuyScreen
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
    Settings: ProfileScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
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
