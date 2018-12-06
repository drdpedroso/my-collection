import React, {PureComponent} from 'react';
import Header from "../components/Header";
import {ScrollView} from "react-native";

class AddScreen extends PureComponent {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    render() {
        return (
            <ScrollView>
            </ScrollView>
        )
    }

}

export default AddScreen;
