import React, {PureComponent} from 'react';
import Header from "../components/Header";
import {ScrollView, StyleSheet, View} from "react-native";
import SneakerCard from "../components/SneakerCard";
import sneaker from "../images/sneaker.jpg";
import sneaker2 from "../images/sneaker2.jpg";
import {Container, Thumbnail} from "native-base";
import profile1 from "../images/profile1.jpg";

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
                <View style={{paddingTop: 10, marginTop: 10, marginBottom: 3}}>
                    <Thumbnail source={profile1}/>
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

export default ProfileScreen;
