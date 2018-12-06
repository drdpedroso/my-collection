import React, {Component} from 'react';
import Header from "../components/Header";
import {ScrollView, Image, StyleSheet, View} from "react-native";
import {Text, Container} from "native-base";
import sneaker from '../images/sneaker.jpg'
import Button from '../components/Button';
import StarRating from 'react-native-star-rating';

class DetailsScreen extends Component {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    render() {
        return (
            <ScrollView>
                <Container style={styles.container}>
                    <Text style={styles.topText}> Nike Air Jordan XX3 </Text>
                    <Image
                        source={sneaker}
                        style={styles.image}
                    />
                    <View style={styles.separator}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={4.5}
                        />
                    </View>
                    <Text style={styles.text}>
                        The Air Jordan XX3 was designed by Tinker Hatfield. It was a unique model,
                        being the first basketball shoe to be included in the "Nike Considered" category, for using
                        materials from not more than 200 miles from a Nike Factory.
                    </Text>

                    <View style={{alignSelf: 'flex-start', paddingLeft: 10, paddingRight: 10}}>
                        <Text style={{fontWeight: 'bold'}}> Sneakers sold: 390 pairs</Text>
                        <Text style={{fontWeight: 'bold'}}> Sneakers made: 390 pairs</Text>
                        <Text style={{fontWeight: 'bold'}}> Average value: €300,00 - €329,90</Text>
                    </View>
                    {/*<StarRating*/}
                    {/*disabled={true}*/}
                    {/*maxStars={5}*/}
                    {/*rating={4.5}*/}
                    {/*/>*/}
                    <Button block={true}><Text>GET ONE NEAR YOU!</Text></Button>
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 45
    },
    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center'
    },
    text: {
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 10
    },
    topText: {
        fontSize: 28,
        marginTop: 20,
        padding: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    separator: {
        width: '100%',
        backgroundColor: 'rgba(61, 61, 61, 0.1)',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default DetailsScreen;
