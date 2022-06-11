import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, ScrollView, Image, Text } from 'react-native';

const { height, width } = Dimensions.get('window')

const Test = () => {
    console.log(height)
    return (
        <View style={styles.wrappe}>
            <SafeAreaView style={styles.wrappe}>
                <View style={styles.tag_banner}>
                    <Image
                        source={{
                            uri: 'https://png.pngtree.com/thumb_back/fh260/background/20201023/pngtree-dots-and-triangles-background-social-network-black-banner-image_430927.jpg'
                        }}
                        style={styles.img_banner}
                    />
                    <View style={styles.tag_text_banner}>
                        <Text style={styles.text_banner_top}>
                            <Text style={styles.text_color_banner}>
                                READY
                            </Text>
                            -TO-
                            <Text style={styles.text_color_banner}>
                                USE
                            </Text>
                            {"\n"}BIOMETRIC PRODUCT
                        </Text>
                        <Text style={styles.text_banner_bottom}>
                            Facial biometrics for your office's access control system
                        </Text>
                    </View>
                </View>
                <View style={styles.tag_content}>
                    <View style={styles.content_1}>
                        <View>
                            <Text style={styles.txt_title_1_1}>
                                BIOMETRIC IDENTIFICATION ECOSYSTEM ID-EXPERT
                            </Text>
                            <Text style={styles.txt_content_1_1}>
                                It includes a multimodal Id-Me platform, ready-made biometric software products,
                                and a set of services and approaches that allow you to implement
                                the necessary identification processes to automate,
                                improve efficiency, and launch new innovative services for business.
                            </Text>
                        </View>
                        <View style={styles.content_1_2}>
                            <Text style={styles.txt_title_1_2}>
                                The biometric identity ecosystem includes:
                            </Text>
                            <View style={styles.container_1_2}>
                                <View style={styles.item_1_2}>
                                    <View style={styles.tag_img_1_2}>
                                        <Image
                                            source={{
                                                uri: 'https://recfaces.com/wp-content/uploads/2020/03/01.svg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item} />
                                    </View>
                                    <Text style={styles.txt_title_item}>
                                        Licensing and technical support center
                                    </Text>
                                </View>
                                <View style={styles.item_1_2}>
                                    <View style={styles.tag_img_1_2}>
                                        <Image
                                            source={{
                                                uri: 'https://recfaces.com/wp-content/uploads/2020/03/02.svg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item} />
                                    </View>
                                    <Text style={styles.txt_title_item}>
                                        Monitoring system
                                    </Text>
                                </View>
                                <View style={styles.item_1_2}>
                                    <View style={styles.tag_img_1_2}>
                                        <Image
                                            source={{
                                                uri: 'https://recfaces.com/wp-content/uploads/2020/03/03.svg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item} />
                                    </View>
                                    <Text style={styles.txt_title_item}>
                                        Integration mechanisms
                                    </Text>
                                </View>
                                <View style={styles.item_1_2}>
                                    <View style={styles.tag_img_1_2}>
                                        <Image
                                            source={{
                                                uri: 'https://recfaces.com/wp-content/uploads/2020/03/04.svg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item} />
                                    </View>
                                    <Text style={styles.txt_title_item}>
                                        Live notification services
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content_2}>
                        <View>
                            <Text style={styles.txt_title_1_1}>
                                APPLICATIONS AND FEATURES
                            </Text>
                            <Text style={styles.txt_content_1_1}>
                                We have divided the product application areas into three categories,
                                but they are very similar: HR, marketing, and security.
                            </Text>
                        </View>
                        <View style={styles.content_2_2}>
                            <View style={styles.container_2_2}>
                                <View style={styles.item_2_2}>
                                    <Text style={styles.txt_color_2_2}>
                                        HUMAN RESOURCES (HR)
                                    </Text>
                                    <Text style={styles.txt_2_2}>
                                        Employee identification through ACS, cameras, AIS.
                                    </Text>
                                </View>
                                <View style={styles.item_2_2}>
                                    <Text style={styles.txt_color_2_2}>
                                        MARKETING
                                    </Text>
                                    <Text style={styles.txt_2_2}>
                                        Marketing research, targeted advertising, cardless loyalty program, targeted sales.
                                    </Text>
                                </View>
                                <View style={styles.item_2_2}>
                                    <Text style={styles.txt_color_2_2}>
                                        SECURITY
                                    </Text>
                                    <Text style={styles.txt_2_2}>
                                        Provide security by using video analytics and access control systems.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content_1}>
                        <View>
                            <Text style={styles.txt_title_1_1}>
                                INDUSTRY SOLUTIONS
                            </Text>
                            <Text style={styles.txt_content_1_1}>
                                Technological capabilities of biometric software products {'\n'}
                                included in the multimodal Id-Me platform implement a wide range of industry business tasks.
                            </Text>
                        </View>
                        <View style={styles.content_3_2}>
                            <View style={styles.container_3_2}>
                                <View style={styles.item_3_2}>
                                    <View style={styles.tag_img_3_2}>
                                        <Image
                                            source={{
                                                uri: 'https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1.jpg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item_3} />
                                        <View style={styles.tag_opacity}>
                                            <Text style={styles.txt_title_img_3}>
                                                Company
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.tag_img_3_2}>
                                        <Image
                                            source={{
                                                uri: 'https://www.cleanenergyfuels.com/assets/images/solutions/production-plant-bg.jpg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item_3} />
                                        <View style={styles.tag_opacity}>
                                            <Text style={styles.txt_title_img_3}>
                                                Industrial Facilities
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_3_2}>
                                    <View style={styles.tag_img_3_2}>
                                        <Image
                                            source={{
                                                uri: 'https://www.fmchealth.org/app/uploads/2019/10/DSC_7399-1200x800REV-1064x529.jpg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item_3} />
                                        <View style={styles.tag_opacity}>
                                            <Text style={styles.txt_title_img_3}>
                                                Medical Center
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.tag_img_3_2}>
                                        <Image
                                            source={{
                                                uri: 'https://tamlong.com.vn/wp-content/uploads/tim-hieu-tat-tan-tat-ve-business-center-la-gi-2.jpg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item_3} />
                                        <View style={styles.tag_opacity}>
                                            <Text style={styles.txt_title_img_3}>
                                                Business Center
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.item_3_2}>
                                    <View style={styles.tag_img_3_2}>
                                        <Image
                                            source={{
                                                uri: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2017/09/college-1.jpg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item_3} />
                                        <View style={styles.tag_opacity}>
                                            <Text style={styles.txt_title_img_3}>
                                                Education Institution
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.tag_img_3_2}>
                                        <Image
                                            source={{
                                                uri: 'https://tindung.com.vn/wp-content/uploads/2021/10/1200px-Bank_of_Montreal_1_db.jpg'
                                            }}
                                            resizeMode="stretch"
                                            style={styles.img_item_3} />
                                        <View style={styles.tag_opacity}>
                                            <Text style={styles.txt_title_img_3}>
                                                Bank
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrappe: {
        backgroundColor: '#171D2C',
        height: '100%',
    },
    tag_banner: {
        position: 'relative',
        width: width,
        height: height * 0.6,
    },
    img_banner: {
        width: '100%',
        height: '100%'
    },
    tag_text_banner: {
        position: 'absolute',
        top: '30%',
        width: '100%',
        textAlign: 'center',
    },
    text_banner_top: {
        fontSize: '2.25rem',
        color: 'white',
        fontWeight: 'bold',
    },
    text_color_banner: {
        color: '#FF1D53'
    },
    text_banner_bottom: {
        color: 'white',
        fontSize: '1.5rem'
    },
    tag_content: {

        width: width,
    },
    content_1: {
        textAlign: 'center',
        marginTop: 20,
        paddingVertical: 20,
    },
    content_1_1: {
        flex: 4,
    },
    img_content_1_1: {
        height: '100%',
        width: '100%',
    },
    content_1_2: {
        flex: 5,
    },
    txt_title_1_1: {
        color: 'white',
        fontSize: 15
    },
    txt_content_1_1: {
        color: '#9197a4',
        marginTop: 10,
        paddingHorizontal: 25,
    },
    content_1_2: {
        paddingHorizontal: 25,
        marginTop: 10
    },
    txt_title_1_2: {
        textAlign: 'left',
        color: 'white',
    },
    container_1_2: {
        marginTop: 10,
        marginHorizontal: 'auto'
    },
    item_1_2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,

    },
    tag_img_1_2: {
        height: 40,
        width: 40,
        borderRadius: 150,
        padding: 5,
        backgroundColor: 'white',
        display: 'content',
        marginRight: 10,
    },
    img_item: {
        height: '100%',
        width: '100%',
    },
    txt_title_item: {
        color: 'white',
        fontSize: 15,
        display: 'inline',

    },
    content_2: {
        backgroundColor: '#252D40',
        textAlign: 'center',
        marginTop: 20,
        paddingVertical: 20,
    },
    content_2_2: {
        paddingHorizontal: 25,
        marginTop: 10
    },
    container_2_2: {
        marginHorizontal: 'auto',
    },
    item_2_2: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5
    },
    txt_color_2_2: {
        flex: 1,
        color: '#C72253',
        fontSize: 16,
        fontWeight: 'bold',
    },
    txt_2_2: {
        flex: 2,
        color: 'white',
    },
    content_3_2: {
        width: width,
    },
    container_3_2: {

    },
    item_3_2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    tag_img_3_2: {
        flex: 1,
        marginHorizontal: 10,
        height: 120,
    },
    img_item_3: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    tag_opacity: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
    },
    txt_title_img_3: {
        color: 'white',
        position: 'absolute',
        bottom: 5,
        left: 5,
        fontWeight: 900
    }
})

export default Test;
