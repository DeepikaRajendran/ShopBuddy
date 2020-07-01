import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from './../config/colors';

export default function HomeScreen({ navigation }) {
    const navigate = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titleText}>Sign In</Text>

                {/* <TextInput textContentType="telephoneNumber"
                    placeholder="Enter Phone Number"
                    placeholderTextColor={colors.whiteWithOpacity}
                    textalign='center'
                    style={styles.phoneNumber}
                    onChangeText={text => setPhoneNum(text)}
                    value={phoneNum}
                    keyboardType={'numeric'}
                /> */}
                <TextInput
                    textContentType="emailAddress"
                    placeholder="Email"
                    placeholderTextColor={colors.whiteWithOpacity}
                    textalign='center'
                    style={styles.field}
                />
                <TextInput
                    textContentType="password"
                    placeholder="Password"
                    placeholderTextColor={colors.whiteWithOpacity}
                    textalign='center'
                    style={styles.field}
                    secureTextEntry={true}
                />
            </View>
            {/* <Button
                title="Go to Jane's profile"
                onPress={
                    navigation.navigate('Register')
                }
            /> */}
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={handlePress}
                >
                    <Text style={[styles.setColorBlue, styles.setButtonDecoration]}> Sign In </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigate.navigate('Register')}
                >
                    <Text style={[styles.setColorWhite, styles.setButtonDecoration]}> Register </Text>
                </TouchableOpacity>

            </View>
        </View >
    );
}
function handlePress() {
    console.log("verified")
    navigator.navigation
}

const styles = StyleSheet.create({
    setButtonDecoration: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '800',
    },
    setColorWhite: {
        color: colors.white,

    },
    setColorBlue: {
        color: colors.blue
    },
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        boxShadow: '0px 4px 10px rgba(45, 137, 204, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttons: {
        flex: 0.1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    titleText: {
        fontSize: '24px',
        color: colors.white,
    },
    phoneNumber: {
        width: '50%',
        height: '42px',
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        borderRadius: '5px',
        paddingLeft: '20px'
    },
    signInButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        width: '83px',
        height: '42px',
        borderRadius: '5px',
    },
    registerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue,
        width: '83px',
        height: '42px',
        borderRadius: '5px',
        border: '1px solid #fff',
        borderColor: colors.white,
        borderWidth: '2.5px'
    },
    field: {
        width: '70%',
        height: '42px',
        backgroundColor: 'rgba(255, 255, 255, 0.38)',
        borderRadius: '5px',
        paddingLeft: '20px',
    },


});
