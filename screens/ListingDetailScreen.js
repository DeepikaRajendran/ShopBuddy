import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import colors from './../config/colors';
import AppText from './../components/AppText';
import ListItem from './../components/ListItem';

export default function ListingDetailScreen() {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("./../assets/images/couch.jpg")}></Image>

            <View style={styles.detailsContainer}>
                <AppText title="Couch for Sale" style={styles.title}></AppText>
                <AppText title="$100" style={styles.subTitle}></AppText>
            </View>
            <View>
                <ListItem image={require('./../assets/images/mosh.jpg')}
                    title="Mosh Hamedani"
                    subTitle="5 Listings" />
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {

    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8
    },
    subTitle: {
        fontSize: 16,
        color: colors.secondary,
        fontWeight: "bold",
    }
});