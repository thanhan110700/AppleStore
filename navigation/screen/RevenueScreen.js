import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RevenueScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt_revenue_success}>
                Xác nhận mua hàng thành công
            </Text>
            <TouchableOpacity
                style={styles.btn_backhomepage}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.txt_backhomepage}>
                    Quay về trang chủ
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    txt_revenue_success: {
        marginVertical: 50,
        color: "#7f8c8d",
        fontSize: 30,

    },
    btn_backhomepage: {
        backgroundColor: "#e67e22",
        paddingVertical: 10,
        paddingHorizontal: 60,
        alignItems: "center"
    },
    txt_backhomepage: {
        color: "white",
        fontSize: 25
    }
})

export default RevenueScreen;
