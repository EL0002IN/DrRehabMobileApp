import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { TabNavigator, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//Import screens
import CameraScreen from './camera';
import HomeScreen from './Home';
import ProfileScreen from './Profile';
import ActivitiesScreen from './Activities';
import Login from './Login';


export const SignedOut = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Sign Up",
        }
    }
});


// const HomeStack = createStackNavigator({
//     HomeScreen: HomeScreen,
// });

// const ActivitiesStack = createStackNavigator({
//     Exercise: ActivitiesScreen,
//     Camera: CameraScreen,
// });

// const ProfileStack = createStackNavigator({
//     Profile: ProfileScreen,
// });

export const SignedIn =
    createBottomTabNavigator(
        {
            Home: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="home" size={25} color={tintColor} />
                    )
                }
            },

            Activities: {
                screen: ActivitiesScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="fire" size={25} color={tintColor} />
                    )
                }
            },

            Profile: {
                screen: ProfileScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="user" size={25} color={tintColor} />
                    )
                }
            },


        },
        {
            initialRouteName: 'Home',
            tabBarOptions: {
                activeTintColor: '#eb6e3d'
            }
        }
    );

// export const createRootNavigator = (signedIn = false) => {
//     return createSwitchNavigator(
//         {
//             SignedIn: {
//                 screen: SignedIn
//             },
//             SignedOut: {
//                 screen: Login
//             }
//         },
//         {
//             initialRouteName: signedIn ? "SignedIn" : "SignedOut"
//         }
//     );
// };

export const createRootNavigator = createSwitchNavigator({
    routeNameOne: ScreenComponentOne,
    routeNameTwo: ScreenComponentTwo,
});