import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../../components/common/LoginScreen';
import IssetUser from '../../components/common/IssetUser';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import UserInfor from './UserInfor';
import OrderScreen from './OrderScreen';
import RegisterScreen from './RegisterScreen';
const { height, width } = Dimensions.get('window')
const divLine = 20
const Stack = createStackNavigator();

const MenuPage = ({ navigation }) => {
    var isLogin = useSelector(state => state.auth.isLogin)
    var statusChange = useSelector(state => state.auth.changeInfo)
    const [dataUser, setDataUser] = useState({})
    useEffect(async () => {
        try {
            const uid = await AsyncStorage.getItem("uid")
            if (uid !== null) {
                if (isLogin) {
                    fetch('http://localhost:3000/api/getUser/' + uid,
                        {
                            method: "GET",
                            headers: {
                                token: await AsyncStorage.getItem("token")
                            }
                        }
                    )
                        .then((response) => response.json())
                        .then((json) => {
                            setDataUser(json)
                        }).catch((error) => {
                            console.error(error);
                        });
                }
            }
        } catch (e) {
            // error reading value
            console.log("first", e)
        }
    }, [statusChange])
    const CheckLogin = () => {
        return (<View style={styles.container}>
            {isLogin
                ? <IssetUser navigation={navigation} dataUser={dataUser} />
                : <LoginScreen navigation={navigation} />}
        </View>

        )
    }
    return (
        <Stack.Navigator
            initialRouteName='TagMenuCheck'
        >
            <Stack.Screen
                name="TagMenuCheck"
                component={CheckLogin}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="TagMenuUserInfor"
                component={UserInfor}
                options={{ title: "Thông tin người dùng" }} />
            <Stack.Screen
                name="OrderScreen"
                component={OrderScreen}
                options={{ title: "Danh sách đơn hàng" }} />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    line: {
        borderBottomColor: '#F3F3F3',
        borderBottomWidth: 1,
        width: width - divLine,
        margin: divLine / 2
    }

})

export default MenuPage;
