import React, { useState } from 'react';
import { View, Image, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("window")
const PreviewProduct = ({ listImage = [] }) => {
    const [currentImage, setCurrentImage] = useState(listImage[0])
    return (
        <View style={styles.tag_preview_product}>
            <View style={styles.tag_big_image}>
                <Image
                    style={styles.big_image}
                    source={{ uri: currentImage }}
                    resizeMode="stretch" />
            </View>
            <ScrollView horizontal style={styles.tag_small_image}>
                {
                    listImage.map((url, index) => {
                        console.log("first", url);
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setCurrentImage(url)}>
                                <Image
                                    resizeMode="stretch"
                                    style={styles.small_image}
                                    source={{ uri: url }} />
                            </TouchableOpacity>
                        )

                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    tag_preview_product: {
        alignItems: "center",
        flexDirection: "column"
    },
    tag_big_image: {
        marginTop: 10
    },
    big_image: {
        height: 200,
        width: 350
    },
    tag_small_image: {
        height: 100,
        width: width - 20,
        paddingVertical: 5
    },
    small_image: {
        marginHorizontal: 5,
        height: 100,
        width: 130
    }

})

export default PreviewProduct;
