import React from 'react';
import {View,Text,Image, StyleSheet,Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {height,width} = Dimensions.get('window')
const divLine = 20
const Menu = ({navigation}) => {
    return (
    <View>
        <View style={styles.tag_user}>
            <View style={styles.tag_img_avatar}>
                <Image 
                source={{uri:'https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png'}}
                style={styles.img_avatar}
                resizeMode="cover"
                />
            </View>
            <View style={styles.tag_txt_username}>
                <Text style={styles.txt_username}>
                    username
                </Text>
            </View>
            <View style={styles.tag_icon_logout}>
                <MaterialCommunityIcons name="logout" size={24} color="black" style={styles.icon_logout} />
            </View>
        </View>
        <View style={styles.line}/>
        <View style={styles.tag_btn_options}>
            <View style={[styles.btn_options,styles.shadow]}>
                <MaterialCommunityIcons name="face-man-profile" size={24} color="black" style={styles.icon_option} />
                <Text>Thông tin Cá nhân</Text>
            </View>
            <View style={[styles.btn_options,styles.shadow]}>
                <AntDesign name="profile" size={24} color="black" style={styles.icon_option} />
                <Text>Thông tin Hóa đơn</Text>
            </View>
            <View style={[styles.btn_options,styles.shadow]}>
                <AntDesign name="book" size={24} color="black" style={styles.icon_option} />
                <Text>Các điều khoản</Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    line:{
        borderBottomColor: '#8c8c8c',
        borderBottomWidth: 1,
        width:width-divLine,
        margin:divLine/2
    },
    tag_user:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:10
    },
    tag_img_avatar:{
        borderRadius:100,
        padding:2,
        borderColor:"#8c8c8c",
        borderWidth:1,
    },
    img_avatar:{
        height:50,
        width:50,
        borderRadius:100
    },
    txt_username:{
        fontSize:20,
        marginLeft:15
    },
    tag_icon_logout:{
        alignItems:"flex-end"
    },
    icon_logout:{
        
    },
    tag_btn_options:{
        marginTop:10
    },
    btn_options:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:5,
        marginVertical:5,
        backgroundColor:"white",
        marginHorizontal:10,
        borderRadius:10,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 0.5, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    icon_option:{
        marginRight:10
    },
    
})

export default Menu;
