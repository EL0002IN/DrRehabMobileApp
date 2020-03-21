import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, ScrollView, SafeAreaView, FlatList, ListItem } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';


export default class DynamicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientDB: {
                error: [],
                data: [],
                message: ''
            }
        };

        this.getExerciseID = this.getExerciseID.bind(this);
    }

    getExerciseID = () => {
        axios.post('https://imaginecupdrrehab.azurewebsites.net/api/Physiotherapist/ViewPatientsDetails',
            { patient_username: 'dewi_123', ExerciseDate: '2020-02-22' })
            .then(response => {
                this.setState({
                    patientDB: {
                        error: response.data.error,
                        data: response.data.data,
                        message: response.data.message
                    }
                });
                {
                    this.state.patientDB.data.map((ID) =>
                        console.log(ID.ExerciseID)
                    )
                }
                // console.log(Object.values(response.data.data)[0].ExerciseID);
            }).catch(error => console.log(error));
        setTimeout(() => { console.log(this.state.patientDB.message) }, 100)

    }
    componentDidMount() {
        this.getExerciseID();
    }
    render() {
        const { navigate } = this.props.navigation;
        let ListKey = this.state.patientDB.data.map((data) =>
            ({ key: data.ExerciseID, status: data.ActiveExercise }));

        if (ListKey.status == '1') {
            return (
                <FlatList
                    data={ListKey}
                    renderItem={({ item }) =>
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                            <View>
                                <Text style={styles.text}>{item.key}</Text>
                                <Text style={styles.content}>Estimated time:10 minutes</Text>
                            </View>
                            <View style={styles.circleGradient}>
                                <TouchableHighlight onPress={() => navigate('Instruction')}>
                                    <Text style={styles.buttontext}>Start</Text>
                                </TouchableHighlight>
                            </View>

                        </View>}

                />
            )
        } else {
            return (
                <FlatList
                    data={ListKey}
                    renderItem={({ item }) =>
                        <View style={{ flex: 0.1, flexDirection: 'row' }}>
                            <View>
                                <Text style={styles.text}>{item.key}</Text>
                                <Text style={styles.content}>Estimated time:10 minutes</Text>
                            </View>
                            <View style={styles.circleGradientCompleted}>
                                <Text style={styles.buttontext}>Completed</Text>
                            </View>
                        </View>}

                />
            )
        }

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
        marginTop: 5,
        marginLeft: 35,
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

    buttontextB: {
        margin: 5,
        paddingHorizontal: 6,
        textAlign: "center",
        // backgroundColor: "white",
        color: 'blue',
        fontSize: 15,

    },

})