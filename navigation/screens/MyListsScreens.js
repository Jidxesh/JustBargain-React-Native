import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function MyListsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>MyListsScreen</Text>
            </TouchableOpacity>
        </View>
    );
}
