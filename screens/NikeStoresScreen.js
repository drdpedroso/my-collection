import React, {PureComponent} from 'react';
import Header from "../components/Header";
import {ScrollView, StyleSheet} from "react-native";

class NikeStoresScreen extends PureComponent {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    render() {
        return (
            <ScrollView style={styles.container}>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default NikeStoresScreen;
