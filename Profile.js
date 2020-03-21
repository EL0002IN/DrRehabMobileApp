import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { Avatar } from 'react-native-elements';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientDB: {
                error: [],
                data: [],
                message: ''
            },
            physiotherapist: {
                error: [],
                data: [],
                message: ''
            }
        }
    };

    componentDidMount() {
        axios.post('https://imaginecupdrrehab.azurewebsites.net/ViewPatient',
            { patient_username: 'rachel_josephine' })
            .then(response => {
                this.setState({
                    patientDB: {
                        error: response.data.error,
                        data: response.data.data,
                        message: response.data.message
                    }
                });

                this.state.patientDB.data.map((data) => console.log(data.BMI, data.patient_username))
            })
            .catch(error => console.log(error));
        setTimeout(() => { console.log(this.state.patientDB.message) }, 100)

        axios.post('https://imaginecupdrrehab.azurewebsites.net/ViewMyPhysiotherapist',
            { patient_username: 'rachel_josephine' }).
            then(response => {
                this.setState({
                    physiotherapist: {
                        error: response.data.error,
                        data: response.data.data,
                        message: response.data.message
                    }
                })
            })
    };


    render() {
        let profile = this.state.patientDB.data.map(data => ({
            username: data.patient_username, height: data.Height, BMI: data.BMI, Rehab: data.RehabCentre
        }))
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollView>
                    <View style={styles.logo}>
                        <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                    </View>

                    <View style={styles.card1}>
                        <View style={{ flex: 0.5, margin: 7 }}>
                            <Avatar size="medium" rounded title="RJ" />
                        </View>

                        <View style={{ flex: 1 }}>
                            {this.state.patientDB.data.map((data) => (
                                <View>
                                    <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>ID:{data.patient_username}</Text>
                                    <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>Age: 34 years old</Text>
                                </View>
                            ))}

                        </View>
                    </View>

                    <View style={styles.card2}>
                        <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Secondary Information</Text>
                        <View style={{
                            flex: 0.1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>

                            <Text style={styles.text}>Weight</Text>
                            <Text style={styles.text}>Height</Text>
                            <Text style={styles.text}>BMI</Text>
                        </View>

                        {this.state.patientDB.data.map((data) => (
                            <View>
                                <View style={{
                                    flex: 0.1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={styles.text}>50 Kg</Text>
                                    <Text style={styles.text}>{data.Height}</Text>
                                    <Text style={styles.text}>{data.BMI}</Text>
                                </View>

                                <Text style={styles.text}>Rehabilitation Centre</Text>
                                <View style={styles.box}>
                                    <Text style={styles.content}>{data.RehabCentre}</Text>
                                </View>

                                <Text style={styles.text}>Medical Description</Text>
                                <View style={styles.box}>
                                    <Text style={styles.content}>Medical Description Deetails details</Text>
                                </View>

                                <Text style={styles.text}>Caretaker Name/ID</Text>
                                <View style={styles.box}>
                                    <Text style={styles.content}>Jeremy Lim</Text>
                                </View>
                            </View>
                        ))}

                        <Text style={styles.text}>Physiotherapist Name/ID</Text>
                        {this.state.physiotherapist.data.map((data) =>
                            <View style={styles.box}>
                                <Text style={styles.content}>{data.name}</Text>
                            </View>
                        )}

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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    img: {
        resizeMode: 'contain',
        width: wp('40%'),
        height: hp('10%'),
    },

    card1: {
        flex: 0.5,
        flexDirection: 'row',
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
    },

    content: {
        color: '#1B3254',
        fontSize: 15,
        opacity: 0.5
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
    }

})