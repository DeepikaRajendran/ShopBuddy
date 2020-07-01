import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppText({ title, style }) {
    return (
        <Text style={[styles.container, style]}>{title}</Text>
    );
}
const styles = StyleSheet.create({
    container: {

    }
});

export default AppText;
