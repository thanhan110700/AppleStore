import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import axios from 'axios';
import CardProduct from '../../components/common/CardProduct';
import TagCart from '../../components/common/TagCart';
import DetailProduct from './DetailProduct';
import { createStackNavigator } from '@react-navigation/stack';
const { width, height } = Dimensions.get('window')
const Stack = createStackNavigator();
const HomePage = ({ navigation }) => {
    const [featuredproductList, setList] = useState([])
    useEffect(() => {
        const CancelToken = axios.CancelToken
        const source = CancelToken.source()

        fetch('http://localhost:3000/api/iphone/getFeaturedProduct', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => {
                setList(json)
            }).catch((error) => {
                console.error(error);
            });
        return () => {
            // cancel the subscription
            source.cancel();
        };
    }, []);

    const listImage = [
        "https://cdn.tgdd.vn/Files/2021/09/08/1381074/iphone_1280x720-800-resize.jpg",
        "https://thumbs.dreamstime.com/b/vinnytsia-ukraine-september-vector-banner-iphone-vector-illustration-app-web-presentation-design-vector-banner-iphone-230042240.jpg",
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-key-features-battery-202109_GEO_KR?wid=1300&hei=644&fmt=png-alpha&.v=1632358191000",
        "https://www.apple.com/v/iphone-13-pro/f/images/overview/camera/intro/camera_system__rp945vhdfsiu_large.png"
    ]

    const Home = () => {
        return (
            <View>
                <SafeAreaView>
                    <View>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            horizontal
                            style={styles.wrappe}
                        >
                            {listImage.map((data, index) => {
                                return <Image
                                    key={index}
                                    source={{
                                        uri: data
                                    }}
                                    resizeMode="stretch"
                                    style={{ width: width, height: 200 }}
                                />
                            })}
                        </ScrollView>
                    </View>
                </SafeAreaView>
                <Text style={styles.txt_featured}>
                    Sản phẩm nổi bật
                </Text>

                <ScrollView style={styles.scroll_featured_product}>
                    <View style={styles.tag_list}>
                        {featuredproductList.map((data, index) => {
                            return <View style={styles.featured_list} key={index}>
                                <CardProduct navigation={navigation} data={data} />
                            </View>
                        })}
                    </View>
                </ScrollView>
                <TagCart navigation={navigation} />
            </View>
        )
    }

    return (
        <Stack.Navigator
            initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="DetailProduct"
                component={DetailProduct}
                options={{ title: "Chi tiết sản phẩm" }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    wrappe: {


    },
    txt_featured: {
        marginLeft: 10,
        marginVertical: 10,
        fontSize: 25,
    },
    scroll_featured_product: {
        height: 500
    },
    tag_list: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    featured_list: {
        marginVertical: 10
    }

})

export default HomePage;
