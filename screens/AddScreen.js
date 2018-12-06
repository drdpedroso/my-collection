import React, {PureComponent} from 'react';
import Header from "../components/Header";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Container, Content, Form, Item, Label, Picker, Textarea, Input} from "native-base";
import TabBarIcon from "../components/TabBarIcon";
import {Row} from 'react-native-easy-grid';
import StarRating from "react-native-star-rating";
import Button from "../components/Button";


const options = [
    {id: 1, label: 'Air Jordan 1 Mid', value: 'Air Jordan 1 Mid'},
    {id: 2, label: 'Jordan "Why Not?" Zer0.1 Low N7', value: 'Jordan "Why Not?" Zer0.1 Low N7'},
    {id: 3, label: 'Air Jordan 11 Retro', value: 'Air Jordan 11 Retro'},
];

class AddScreen extends PureComponent {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    state = {
        selected: null,
        rating: 0
    };

    onChangeValue(selected) {
        this.setState({selected})
    }

    onStarRatingPress(rating) {
        this.setState({rating})
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <Content>
                        <Row style={styles.container}>
                            <View style={styles.icon}>
                                <TabBarIcon name={"md-camera"}/>
                            </View>
                            <Form>
                                <Item picker style={{width: 300}}>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Select your model"
                                        placeholderStyle={{color: "#bfc6ea"}}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected}
                                        onValueChange={(e) => this.onChangeValue(e)}
                                    >
                                        {options.map(item => <Picker.Item key={item.id} label={item.label}
                                                                          value={item.value}/>)}
                                    </Picker>
                                </Item>
                            </Form>
                        </Row>
                        {this.state.selected ? <View style={styles.text}>
                            <Text>
                                The {this.state.selected} was designed by Tinker Hatfield. It was a unique model,
                                being the first basketball shoe to be included in the "Nike Considered" category, for
                                using
                                materials from not more than 200 miles from a Nike Factory.
                            </Text>
                        </View> : null}
                        <View style={styles.container}>
                            <Text style={styles.containerText}>How did you like this product?</Text>
                            <View style={styles.container}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.rating}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                            </View>
                        </View>

                        <View style={styles.container}>
                            <Form>
                                {/*<Item fixedLabel>*/}
                                <Label>Have anything to say about that shoe?</Label>
                                <Textarea rowSpan={5} bordered placeholder="Comment"/>
                                {/*</Item>*/}
                            </Form>
                        </View>

                        <View style={styles.container}>
                            <Label>Wanna sell it? Name your price!</Label>
                            <Item>
                                <Input placeholder="USD"/>
                            </Item>
                            <Text style={styles.smallText}>Other collectors will be able to see the sneaker and the
                                price that your asking for. If you don't want to sell, just leave it blank.</Text>
                        </View>

                        <View style={styles.container}>
                            <Button block={true}>
                                <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                                    Add to your collection
                                </Text>
                            </Button>
                        </View>
                    </Content>
                </Container>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        borderRadius: 60,
        width: 50,
        height: 50,
        backgroundColor: 'rgba(61, 61, 61, 0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        padding: 10,
    },
    containerText: {
        marginBottom: 6,
        fontSize: 15,
        fontWeight: 'bold'
    },
    text: {
        padding: 10,
        fontSize: 14
    },
    smallText: {
        padding: 10,
        fontSize: 11,
        color: 'rgba(61, 61, 61, 0.8)'
    }
});


export default AddScreen;
