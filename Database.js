import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';



export default class Database extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientDB: {
                error: [],
                data: [],
                message: ''
            },
            message: 'original message'
        }
    };

    // componentDidMount() {

    //     axios.post('http://localhost:8000/api/Physiotherapist/viewPatients',
    //         { "physiotherapist_username": "bob" })
    //         .then(response =>
    //             this.setState({ patientName: response.message }))
    // };

    componentDidMount() {
        axios.post('http://192.168.1.9:8000/api/Physiotherapist/viewPatients',
            { physiotherapist_username: 'physiotherapist_1' })
            .then(response => {
                this.setState({
                    patientDB: {
                        error: response.data.error,
                        data: response.data.data[0].patient_username,
                        message: response.data.message
                    }
                });
                console.log(response.data.data[0]);
            })
            .catch(error => console.log(error));
        setTimeout(() => { console.log(this.state.patientDB.message) }, 100)
    };

    // componentDidMount() {
    //     this.setState({
    //         message: 'welcome to dr rehab'
    //     })
    // };


    render() {
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollView>
                    <View style={styles.logo}>
                        <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                    </View>

                    <View style={styles.card1}>
                        <View style={{
                            flex: 0.1,
                            flexDirection: 'row'
                        }}>
                            <View>
                                <Text style={styles.text}>Exercise 1</Text>
                                <Text style={styles.content}>Estimated time:10 minutes</Text>
                            </View>

                            <View style={styles.circleGradientCompleted}>
                                <Text style={styles.buttontext}>Completed</Text>
                            </View>

                        </View>

                        <View style={{
                            flex: 0.1,
                            flexDirection: 'row'
                        }}>
                            <View>
                                <Text style={styles.text}>Patient Name</Text>
                                <Text style={styles.content}>{this.state.patientDB.data}</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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