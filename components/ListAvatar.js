import React, {Component} from 'react';
import {Body, Content, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
import profile1 from '../images/profile1.jpg'
import profile2 from '../images/profile2.jpeg'
import profile3 from '../images/profile3.jpg'
import profile4 from '../images/profile4.jpg'

export default class ListAvatar extends Component {
    render() {
        return (
            <Content>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={profile1}/>
                        </Left>
                        <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Kumar owns 312 Nike shoes!</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={profile2}/>
                        </Left>
                        <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Kumar owns 312 Nike shoes!</Text>
                        </Body>

                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={profile3}/>
                        </Left>
                        <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Kumar owns 312 Nike shoes!</Text>
                        </Body>

                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={profile4}/>
                        </Left>
                        <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Kumar owns 312 Nike shoes!</Text>
                        </Body>

                    </ListItem>
                </List>
            </Content>
        );
    }
}
