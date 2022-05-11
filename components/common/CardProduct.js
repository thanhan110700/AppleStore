import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CardProduct = ({data}) => {
    console.log(data.images)
    return (
        <View style={[styles.card_product,styles.shadowProp]}>
            <View style={styles.tag_img}>
                <Image 
                source={{uri:data.images[0]}} 
                style={styles.image_product} />
            </View>
            <View style={styles.detail_product}>
                <Text style={styles.name_product}>{data.name}</Text>
                <Text style={styles.price_product}>Giá: {data.type[0].price} VNĐ</Text>
                
                <Text style={styles.description_product}>Màn hình: {data.display}</Text>
                <Text style={styles.description_product}>RAM: {data.ram}</Text>
                <Text style={styles.description_product}>Chip: {data.chip}</Text>
                <Text style={styles.description_product}>Pin: {data.pin}</Text>
                <Text style={styles.description_product}>Lượt xem: {data.view}</Text>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    card_product:{ 
        backgroundColor: '#0f0f0f',
        border:"none",
        borderRadius: 5,
        paddingBottom:10,
        width: 180
    },
    tag_img:{
        backgroundColor:"white",
        
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        padding:5
    },
    image_product:{
        backgroundColor: "#ffffff",
        padding: 5,
        height: 150,
    },
 
    description_product:{
        color:"white",
        fontFamily: 'Open Sans',
        textAlign: "left",
        marginHorizontal:15,
        marginVertical:5,
        fontSize: 9,
    },
    name_product:{
        color: "#ffffff",
        marginVertical:5,
        marginLeft:10,
        textAlign:"center",
        fontSize:15
    },
    price_product:{
        color: "#ffffff",
        textAlign:"center",
        fontFamily: "Oswald",
        marginLeft:10,
        fontSize:12,
        marginBottom:10
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

export default CardProduct;
