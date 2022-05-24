import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ItemProductCart from '../../components/common/ItemProductCart';
import { ChangeInfoAction } from '../../store/actions/authAction';
const width = Dimensions.get('window').width
const CartScreen = ({ navigation }) => {
    const listCart = useSelector(state => state.cart.listCart)
    var isLogin = useSelector(state => state.auth.isLogin)
    const dispatch = useDispatch()
    var statusChange = useSelector(state => state.auth.changeInfo)
    const [address, setAddress] = useState('')
    var total = useSelector(state => state.cart.total)
    const [statusChangeAddress, setStatusChangeAddress] = useState('')
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
                            console.log(json)
                            setAddress(json.address)
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

    const handleChangeAddress = async () => {
        axios.post('http://localhost:3000/api/changeAddress'
            , {
                id: await AsyncStorage.getItem('uid'),
                address: address,
                token: await AsyncStorage.getItem('token')
            }
        )
            .then(function (response) {
                // handle success
                dispatch(ChangeInfoAction())
                setStatusChangeAddress("Thay đổi địa chỉ thành công")
            })
            .catch(function (error) {
                // handle error
                setStatusChangeAddress("Thay đổi địa chỉ thất bại, đã xảy ra vấn đề!")
            })

    }
    const handleRevenue = async () => {
        axios.post('http://localhost:3000/api/addOrder'
            , {
                idUser: await AsyncStorage.getItem('uid'),
                total: total,
                detail: listCart,
                status: 1,
                token: await AsyncStorage.getItem('token')

            }
        )
            .then(function (response) {
                // handle success
                console.log("first", response.data)
                navigation.navigate("RevenueScreen")

            })
            .catch(function (error) {
                // handle error
                console.log("not", error)
                //setStatusChangeAddress("Đặt hàng thất bại, xảy ra vấn đề!")
            })
    }
    const CartIsNotEmpty = () => {
        return <View>
            {isLogin === false
                ? <Text>Bạn chưa đăng nhập</Text>
                : <View style={styles.tag_address}>
                    <Text style={styles.txt_address}>
                        Địa chỉ:
                    </Text>
                    <TextInput
                        style={styles.input_address}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                    <TouchableOpacity
                        style={styles.btn_change}
                        onPress={() => handleChangeAddress()}>
                        <Text
                            style={styles.txt_btn_change}>
                            Sửa
                        </Text>
                    </TouchableOpacity>
                </View>}
            <Text>{statusChangeAddress}</Text>
            <Text>Tổng tiền: {total} VNĐ</Text>
            <View>
                {listCart.map((data, index) => {
                    return <ItemProductCart key={index} value={data} isDelete={true} />
                })}
            </View>
            <View style={styles.tag_btn_option}>
                <TouchableOpacity
                    style={[styles.btn, styles.btn_cancel]}>
                    <Text style={styles.txt_btn}>
                        Hủy
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, styles.btn_revenue]}
                    onPress={() => handleRevenue()}>
                    <Text style={styles.txt_btn}>
                        Thanh toán
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    }
    const CartIsEmpty = () => {
        return <View style={styles.tag_cartempty}>
            <Image style={styles.img_cartempty}
                source={
                    { uri: 'https://ichibajp.com/image/img-cart-empty.png' }
                }
            />
            <Text style={styles.txt_cartempty}>
                Giỏ hàng trống
            </Text>
        </View>
    }
    return (
        <View>
            {listCart.length !== 0 ? <CartIsNotEmpty /> : <CartIsEmpty />}
        </View>
    );
}

const styles = StyleSheet.create({

    tag_cartempty: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50
    },
    txt_cartempty: {
        color: "#2c3e50",
        fontSize: 25,
        marginTop: 10
    },
    img_cartempty: {
        height: 200,
        width: 200
    },
    tag_address: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 8
    },
    txt_address: {
        fontSize: 15,
        flex: 2
    },
    input_address: {
        backgroundColor: "white",
        height: 30,
        flex: 8,
        paddingLeft: 5
    },
    btn_change: {
        backgroundColor: "#2ecc71",
        paddingVertical: 5,
        paddingHorizontal: 25,
        flex: 2,
        justifyContent: "center",
        alignItems: 'center'
    },
    tag_btn_option: {
        position: "fixed",
        bottom: 0,
        flexDirection: "row",
        height: 70,
        width: width,
    },
    btn: {
        flex: 1,
        width: width / 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10
    },
    txt_btn: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
    btn_cancel: {
        backgroundColor: "#e74c3c"
    },
    btn_revenue: {
        backgroundColor: "#2ecc71"
    }
})

export default CartScreen;
