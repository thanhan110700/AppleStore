import React ,{useState}from 'react';
import {View, Text, StyleSheet, Image, Button, TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
const UserInfor = ({navigation, route}) => {
    const [open, setOpen] = useState(false)
    const data = route.params.data
    const [user,setUser] = useState(data)
    return (
    <View style={styles.container}>
        <View style={styles.tag_image_avatar}>
            <Image style={styles.img_avatar} source={{uri:user.avatar}} />
            <Text style={styles.txt_username}>
                {user.username}
            </Text>
        </View>
        <View style={styles.tag_infor_user}>
            <View style={styles.infor_user}>
                <Text style={styles.txt_inf}>Tên: </Text>
                <TextInput style={styles.input_inf} value={user.fullname}  onChange={(e)=>{setUser({...user,fullname:e.target.value})}}/>
            </View>
            <View style={styles.infor_user}>
                <Text style={styles.txt_inf}>Ngày sinh: </Text>
                <Text>{user.birthday.slice(0,10)}</Text>
                <Button title="Open" onPress={() => setOpen(true)} />
                <DatePicker
                    modal
                    open={open}
                    date={user.birthday}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            <View style={styles.infor_user}>
                <Text style={styles.txt_inf}>Giới tính </Text>
                <RadioButton
                    value="Nam"
                    status={ user.gender === 'Nam' ? 'checked' : 'unchecked' }
                    onPress={() => setUser({...user,gender:"Nam"})}
                />
                <Text>Nam</Text>
                <RadioButton
                    value="Nữ"
                    
                    status={ user.gender === 'Nữ' ? 'checked' : 'unchecked' }
                    onPress={() => setUser({...user,gender:"Nữ"})}
                />
                <Text>Nữ</Text>
            </View>
            <View style={styles.infor_user}>
                <Text style={styles.txt_inf}>Số điện thoại: </Text>
                <TextInput style={styles.input_inf} value={user.phonenumber} onChange={(e)=>{setUser({...user,phonenumber:e.target.value})}}/>
            </View>
            <View style={styles.infor_user}>
                <Text style={styles.txt_inf}>Địa chỉ: </Text>
                <TextInput style={styles.input_inf} value={user.address} onChange={(e)=>{setUser({...user,address:e.target.value})}}/>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    tag_image_avatar:{
        paddingTop:20,
        alignItems:"center"
    },
    img_avatar:{
        height:150,
        width:150,
        borderRadius:150
    },
    txt_username:{
        fontSize:25,
    },
    tag_infor_user:{

    },
    infor_user:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10,
    },
    txt_inf:{
        flex:2,
        fontSize:15
    },
    input_inf:{
        flex:3,
        backgroundColor:"white",
        paddingVertical:5,
        paddingHorizontal:20,
        marginLeft:5
    }
})

export default UserInfor;
