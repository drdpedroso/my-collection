import React, {Component} from 'react';
import Header from "../components/Header";
import {ScrollView, Image, StyleSheet, View, TouchableOpacity} from "react-native";
import {Text, Container, Card, Content, List, ListItem, Left, Thumbnail, Body} from "native-base";
import sneaker from '../images/sneaker.jpg'
import Button from '../components/Button';
import StarRating from 'react-native-star-rating';
import {Row} from 'react-native-easy-grid';
import profile1 from "../images/profile1.jpg";

class DetailsScreen extends Component {
    static navigationOptions = {
        headerTitle: <Header/>,
    };

    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <Container style={styles.container}>
                    <Text style={styles.topText2}> Jordan</Text>
                    <Text style={styles.topText}> Nike Air Jordan XX3 - €300,00 </Text>
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
                    <View style={styles.text}>
                        <Text>The Air Jordan XX3 was designed by Tinker Hatfield. It was a unique model,
                            being the first basketball shoe to be included in the "Nike Considered" category, for using
                            materials from not more than 200 miles from a Nike Factory.</Text>
                    </View>

                    <View style={{alignSelf: 'flex-start', paddingLeft: 10, paddingRight: 10}}>
                        <Text style={{fontWeight: 'bold'}}> Sneakers sold: 390 pairs</Text>
                        <Text style={{fontWeight: 'bold'}}> Sneakers made: 390 pairs</Text>
                        {/*<Text style={{fontWeight: 'bold'}}> Average value: €300,00 - €329,90</Text>*/}
                    </View>


                    <View style={{paddingTop: 10, marginTop: 10, marginBottom: 3}}>
                        <Thumbnail source={profile1}/>
                    </View>
                    <Text style={{alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>Know the
                        owner</Text>


                    {/*<StarRating*/}
                    {/*disabled={true}*/}
                    {/*maxStars={5}*/}
                    {/*rating={4.5}*/}
                    {/*/>*/}

                    <Button block={true}><Text>JUST BUY IT!</Text></Button>
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
        // marginTop: 45,
        marginBottom: 30
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
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    topText2: {
        fontSize: 17,
        marginTop: 20,
        paddingLeft: 12,
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
