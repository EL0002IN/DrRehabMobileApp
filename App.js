import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
// import AppNavigator from './AppNavigator';
import Sample from './Sample';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Sample />
      </SafeAreaProvider>
    );
  }
}

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text> This is my Home screen </Text>
//       </View>
//     );
//   }
// }

class ExploreScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0' }}>
        <Text> This is my Explore screen </Text>
      </View>
    );
  }
}

// class NotificationsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
//         <Text> This is my Notifications screen </Text>
//       </View>
//     );
//   }
// }

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0' }}>
        <Text> This is my Profile screen </Text>
      </View>
    );
  }
}




