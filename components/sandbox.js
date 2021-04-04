import React from 'react';
import { StyleSheet ,Text, TextInput, Button, View } from "react-native";

export default function Sandbox(){
    return (
        <View style={styles.container}>
            <Text style={styles.BoxOne}>One</Text>
            <Text style={styles.BoxTwo}>two</Text>
            <Text style={styles.BoxThree}>Three</Text>
            <Text style={styles.BoxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: 'gray',
    },
    BoxOne: {
        flex: 1,
        backgroundColor:'gold',
        padding:10,
    },
    BoxTwo: {
        flex: 2,
        backgroundColor:'coral',
        padding:20,
    },
    BoxThree: {
        flex: 3,
        backgroundColor:'white',
        padding:30,
    },
    BoxFour: {
        flex: 4,
        backgroundColor:'violet',
        padding:40,
    }
})