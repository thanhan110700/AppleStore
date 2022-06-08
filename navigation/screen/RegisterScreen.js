import React, { useState } from 'react';
import axios from 'axios';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { RadioButton } from 'react-native-paper'
const { height, width } = Dimensions.get('window')
const divLine = 20
const RegisterScreen = () => {

    const [data, setData] = useState({})
    const [rePassword, setRePassword] = useState({})
    const [alertMessage, setAlertMessage] = useState("")
    const dispatch = useDispatch()
    const [date, setDate] = useState("")
    const [open, setOpen] = useState(false)

    const handleRegister = () => {
        console.log(data)
    }
    return (
        <View style={[styles.tag_btn_register, styles.shadow]}>
            <Text style={styles.lbl_register}>ĐĂNG KÝ TÀI KHOẢN</Text>
            <TextInput
                style={[styles.input_account, styles.shadow]}
                onChange={(e) => { setData({ ...data, username: e.target.value }) }}
                placeholder="Tên đăng nhập" />
            <TextInput
                style={[styles.input_account, styles.shadow]}
                onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                secureTextEntry={true}
                placeholder="Mật khẩu" />
            <TextInput
                style={[styles.input_account, styles.shadow]}
                onChange={(e) => { setRePassword(e.target.value) }}
                secureTextEntry={true}
                placeholder="Nhập lại Mật khẩu" />
            <TextInput
                style={[styles.input_account, styles.shadow]}
                onChange={(e) => { setData({ ...data, fullname: e.target.value }) }}
                placeholder="Họ và tên" />
            <View style={styles.tag_gender}>
                <RadioButton
                    value="Nam"
                    status={data.gender === 'Nam' ? 'checked' : 'unchecked'}
                    onPress={() => setData({ ...data, gender: "Nam" })}
                />
                <Text>
                    Nam
                </Text>
                <RadioButton
                    value="Nữ"
                    status={data.gender === 'Nữ' ? 'checked' : 'unchecked'}
                    onPress={() => setData({ ...data, gender: "Nữ" })}
                />
                <Text>
                    Nữ
                </Text>
            </View>
            <TextInput
                style={[styles.input_account, styles.shadow]}
                onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                placeholder="Email" />
            <TextInput
                style={[styles.input_account, styles.shadow]}
                onChange={(e) => { setData({ ...data, address: e.target.value }) }}
                placeholder="Địa chỉ" />
            <Text>{alertMessage}</Text>
            <TouchableOpacity
                style={[styles.btn_register, styles.shadow]}
                onPress={() => handleRegister()}>
                <Text style={styles.txt_register}>ĐĂNG KÝ</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    tag_btn_register: {
        marginTop: 50,
        width: width - 50,
        backgroundColor: "white",
        alignItems: "center",
        padding: 20,
    },
    icon_register: {
        marginRight: 25
    },
    lbl_register: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 20,
    },
    txt_register: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    btn_register: {
        flexDirection: "row",
        width: width - 100,
        backgroundColor: "#4cd137",
        paddingVertical: 10,
        justifyContent: "center",
        borderRadius: 5,
        marginVertical: 20
    },
    tag_gender: {
        flexDirection: "row",
        alignItems: "center",
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

export default RegisterScreen;
