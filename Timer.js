import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import axios from 'axios';



export default class TimerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTimerStart: false,
            isStopwatchStart: false,
            timerDuration: 3000,
            resetTimer: false,
            resetStopwatch: false,
            changestate: false
        };
        this.startStopTimer = this.startStopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.startStopStopWatch = this.startStopStopWatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
        this.handleExerciseComplete = this.handleExerciseComplete.bind(this);
    }
    startStopTimer() {
        this.setState({ isTimerStart: !this.state.isTimerStart, resetTimer: false });
    }
    resetTimer() {
        this.setState({ isTimerStart: false, resetTimer: true });
    }
    startStopStopWatch() {
        this.setState({ isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false });
    }
    resetStopwatch() {
        this.setState({ isStopwatchStart: false, resetStopwatch: true });
    }
    getFormattedTime(time) {
        this.currentTime = time;
    }

    handleExerciseComplete = () => {
        console.log('Exercise completed 2');
    }

    handleTimerComplete = () => {
        alert("Exercise completed!");
        axios.post('https://imaginecupdrrehab.azurewebsites.net/api/Patient/completeExercise', {
            patient_username: 'rachel_josephine',
            ExerciseID: 'Exercise3',
            ExerciseDate: '2020-02-23',
            Accuracy: 50
        })
        // }).then(
        //     this.setState({ changestate: true })
        // )

        { console.log('Exercise completed') };
    };

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'column', alignItems: 'center' }}>
                <ScrollView>
                    {/* <View style={styles.logo}>
                        <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                    </View> */}

                    <View style={{ flex: 1, marginTop: 32, alignItems: 'center', justifyContent: 'center' }}>
                        <Timer
                            totalDuration={this.state.timerDuration} msecs
                            //Time Duration
                            start={this.state.isTimerStart}
                            //To start
                            reset={this.state.resetTimer}
                            //To reset
                            options={options}
                            //options for the styling
                            handleFinish={this.handleTimerComplete}
                            //can call a function On finish of the time 
                            getTime={this.getFormattedTime} />
                        <TouchableHighlight onPress={this.startStopTimer} style={styles.circleGradient}>
                            <Text style={styles.buttontext}>
                                {!this.state.isTimerStart ? "START" : "PAUSE"}
                            </Text>
                        </TouchableHighlight>
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

// const handleTimerComplete = () => {
//     alert("Exercise completed!");
//     {console.log('Exercise completed')};
// };
const options = {
    container: {
        backgroundColor: '#FF0000',
        padding: 5,
        borderRadius: 5,
        width: 200,
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 25,
        color: '#FFF',
        marginLeft: 7,
    }
};