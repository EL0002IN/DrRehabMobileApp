import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';



export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: [],
            title: [],
            content: []
        }
    }

    componentDidMount() {
        axios.get('https://imaginecupdrrehab.azurewebsites.net/Blog/viewPost')
            .then(response => {
                this.setState({
                    author: response.data.data[0].author,
                    title: response.data.data[0].title,
                    content: response.data.data[0].content
                })
                console.log(this.state.title);
            }).catch(error => console.log(error));
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollView>
                    <View style={styles.logo}>
                        <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                    </View>

                    <View style={styles.card1}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Thomas Jackson</Text>
                            <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>Hi! I am Jackson and I am undergoing physiotherapy!</Text>
                            <View style={styles.circleGradient}>
                                <TouchableOpacity>
                                    <Text style={styles.buttontext}>Post today!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.card2}>
                        <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>{this.state.title}</Text>
                        <Text style={{ fontSize: 10, color: '#1B3254', margin: 5 }}>Author: {this.state.author}</Text>
                        <Text style={{ fontSize: 10, color: '#1B3254', margin: 5 }}>{this.state.content}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 20
    },

    img: {
        resizeMode: 'contain',
        width: wp('40%'),
        height: hp('10%'),
    },

    card1: {
        flex: 1,
        flexDirection: 'column',
        width: wp('95%'),
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

    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },

    text: {
        marginLeft: 5,
        marginRight: 10,
        color: '#1B3254',
        fontSize: 20
    },

    content: {
        color: '#1B3254',
        fontSize: 15,
        opacity: 0.5,
        margin: 5
    },

    box: {
        flex: 0.1,
        width: 300,
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
        width: 100,
        height: 30,

    },

    circleGradientCompleted: {
        margin: 1,
        backgroundColor: '#999D9E',
        borderRadius: 30,
        width: 100,
        height: 30,

    },

    buttontext: {
        margin: 5,
        paddingHorizontal: 6,
        textAlign: "center",
        // backgroundColor: "white",
        color: '#ffffff',
        fontSize: 15,

    },

})