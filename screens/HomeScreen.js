import React from 'react';
import {Platform, StyleSheet, Image, ScrollView, View} from 'react-native';
import {Container, Text} from 'native-base';
import Button from '../components/Button';
import {WebBrowser} from 'expo';
import Header from "../components/Header";
import banner from '../images/mzCX4x.jpg';
import ListAvatar from "../components/ListAvatar";

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    goToProfile(userId) {
        this.props.navigation.navigate('Profile', {
            shouldHide: true
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Container>

                    <Image
                        source={banner}
                        style={{
                            width: '100%',
                            height: 250,
                        }}
                    />
                    <Text style={styles.topTitle}> TOP 10 - Collectors </Text>
                    <View style={styles.separator}/>
                    <ListAvatar onPressUser={(id) => this.goToProfile(id)}/>
                </Container>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    separator: {
        width: 110,
        backgroundColor: '#000',
        height: 3
    },
    topTitle: {
        fontSize: 22,
        marginBottom: 10,
        marginTop: 10,
        padding: 10,

    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
