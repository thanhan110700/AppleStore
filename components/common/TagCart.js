import { Entypo } from '@expo/vector-icons';
import React from 'react';
import {View,Text, StyleSheet, Dimensions} from 'react-native';
import { useSelector } from 'react-redux';
const {height,width} = Dimensions.get("window")
const TagCart = ({navigation}) => {
    console.log(navigation)
    const listCart = useSelector(state => state.cart.listCart)
    return (
        <View style={styles.big_tag}>
            <View style={styles.notification_cart}>
                <Text style={styles.txt_amount_cart}>{listCart.length}</Text>
            </View>
            <Entypo
                name="shopping-cart" 
                size={24} 
                color="black"
                onPress={()=>{navigation.navigate("CartScreen")}}
                style={styles.icon_cart} />
        </View>
    );
}

const styles = StyleSheet.create({
    big_tag:{
        backgroundColor:"white",
        borderRadius:120,
        width:40,
        height:40,
        position:"fixed",
        bottom:70,
        left:width-50,
        justifyContent:"center",
        alignItems:"center",
        zIndex:100
    },
    icon_cart:{
        flex:1,
        position:"absolute",   
    },
    notification_cart:{
        position:"absolute",
        paddingVertical:2,
        paddingHorizontal:5,
        borderRadius:10,
        backgroundColor:"red",
        top:0,
        right:-5,
        zIndex:1,
        alignItems:"center",
        justifyContent:'center'
    },
    txt_amount_cart:{
        fontSize:12,
        color:"white",
        fontWeight:"bold"
    }
})

export default TagCart;
