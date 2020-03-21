import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Input } from 'react-native-elements';
import Sample from './Sample';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Login extends React.Component {
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
            <View style={{ flex: 0.8, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>

                <View style={styles.logo}>
                    <Text>Dr Rehab Logo</Text>
                    <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                </View>

                <View style={styles.card1}>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Login Page</Text>

                        <Input placeholder='Username' leftIcon={{ type: 'font-awesome', name: 'user' }} />
                        <Input placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'lock' }} />

                        <View style={styles.circleGradient}>
                            <TouchableOpacity onPress={this._signInAsync}>
                                <Text style={styles.buttontext}>Login</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View >
        );

    }
}

const styles = StyleSheet.create({
    logo: {
        // flex: 0.6,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('80%')
    },

    img: {
        resizeMode: 'contain',
        width: 150,
        margin: 50,

    },

    card1: {
        flex: 0.3,
        flexDirection: 'row',
        width: wp('100%'),
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },

    card2: {
        flex: 2,
        width: 330,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },

    card3: {
        flex: 1,
        width: 330,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },


    card4: {
        flex: 0.5,
        width: 330,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },

    circleGradient: {
        margin: 1,
        backgroundColor: '#FF6B86',
        borderRadius: 30,
        width: 150,
        height: 30,

    },
    buttontext: {
        margin: 4,
        paddingHorizontal: 6,
        textAlign: "center",
        // backgroundColor: "white",
        color: '#ffffff',
        fontSize: 15,

    },
})





