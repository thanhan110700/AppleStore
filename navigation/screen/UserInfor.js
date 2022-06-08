import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Image, Button, TextInput, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { ChangeInfoAction } from '../../store/actions/authAction';
const UserInfor = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const data = route.params.data
    const [user, setUser] = useState(data)
    const [message, setMessage] = useState("")
    const handleChangeData = async () => {

        axios.post('http://localhost:3000/api/changeUser', {
            id: user._id,
            fullname: user.fullname,
            phonenumber: user.phonenumber,
            gender: user.gender,
            address: user.address,
            email: user.email,
            token: await AsyncStorage.getItem("token")
        })
            .then(function (response) {
                setMessage("Cập nhật thành công")
                dispatch(ChangeInfoAction())
                console.log("oke")
            })
            .catch(function (error) {
                setMessage("Cập nhật thất bại, Lỗi ", error.message)
                console.log("err", error)
            });
    }
    return (
        <View style={[styles.container, styles.shadow_container]}>
            <View style={styles.tag_image_avatar}>
                <View style={styles.tag_img}>
                    <Image style={styles.img_avatar} source={{ uri: user.avatar }} />
                </View>
                <Text style={styles.txt_username}>
                    {user.username}
                </Text>
            </View>
            <View style={styles.tag_infor_user}>
                <View style={styles.infor_user}>
                    <Text style={styles.txt_inf}>Tên: </Text>
                    <TextInput
                        style={[styles.input_inf, styles.shadow_input]}
                        value={user.fullname}
                        onChange={(e) => { setUser({ ...user, fullname: e.target.value }) }} />
                </View>
                <View style={styles.infor_user}>
                    <Text
                        style={styles.txt_inf}>
                        Ngày sinh:
                    </Text>
                    <Text>
                        {user.birthday.slice(0, 10)}
                    </Text>
                    <Button
                        title="Open"
                        onPress={() => setOpen(true)} />

                </View>
                <View style={styles.infor_user}>
                    <Text
                        style={styles.txt_inf}>
                        Giới tính
                    </Text>
                    <RadioButton
                        value="Nam"
                        status={user.gender === 'Nam' ? 'checked' : 'unchecked'}
                        onPress={() => setUser({ ...user, gender: "Nam" })}
                    />
                    <Text>Nam</Text>
                    <RadioButton
                        value="Nữ"
                        status={user.gender === 'Nữ' ? 'checked' : 'unchecked'}
                        onPress={() => setUser({ ...user, gender: "Nữ" })} />
                    <Text>
                        Nữ
                    </Text>
                </View>
                <View
                    style={styles.infor_user}>
                    <Text
                        style={styles.txt_inf}>
                        Số điện thoại:
                    </Text>
                    <TextInput
                        style={[styles.input_inf, styles.shadow_input]}
                        value={user.phonenumber}
                        onChange={(e) => { setUser({ ...user, phonenumber: e.target.value }) }} />
                </View>
                <View style={styles.infor_user}>
                    <Text
                        style={styles.txt_inf}>
                        Email:
                    </Text>
                    <TextInput
                        style={[styles.input_inf, styles.shadow_input]}
                        value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                </View>
                <View style={styles.infor_user}>
                    <Text
                        style={styles.txt_inf}>
                        Địa chỉ:
                    </Text>
                    <TextInput
                        style={[styles.input_inf, styles.shadow_input]}
                        value={user.address}
                        onChange={(e) => { setUser({ ...user, address: e.target.value }) }} />
                </View>
                <TouchableOpacity
                    style={styles.btn_change}
                    onPress={() => handleChangeData()}>
                    <Text
                        style={styles.txt_btn_change}>
                        Thay đổi
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 15,
    },
    tag_image_avatar: {
        paddingTop: 20,
        alignItems: "center"
    },
    tag_img: {
        borderColor: "#8c8c8c",
        borderWidth: 2,
        borderRadius: 150,
        padding: 4
    },
    img_avatar: {
        height: 150,
        width: 150,
        borderRadius: 150
    },
    txt_username: {
        fontSize: 25,
    },
    tag_infor_user: {
        alignSelf: "stretch",
        padding: 15
    },
    infor_user: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 10,
    },
    txt_inf: {
        flex: 2,
        fontSize: 15
    },
    input_inf: {
        flex: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btn_change: {
        backgroundColor: "#2ecc71",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: "flex-end",
    },
    txt_btn_change: {
        color: "white",
    },
    shadow_container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    shadow_input: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    }
})

export default UserInfor;
