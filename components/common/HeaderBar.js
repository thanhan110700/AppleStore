import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Ionicons,FontAwesome,Entypo  } from '@expo/vector-icons';

export default function HeaderBar({navigation}) {
    
  return (
    <View style={styles.tag_header}>
        <Text 
            style={styles.text_logo}>
            AppleStore
        </Text>
        <View 
            style={styles.tag_header_right}>
            
            <FontAwesome 
                name="search" 
                size={24} 
                color="white" 
                style={styles.icon_search}/>
            <Entypo 
                name="shopping-cart" 
                size={24} 
                color="white"
                style={styles.icon_cart} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    tag_header:{
        backgroundColor: '#22262bf8',
        paddingTop:65,
        paddingHorizontal:20,
        paddingBottom:10,
        display:'flex',
        flexDirection:"row"

    },
    text_logo:{
        flex:8,
        color:'white',
        fontSize:25
    },
    tag_header_right:{
        flex:4,
        justifyContent:"end",
        alignItems:"center",
        flexDirection:"row"
    },
    text_input:{
        flex:3,
        backgroundColor:"white",
        height:25,
        borderRadius:2,
        paddingHorizontal:10
    },
    icon_search:{
        flex:1,
        position:"absolute",
        right:40   
    },
    icon_cart:{
        flex:1,
        position:"absolute",   
    }
})