import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { inputAmount, removeCart } from '../../store/actions/cartAction';

const ItemProductCart = ({ navigation, value, isDelete }) => {
    const [amount, setAmount] = useState(value.amount)
    const dispatch = useDispatch()
    const handelOnchangeAmount = (e) => {
        var eAmount = e.target.value
        if (eAmount <= 0) {
            eAmount = 0
        }
        setAmount(eAmount)
        dispatch(inputAmount({ data: value, amount: eAmount }))

    }
    const handleClickRemove = () => {
        dispatch(removeCart({ value }))

    }
    return (
        <View style={styles.tag_item}>
            <View style={styles.tag_image}>
                <Image
                    style={styles.img_product}
                    resizeMode="stretch"
                    source={
                        {
                            uri: value.image
                        }
                    } />
            </View>
            <View style={styles.big_tag_detail}>
                <View
                    style={styles.tag_detail}>
                    <View >
                        <Text
                            style={styles.name_product}>
                            {value.name}
                        </Text>
                    </View>
                    <View >
                        <Text
                            style={styles.price_product}>
                            Giá: {(value.price * amount)} VNĐ
                        </Text>
                    </View>
                    <View
                        style={styles.version_product}>
                        <Text>
                            Màu: {value.color}, Phiên bản: {value.memory}
                        </Text>
                    </View>
                    <View style={styles.version_product}>
                        <Text>Số lượng:</Text>
                        <TextInput
                            keyboardType='numeric'
                            value={amount}
                            onChange={(e) => handelOnchangeAmount(e)}
                            style={styles.input_amount} />
                    </View>
                </View>
            </View>
            {isDelete ? <View style={styles.tag_btn}>
                <Button
                    onPress={() => handleClickRemove()}
                    style={styles.btn_remove}
                    color="red"
                    title='X'
                />
            </View> : ""}
        </View>
    );
}

const styles = StyleSheet.create({
    tag_item: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10
    },
    tag_image: {
        flex: 4
    },
    img_product: {
        height: 80,
        width: 80,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    name_product: {
        fontSize: 16,
        color: 'black',
    },
    big_tag_detail: {
        flexDirection: "row",
        flex: 12,
    },
    description: {
        fontSize: 10,
        color: '#8b8e91',
    },
    version_product: {
        flexDirection: "row"
    },
    price_product: {
        fontSize: 10,
        color: "#8b8e91",
        textalign: 'end',
    },
    tag_btn: {
        flex: 1
    },
    btn_remove: {
        width: 80,
        borderTopRightRadius: 10
    }
})

export default ItemProductCart;
