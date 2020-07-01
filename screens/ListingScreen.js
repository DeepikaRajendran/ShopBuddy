import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Screen from './../components/Screen';
import ItemSeparator from './../components/ItemSeparator';
import CardComponent from './../components/Card';
import colors from './../config/colors';

const data = [
    {
        id: 1,
        name: 'Red jacket for Sale',
        price: 100,
        image: require('./../assets/images/jacket.jpg')
    },
    {
        id: 2,
        name: 'Couch for Sale',
        price: 500,
        image: require('./../assets/images/couch.jpg')
    }
];
export default function ListingScreen() {
    return (
        <Screen style={styles.container}>
            <FlatList
                style={styles.flatListContainer}
                data={data}
                renderItem={({ item }) => <CardComponent title={item.name} subTitle={item.price} image={item.image} />}
                ItemSeparatorComponent={ItemSeparator} />

        </Screen>
    );


}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});
