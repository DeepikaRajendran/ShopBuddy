import * as React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function OtpInputText() {
    return (
        <Ionicons
            name={props.name}
            size={30}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );


}
