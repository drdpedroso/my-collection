import React, {Component} from 'react';
import {Image} from 'react-native';
import logo from '../images/logo.png';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Image
                    source={logo}
                    style={{width: 80, height: 50}}
                />

            </React.Fragment>
        );
    }
}

export default Header;
