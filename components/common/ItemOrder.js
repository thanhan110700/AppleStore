import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import ItemProductOrder from './ItemProductOrder';
import { changeStatus } from '../../store/actions/productActions'
import axios from 'axios';
const ItemOrder = ({ data }) => {
    const dispatch = useDispatch()
    const [listProduct, setListProduct] = useState([])
    useLayoutEffect(() => {
        setListProduct(data.detail)
    }, [data])

    const handleCancelOrder = async () => {
        axios.post("http://localhost:3000/api/cancelOrder/", {
            id: data._id,
            token: await AsyncStorage.getItem('token')
        })
            .then((response) => {
                dispatch(changeStatus())
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <View style={[styles.container_list, styles.shadow]}>
            <Text style={[styles.txt, styles.txt_id_order]}>
                Mã hóa đơn:{data._id}
            </Text>
            <Text style={[styles.txt, styles.txt_date_order]}>
                Ngày đặt hàng: {data.createAt}
            </Text>
            <View style={styles.list_item}>
                {listProduct.map((data, index) => {
                    return <ItemProductOrder data={data} key={index} />
                })}
            </View>
            <View style={styles.note_product}>
                <Text style={[styles.txt]}>
                    Bạn hài lòng với sản phẩm đã nhận? Nếu không, vui lòng chọn "Hủy đơn hàng"
                </Text>
            </View>
            <View style={styles.status}>
                <Text style={[styles.txt, styles.txt_status]}>
                    Tình trạng đơn hàng:
                    {(data.status === 1 ? "Chờ xác nhận" : "")}
                    {(data.status === 2 ? "Chờ lấy hàng" : "")}
                    {(data.status === 3 ? "Đang giao" : "")}
                    {(data.status === 4 ? "Đã giao" : "")}
                    {(data.status === 5 ? "Đã hủy" : "")}
                </Text>
                {data.status === 1 || data.status === 2 || data.status === 3
                    ? <TouchableOpacity
                        style={styles.btn_cancel}
                        onPress={() => handleCancelOrder()}>
                        <Text style={styles.txt_btn_cancel}>
                            Hủy đơn hàng
                        </Text>
                    </TouchableOpacity>
                    : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container_list: {
        marginHorizontal: 10,
        backgroundColor: "#ecf0f1",
        padding: 5,
        marginVertical: 5,
        borderRadius: 5
    },
    txt: {
        color: "#2c3e50"
    },
    txt_id_order: {
        fontSize: 17
    },
    txt_date_order: {
        fontSize: 12
    },
    status: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btn_cancel: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: "red"
    },
    txt_btn_cancel: {
        color: "white"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default ItemOrder;
