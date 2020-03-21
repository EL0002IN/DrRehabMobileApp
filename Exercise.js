import React from 'react';
import { Flatlist, Text, View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fill: 40
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center' }}>
                <View style={styles.logo}>
                    <Text>Dr Rehab Logo</Text>
                    <Image style={styles.img} source={require('./DREHAB.png')}></Image>
                </View>

                {/* <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                /> */}

            </SafeAreaView >
        );

    }
}

const styles = StyleSheet.create({
    logo: {
        flex: 0.6,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        resizeMode: 'contain',
        width: 150,
        margin: 50,

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