import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './screens/HomeScreen';
import MyListsScreen from './screens/MyListsScreens';
import ProfileScreen from './screens/ProfileScreen';

//Screens names 
const homeName = 'Home';
const mylistsName = 'My Lists';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn == homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn == mylistsName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn == profileName) {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                     return <Ionicons name={iconName} size={size} color={color} />
                   },
                })}>
            
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={mylistsName} component={MyListsScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />
            </Tab.Navigator>


        </NavigationContainer>
    )
}