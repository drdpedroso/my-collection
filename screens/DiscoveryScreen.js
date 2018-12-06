import React, {PureComponent} from 'react';
import Header from "../components/Header";
import {ScrollView, StyleSheet, View} from "react-native";
import {Container} from "native-base";
import SneakerCard from "../components/SneakerCard";
import {Col, Row, Grid} from 'react-native-easy-grid';
import sneaker from '../images/sneaker.jpg';
import sneaker2 from '../images/sneaker2.jpg';

class DiscoveryScreen extends PureComponent {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                {/*<Grid>*/}
                {/*<Row>*/}
                {/*<Col><SneakerCard/></Col>*/}
                {/*<Col><SneakerCard/></Col>*/}
                {/*<Col><SneakerCard/></Col>*/}
                {/*</Row>*/}
                {/*</Grid>*/}
                <View style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    margin: 'auto',
                    alignItems: 'center',
                    paddingLeft: 8
                }}>
                    <SneakerCard image={sneaker}/>
                    <SneakerCard image={sneaker2}/>
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
