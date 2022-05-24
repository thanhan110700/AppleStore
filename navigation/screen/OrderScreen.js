import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Picker, Text, StyleSheet, ScrollView } from 'react-native';
import ItemProductCart from '../../components/common/ItemProductCart';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemOrder from '../../components/common/ItemOrder';

const OrderScreen = ({ navigation, route }) => {
    const data = route.params.data
    console.log(data)
    const [selectedValue, setSelectedValue] = useState(0)
    const [products, setProducts] = useState([])
    const [isChanged, setIsChanged] = useState(0)
    const change = (data,value) => {
        setProducts(data.filter(e => e.status === value))
        setIsChanged(isChanged + 1)

    }
    useEffect(async () => {
        axios.get('http://localhost:3000/api/getOrderUser/' + data._id,
            {
                headers: {
                    token: await AsyncStorage.getItem("token")
                }
            })
            .then(function (response) {
                // handle success
                let data = response.data
                switch (selectedValue) {
                    case 0:
                        setProducts(data)
                    case 1:
                        change(data,1)
                        break
                    case 2:
                        change(data,2)
                        break
                    case 3:
                        change(data,3)
                        break
                    case 4:
                        change(data,4)
                        break
                    case 5:
                        change(data,5)
                        break
                    default:
                        break
                }


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [isChanged])
    console.log("first", isChanged)
    const handleChangeStatus = (itemValue) => {
        setSelectedValue(itemValue)
        setIsChanged(isChanged + 1)
    }
    return (
        <View>
            <View style={styles.tag_filter_product}>
                <Ionicons
                    name="filter"
                    size={25}
                    color="black"
                    style={styles.icon_filter}
                />
                <Text
                    style={styles.txt_filter}
                >
                    Danh mục
                </Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker_product}
                    onValueChange={(itemValue, itemIndex) => handleChangeStatus(itemValue)}
                >
                    <Picker.Item
                        label="Tất cả"
                        value="0"
                    />
                    <Picker.Item
                        label="Chờ xác nhận"
                        value="1"
                    />
                    <Picker.Item
                        label="Chờ lấy hàng"
                        value="2"
                    />
                    <Picker.Item
                        label="Đang giao"
                        value="3"
                    />
                    <Picker.Item
                        label="Đã giao"
                        value="4"
                    />
                    <Picker.Item
                        label="Đã hủy"
                        value="5"
                    />
                </Picker>
            </View>
            <ScrollView
                style={styles.scroll_view}>
                {
                    products.map((product, index) => {
                        console.log("peo", product)
                        return <ItemOrder key={index} data={product} />
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    tag_filter_product: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    scroll_view: {
        height: 620
    },
    icon_filter: {
        marginRight: 10,
    },
    txt_filter: {
        marginRight: 10,
        fontSize: 15
    },
    picker_product: {
        border: "none",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10
    },
})

export default OrderScreen;
