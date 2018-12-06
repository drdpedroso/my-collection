import React from 'react';
import {Button, Content} from 'native-base';
import {StyleSheet} from "react-native";

const ButtonWrapper = (props) => {
    return (
        <Content>
            <Button {...props} style={styles.button}/>
        </Content>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000'
    }
});

export default ButtonWrapper;
