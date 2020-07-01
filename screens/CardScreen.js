import React from 'react';
import { View, StyleSheet } from 'react-native';

import CardComponent from './../components/Card';

export default function CardScreen() {
    return (
        <View style={styles.container}>
            <CardComponent title="Red Sofa for Sale" subTitle="$500" image={require('./../assets/images/couch.jpg')} />
            <CardComponent title="Red Jacket for Sale" subTitle="$100" image={require('./../assets/images/jacket.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 60
    },

});