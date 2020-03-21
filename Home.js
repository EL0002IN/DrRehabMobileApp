import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import CalendarStrip from 'react-native-calendar-strip';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationEvents } from 'react-navigation';
import axios from 'axios';



export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fill: 40,
            ExercisesCompleted: 3,
            patientDB: {
                error: [],
                data: [],
                message: ''
            }
        }
    }

    componentDidMount() {
        axios.post('https://imaginecupdrrehab.azurewebsites.net/api/Physiotherapist/ViewPatientsDetails',
            { patient_username: 'rachel_josephine' })
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
                //         console.log(ID.Accuracy)
                //     )
                // }
            })

    }

    render() {
        const { navigate } = this.props.navigation;

        let chart = this.state.patientDB.data.map((res) => res.Accuracy);

        let accuracy = {
            labels: [1, 2, 3, 4, 5],
            datasets: [{
                data: [89, 60, 50, 0, 0],
                strokeWidth: 2
            }]
        };
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollView>
                    {/* {console.log(chart)} */}
                    <View style={styles.logo}>
                        <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                    </View>

                    <View style={styles.card1}>
                        <View style={{ flex: 0.5, margin: 7 }}>
                            <AnimatedCircularProgress
                                size={100}
                                width={3}
                                fill={this.state.fill}
                                tintColor="#008AB2"
                                backgroundColor="#CFD8DC">
                                {
                                    (fill) => (
                                        <Text style={{ fontSize: 15 }}>{this.state.ExercisesCompleted}/6</Text>
                                    )
                                }
                            </AnimatedCircularProgress>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Exercise today!</Text>
                            <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>Estimate time: 60 minutes</Text>
                            <View style={styles.circleGradient}>
                                <TouchableOpacity onPress={() => navigate('Activities')}>
                                    <Text style={styles.buttontext}>Let's start</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.card2}>
                        <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Accuracy</Text>
                        <LineChart
                            style={{ margin: 5 }}
                            data={accuracy}
                            width={Dimensions.get('window').width - 40}
                            height={180}
                            chartConfig={{
                                backgroundColor: '#ffffff',
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />

                        <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Weekly Schedule</Text>
                        <View style={{ flex: 1 }}>
                            <CalendarStrip
                                style={{ height: 50, paddingTop: -10, paddingBottom: 0 }}
                                showMonth={false}

                            />
                        </View>

                        <Text style={{ fontSize: 20, color: '#1B3254', margin: 5 }}>Physiotherapist</Text>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>Jessica Thom</Text>
                                <Text style={{ fontSize: 15, color: '#1B3254', margin: 5 }}>Specialisation: Work Rehab</Text>
                            </View>

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