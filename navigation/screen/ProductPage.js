import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import CardProduct from '../../components/common/CardProduct';
import { createStackNavigator } from '@react-navigation/stack';
import DetailProduct from './DetailProduct';
import TagCart from '../../components/common/TagCart';
const Stack = createStackNavigator();
const { height, width } = Dimensions.get("window")
const ProductPage = ({ navigation }) => {
    const [filterProduct, setFilterProduct] = useState("iphone");
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/' + filterProduct + '/',
            {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => {
                setListProduct(json)
            }).catch((error) => {
                console.error(error);
            });
    }, [filterProduct])
    const Product = ({ navigation }) => {
        return (
            <View style={styles.shadowProp}>
                <TagCart navigation={navigation} />
                <View style={styles.tag_filter_product}>
                    <Ionicons name="filter" size={25} color="black" style={styles.icon_filter} />
                    <Text style={styles.txt_filter}>Danh mục</Text>
                    <Picker
                        selectedValue={filterProduct}
                        style={styles.picker_product}
                        onValueChange={(itemValue, itemIndex) => setFilterProduct(itemValue)}
                    >
                        <Picker.Item label="iPhone" value="iphone" />
                        <Picker.Item label="MacBook" value="macbook" />
                        <Picker.Item label="Apple Watch" value="applewatch" />
                    </Picker>
                </View>
                <View>
                    <ScrollView style={styles.scroll_product}>
                        <View style={styles.tag_list}>
                            {listProduct.map((data, index) => {
                                return <View style={styles.product_list} key={index}>
                                    <CardProduct navigation={navigation} data={data} />
                                </View>
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
    return (
        <Stack.Navigator
            initialRouteName='Product'>
            <Stack.Screen
                name="Product"
                component={Product}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="DetailProduct"
                component={DetailProduct}
                options={{ title: "Chi tiết sản phẩm" }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    tag_filter_product: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 5
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        height: height - 200
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
    scroll_product: {
        height: height - 190
    },
    tag_list: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    product_list: {
        marginVertical: 10
    }
})

export default ProductPage;
