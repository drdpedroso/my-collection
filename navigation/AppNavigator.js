import React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import DetailsScreen from "../screens/DetailsScreen";
import DiscoveryScreen from "../screens/DiscoveryScreen";

export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    // Details: DetailsScreen,
    // Discovery: DiscoveryScreen,
});
