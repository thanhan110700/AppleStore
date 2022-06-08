import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../../store/actions/authAction';

const { height, width } = Dimensions.get('window')
const divLine = 20

const IssetUser = ({ navigation, dataUser }) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(LogoutAction())
    }
    const handlePressUser = () => {
        navigation.navigate("TagMenuUserInfor", { data: dataUser })
    }
    const handlePressOrder = () => {
        navigation.navigate("OrderScreen", { data: dataUser })
    }
    return (
        <View style={{ width: width - 10 }}>
            <View style={styles.tag_user}>
                <View style={styles.tag_img_avatar}>
                    <Image
                        source={{ uri: dataUser.avatar }}
                        style={styles.img_avatar}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.tag_txt_username}>
                    <Text style={styles.txt_username}>
                        {dataUser.username}
                    </Text>
                </View>

            </View>
            <View style={styles.line} />
            <View style={styles.tag_btn_options}>
                <TouchableOpacity
                    onPress={() => handlePressUser()}
                    style={[styles.btn_options, styles.shadow]}>
                    <MaterialCommunityIcons
                        name="face-man-profile"
                        size={24}
                        color="black"
                        style={styles.icon_option} />
                    <Text>Thông tin Cá nhân</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handlePressOrder()}
                    style={[styles.btn_options, styles.shadow]}>
                    <AntDesign
                        name="profile"
                        size={24}
                        color="black"
                        style={styles.icon_option} />
                    <Text>Thông tin Hóa đơn</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn_options, styles.shadow]}>
                    <AntDesign
                        name="book"
                        size={24}
                        color="black"
                        style={styles.icon_option} />
                    <Text>
                        Các điều khoản
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn_options, styles.shadow, styles.btn_logout]}
                    onPress={() => handleLogout()}>
                    <MaterialCommunityIcons name="logout" size={24} color="white" style={styles.icon_option} />
                    <Text style={{ color: "white" }}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tag_user: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    tag_img_avatar: {
        borderRadius: 100,
        padding: 2,
        borderColor: "#8c8c8c",
        borderWidth: 1,
    },
    img_avatar: {
        height: 50,
        width: 50,
        borderRadius: 100
    },
    txt_username: {
        fontSize: 20,
        marginLeft: 15
    },
    tag_icon_logout: {
        alignItems: "flex-end"
    },
    btn_logout: {
        backgroundColor: "red"
    },
    tag_btn_options: {
        marginTop: 10
    },
    btn_options: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 5,
        backgroundColor: "white",
        marginHorizontal: 10,
        borderRadius: 10,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 0.5, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    icon_option: {
        marginRight: 10
    },
})

export default IssetUser;
