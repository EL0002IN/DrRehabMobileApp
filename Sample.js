import * as React from 'react';
import {
    ActivityIndicator,
    Button,
    StatusBar,
    StyleSheet,
    View,
    AsyncStorage,
    Text,
    Image,
    SafeAreaView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
//Import screens
import CameraScreen from './camera';
import HomeLogin from './Home';
import ProfileScreen from './Profile';
import ActivitiesScreen from './Activities';
import TimerScreen from './Timer';
import BlogPostScreen from './BlogPost';
import InstructionScreen from './Instruction';


import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';

const ActivitiesStack = createStackNavigator({
    Exercise: { screen: ActivitiesScreen, navigationOptions: { headerShown: false } },
    Instruction: { screen: InstructionScreen, navigationOptions: { headerShown: false } },
    Camera: { screen: CameraScreen, navigationOptions: { headerShown: false } },
    Timer: { screen: TimerScreen, navigationOptions: { headerShown: false } }
})

//Bottom Navigator

const SignedIn =
    createBottomTabNavigator(
        {
            Home: {
                screen: HomeLogin,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="home" size={25} color={tintColor} />
                    )
                }
            },

            Activities: {
                screen: ActivitiesStack,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="fire" size={25} color={tintColor} />
                    ),
                    headerOptions: false
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

            Blog: {
                screen: BlogPostScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="user" size={25} color={tintColor} />
                    )
                }
            },
        }
    );


class SignInScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fill: 40
        }
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                <ScrollView>
                    <View style={styles.logo}>
                        <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                    </View>
                    <View style={{ width: wp('80%') }}>
                        <Input placeholder='Username' leftIcon={{ type: 'font-awesome', name: 'user' }} />
                        <Input placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'lock' }} />

                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={styles.circleGradient}>
                            <TouchableHighlight onPress={this._signInAsync}>
                                <Text style={styles.buttontext}>Login</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.circleGradient}>
                            <TouchableHighlight onPress={this._signInAsync}>
                                <Text style={styles.buttontext}>New user</Text>
                            </TouchableHighlight>
                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView >
        );

    }
}

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        resizeMode: 'contain',
        width: wp('50%'),
        height: hp('20%'),
    },
    circleGradient: {
        margin: 10,
        backgroundColor: '#FF6B86',
        borderRadius: 30,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttontext: {
        margin: 4,
        paddingHorizontal: 6,
        textAlign: "center",
        // backgroundColor: "white",
        color: '#ffffff',
        fontSize: 15,

    },
});
class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: SignedIn,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'App',
    }
));

