import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Settings from './Settings';
import MyCards from './MyCards';
import Statistics from './Statistics';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'My Cards') {
                            iconName = focused ? 'card' : 'wallet-outline';
                        } else if (route.name === 'Statistics') {
                            iconName = focused ? 'stats-chart' : 'pie-chart-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#0066ff',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
                <Tab.Screen name="My Cards" options={{ headerShown: false }} component={MyCards} />
                <Tab.Screen name="Statistics" options={{ headerShown: false }} component={Statistics} />
                <Tab.Screen name="Settings" options={{ headerShown: false }} component={Settings} />
            </Tab.Navigator>
    );
};
