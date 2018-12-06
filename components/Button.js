import React from 'react';
import {Button, Content} from 'native-base';
import {StyleSheet} from "react-native";

const ButtonWrapper = (props) => {
    return (
        <Button {...props} style={styles.button}/>

    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        margin: 10
    }
});

export default ButtonWrapper;
