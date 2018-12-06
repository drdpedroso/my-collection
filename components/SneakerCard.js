import React from 'react';
import {Container, Thumbnail, Right, Text} from 'native-base'
import {Image, StyleSheet, View} from 'react-native'
import profile2 from "../images/profile2.jpeg";
import {Col, Row, Grid} from 'react-native-easy-grid';

const SneakerCard = ({image}) => {
    return (
        <View>
            <Image
                source={image}
                style={styles.image}
            />
            <View style={{
                backgroundColor: 'rgba(0,0,0, 0.6)',
                marginTop: -35,
                height: 30,
                marginLeft: 5,
                marginRight: 5
            }}>
                <Row>
                    <Thumbnail small source={profile2} style={styles.thumb}/>
                    <Text style={styles.text}>Jordan Velvet V2 2012</Text>
                </Row>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

    image: {
        margin: 5,
        width: 190,
        height: 190
    },
    thumb: {
        marginLeft: 3,
        width: 30,
        height: 30
    },
    text: {
        marginLeft: 7,
        marginTop: 6,
        fontSize: 14,
        color: '#fff'
    }
});

export default SneakerCard;
