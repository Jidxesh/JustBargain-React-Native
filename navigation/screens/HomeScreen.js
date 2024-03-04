import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => alert('This is the "Home" screen')}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
}
