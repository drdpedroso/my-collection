import React, {PureComponent} from 'react';
import Header from "../components/Header";
import {ScrollView, StyleSheet, View} from "react-native";
import {Container} from "native-base";
import SneakerCard from "../components/SneakerCard";
import {Col, Row, Grid} from 'react-native-easy-grid';
import sneaker from '../images/sneaker.jpg';
import sneaker2 from '../images/sneaker2.jpg';
import Navigation from 'react-navigation';


class DiscoveryScreen extends PureComponent {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    goToDetails() {
        this.props.navigation.navigate('Details')
    }

    render() {
        console.log(this.props)
        return (
            <ScrollView style={styles.container}>

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
                    {/*<SneakerCard image={sneaker}/>*/}
                    {/*<SneakerCard image={sneaker}/>*/}
                    {/*<SneakerCard image={sneaker}/>*/}
                    {/*<SneakerCard image={sneaker}/>*/}
                    {/*<SneakerCard image={sneaker}/>*/}
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

export default DiscoveryScreen;
