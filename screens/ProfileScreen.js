import React, {PureComponent} from 'react';
import Header from "../components/Header";
import {ScrollView, StyleSheet, View, Image} from "react-native";
import SneakerCard from "../components/SneakerCard";
import sneaker from "../images/sneaker.jpg";
import sneaker2 from "../images/sneaker2.jpg";
import {Container, Thumbnail, Text} from "native-base";
import profile1 from "../images/profile1.jpg";
import {Icon} from 'expo'
import {Col, Row, Grid} from 'react-native-easy-grid';

class ProfileScreen extends PureComponent {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    goToDetails() {
        this.props.navigation.navigate('Details', {})
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{
                    paddingTop: 10,
                    marginTop: 10,
                    marginBottom: 3,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <Image source={profile1} style={{
                        width: 150, height: 150, borderRadius: 75, alignSelf: 'center',
                        justifyContent: 'center',
                    }}/>
                    <Text style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 22,
                        fontWeight: 'bold'
                    }}>Kevin Heart</Text>
                    <Text style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>305 Nike Sneakers</Text>
                    {/*<Row>*/}
                    <Text style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                        <Icon.Ionicons style={{marginRight: 2, marginBottom: 3}} name="md-pin"/>
                        Hilversum - Netherlands</Text>
                </View>

                <View style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    margin: 'auto',
                    alignItems: 'center',
                    paddingLeft: 8
                }}>
                    <SneakerCard image={sneaker} onPress={() => this.goToDetails()}/>
                    <SneakerCard image={sneaker2} onPress={() => this.goToDetails()}/>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

export default ProfileScreen;
