import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

//import OtpInputText from './../components/OtpInputText';
import colors from './../config/colors';

export default function OtpVerificationScreen() {


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titleText}>OTP</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    titleText: {
        fontSize: '24px',
        color: colors.white,
    },
})