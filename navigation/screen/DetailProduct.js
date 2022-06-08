import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import PreviewProduct from '../../components/common/PreviewProduct';
import { Table, TableWrapper, Cell } from 'react-native-table-component'
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/actions/cartAction';
import TagCart from '../../components/common/TagCart';
const { height, width } = Dimensions.get('window')
const DetailProduct = ({ navigation, route }) => {

    const dispatch = useDispatch()
    const data = route.params.data
    const [choosingMemory, setChoosingMemory] = useState(data.type[0].memory)
    const [choosingColor, setChoosingColor] = useState(data.type[0].color[0])
    const [choosingPrice, setChoosingPrice] = useState(data.type[0].price)
    const dataDetail = [
        ['Màn hình', data.display],
        ['Hệ điều hành', data.os],
        ['Camera sau', data.backcamera],
        ['Camera trước', data.frontcamera],
        ['Chip', data.chip],
        ['RAM', data.ram],
        ['Bộ nhớ trong', choosingMemory],
        ['Sim', data.sim],
        ['Pin, Sạc', data.pin]
    ]
    console.log("data", data)
    const handleChooseMemory = (data, price) => {
        setChoosingMemory(data)
        setChoosingPrice(price)
    }
    const handleChooseColor = (data) => {
        setChoosingColor(data)
    }
    const handlePressAddCart = () => {
        let product = {
            id_product: data._id,
            name: data.name,
            image: data.images[0],
            memory: choosingMemory,
            color: choosingColor,
            price: choosingPrice,
            amount: 1,
        }
        dispatch(addCart(product))
    }
    return (
        <View style={styles.container}>
            <TagCart navigation={navigation} />
            <ScrollView style={styles.scroll}>
                <View style={styles.tag_preview}>
                    <PreviewProduct listImage={data.images} />
                </View>
                <View>
                    <Text style={styles.txt_name}>
                        {data.name}
                    </Text>
                    <Text style={styles.txt_price}>
                        Giá: {choosingPrice} VNĐ
                    </Text>
                    <View style={styles.tag_version}>
                        {data.type.map((value, index) => {
                            return (
                                <View
                                    style={[styles.btn_version, choosingMemory === value.memory ? styles.active_btn_version : ""]}
                                    key={index}
                                    onStartShouldSetResponder={() => handleChooseMemory(value.memory, value.price)}>
                                    <Text>{value.memory}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.tag_version}>
                        {data.type[0].color.map((value, index) => {
                            return (
                                <View
                                    style={[styles.btn_version, choosingColor === value ? styles.active_btn_version : ""]}
                                    key={index}
                                    onStartShouldSetResponder={() => handleChooseColor(value)}>
                                    <Text>{value}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.tag_btn}>
                        <TouchableOpacity
                            onPress={() => handlePressAddCart()}
                            color="#f194ff"
                            style={[styles.btn, styles.btn_addcart]}>
                            <Text style={styles.txt_btn}>
                                Thêm giỏ hàng
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.btn, styles.btn_buy]}>
                            <Text style={styles.txt_btn}>
                                Mua hàng
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    <View>
                        <Table borderStyle={{ borderColor: 'transparent' }}>
                            {
                                dataDetail.map((rowData, index) => (
                                    <TableWrapper key={index} style={{ flexDirection: 'row', backgroundColor: '#ecf0f1  ' }}>
                                        {
                                            rowData.map((cellData, cellIndex) => (
                                                <Cell key={cellIndex} data={cellData} textStyle={{ margin: 6 }} />
                                            ))
                                        }
                                    </TableWrapper>
                                ))
                            }
                        </Table>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    line: {
        borderBottomColor: '#8c8c8c',
        borderBottomWidth: 1,
        width: width - 20,
        margin: 10
    },
    scroll: {
        height: height - 200
    },
    txt_name: {
        marginTop: 10,
        fontSize: 30,
        textAlign: "center"
    },
    txt_price: {
        fontSize: 20,
        textAlign: "center"
    },
    tag_btn: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
    },
    btn_buy: {
        backgroundColor: "#2ecc71"
    },
    btn_addcart: {
        backgroundColor: "#3498db"
    },
    txt_btn: {
        color: "white",
        fontSize: 15
    },
    tag_version: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
    },

    btn_version: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 4
    },
    active_btn_version: {
        borderWidth: 3,
        borderColor: "black"
    },
    text: {
        margin: 6
    },
})

export default DetailProduct;
