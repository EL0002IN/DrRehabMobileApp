import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, ScrollView, SafeAreaView, FlatList, ListItem } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import DynamicList from './DynamicList';



export default class Activities extends React.Component {
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
            { patient_username: 'rachel_josephine', ExerciseDate: '2020-02-23' })
            .then(response => {
                this.setState({
                    patientDB: {
                        error: response.data.error,
                        data: response.data.data,
                        message: response.data.message
                    }
                });
                // {
                //     this.state.patientDB.data.map((ID) =>
                //         console.log(ID.ExerciseID)
                //     )
                // }
                // console.log(Object.values(response.data.data)[0].ExerciseID);
            })
        // .catch(error => console.log(error));
        // setTimeout(() => { console.log(this.state.patientDB.message) }, 100)

    }
    componentDidMount() {
        this.getExerciseID();
    }
    render() {
        const { navigate } = this.props.navigation;
        let ListKey = this.state.patientDB.data.map((data) =>
            ({ key: data.ExerciseID, status: data.ActiveExercise }));
        let status = this.state.patientDB.data.map(data => data.ActiveExercise);

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollView>
                    <View style={styles.logo}>
                        <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                    </View>

                    <View style={styles.card1}>
                        <FlatList
                            data={ListKey}
                            renderItem={({ item }) =>
                                <View style={{ flex: 0.1, flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.text}>{item.key}</Text>
                                        <Text style={styles.content}>Estimated time:5 minutes</Text>
                                    </View>
                                    {item.status == 0 ?
                                        <View style={styles.circleGradientCompleted}>
                                            <Text style={styles.buttontext}>Completed</Text>
                                        </View>
                                        : <View style={styles.circleGradient}>
                                            <TouchableHighlight onPress={() => navigate('Instruction')}>
                                                <Text style={styles.buttontext}>Start</Text>
                                            </TouchableHighlight>
                                        </View>
                                    }
                                </View>}
                        />
                        {/* 
                            {this.state.patientDB.data.map(data => {
                                if (data.ActiveExercise == 1) {
                                    return <View style={styles.circleGradientCompleted}>
                                        <Text style={styles.buttontext}>Completed</Text>
                                    </View>;
                                } else {
                                    return <View style={styles.circleGradient}>
                                        <TouchableHighlight onPress={() => navigate('Instruction')}>
                                            <Text style={styles.buttontext}>Start</Text>
                                        </TouchableHighlight>
                                    </View>
                                }
                            })} */}
                    </View>
                </ScrollView>
            </SafeAreaView >
        )

    }
    displayJsxMessage() {
        if (this.props.isGreeting) {
            return <Text> Hello, JSX! </Text>;
        } else {
            return <Text> Goodbye, JSX! </Text>;
        }
    }

    renderStatus() {
        const { navigate } = this.props.navigation;
        // this.state.patientDB.data.map((data) => {
        if (item.status == 1)
            return <View style={styles.circleGradient}>
                <TouchableHighlight onPress={() => navigate('Instruction')}>
                    <Text style={styles.buttontext}>Start</Text>
                </TouchableHighlight>
            </View>;
        else {
            return console.log('renderStatus')
        }

        // })
        // this.state.patientDB.data.map((data) => {
        //     if (data.ActiveExercise == 1) {
        //         return <View style={styles.circleGradient}>
        //             <TouchableHighlight onPress={() => navigate('Instruction')}>
        //                 <Text style={styles.buttontext}>Start</Text>
        //             </TouchableHighlight>
        //         </View>;
        //     }
        //     return <View style={styles.circleGradientCompleted}>
        //         <Text style={styles.buttontext}>Completed</Text>
        //     </View>;

        // })
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
        marginTop: 5,
        marginLeft: 35,
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