import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../store/actions/authAction';
const { height, width } = Dimensions.get('window')
const divLine = 20
const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const dispatch = useDispatch()

    const handleLogin = () => {
        if (username !== '' || password !== '') {
            axios.post('http://localhost:3000/api/login', {
                username: username,
                password: password
            })
                .then(function (response) {
                    dispatch(LoginAction({ token: response.data.token, id: response.data.id }))
                })
                .catch(function (error) {
                    setAlertMessage("Sai tài khoản hoặc mật khẩu")
                });
        }
    }
    const handleRegister = () => {
        navigation.navigate("RegisterScreen")
    }
    return (
        <View style={[styles.tag_btn_login, styles.shadow]}>
            <Text style={{ fontStyle: "italic" }}>Bạn chưa đăng nhập, Đăng nhập để tiếp tục</Text>
            <Text style={styles.lbl_login}>ĐĂNG NHẬP</Text>
            <TextInput
                style={[styles.input_account, styles.shadow]}
                onChange={(e) => { setUsername(e.target.value) }}
                placeholder="Tên đăng nhập" />
            <TextInput
                style={[styles.input_account, styles.shadow]}
                onChange={(e) => { setPassword(e.target.value) }}
                secureTextEntry={true}
                placeholder="Mật khẩu" />
            <Text>{alertMessage}</Text>
            <TouchableOpacity
                style={[styles.btn_login, styles.shadow]}
                onPress={() => handleLogin()}>
                <Text style={styles.txt_login}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn_login, styles.shadow, styles.btn_navigate_register]}
                onPress={() => handleRegister()}>
                <Text style={styles.txt_login}>ĐĂNG KÝ</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tag_btn_login: {
        marginTop: 50,
        width: width - 50,
        backgroundColor: "white",
        alignItems: "center",
        padding: 20,
    },
    icon_login: {
        marginRight: 25
    },
    lbl_login: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 20,
    },
    txt_login: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    btn_login: {
        flexDirection: "row",
        width: width - 100,
        backgroundColor: "#4cd137",
        paddingVertical: 10,
        justifyContent: "center",
        borderRadius: 5,
        marginVertical: 10
    },
    btn_navigate_register: {
        backgroundColor: "orange"
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    input_account: {
        backgroundColor: "white",
        borderRadius: 5,
        width: width - 100,
        marginVertical: 15,
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 18
    }
})

export default LoginScreen;
