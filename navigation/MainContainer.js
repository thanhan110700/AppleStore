import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//Screen
import HomePage from './screen/HomePage';
import MenuPage from './screen/MenuPage';
import { NavigationContainer } from '@react-navigation/native';
import HeaderBar from '../components/common/HeaderBar';
import ProductPage from './screen/ProductPage';
import DetailProduct from './screen/DetailProduct';
//Screen Name
const homeName = "Trang chủ"
const productName = "Sản phẩm"
const menuName = "Danh mục"
const Tab = createBottomTabNavigator()

const MainContainer = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName={homeName}

            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let rn = route.name
                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (rn === menuName) {
                        iconName = focused ? 'menu' : 'menu-outline'
                    }
                    else if (rn === productName) {
                        iconName = focused ? 'phone-portrait' : 'phone-portrait-outline'
                    }
                    return <Ionicons name={iconName} style={styles.bottom_bar} size={size} color={color} />
                },
                headerShown: false
            })}>
            <Tab.Screen
                name={homeName}
                component={HomePage}
            />
            <Tab.Screen
                name={productName}
                component={ProductPage}
            />
            <Tab.Screen
                name={menuName}
                component={MenuPage}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottom_bar: {
        paddingTop: 10
    }
})

export default MainContainer;
