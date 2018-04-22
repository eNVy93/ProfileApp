import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './js/Home';
import Profile from './js/Profile'


export default class App extends React.Component {
    render() {
        return (
            <RootStack/>
        );
    }
}

const RootStack = StackNavigator({
    Home: {
        screen: Home,
    },
    Profile: {
        screen: Profile,
    }
});
