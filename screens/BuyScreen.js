import React, {PureComponent} from 'react';
import {ScrollView, View} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";

class BuyScreen extends PureComponent {
    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={{
                    height: 300,
                    width: 350,
                    marginLeft: 13,
                    marginTop: 2,
                    marginBottom: 15,
                    padding: 10,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                            latitude: 52.2252243,
                            longitude: 5.1806706,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        <Marker
                            coordinate={{latitude: 52.2252243, longitude: 5.1806706}}
                            title={'Nike Hilversum Store'}
                            description={'Im your favorite Nike store'}
                        />
                    </MapView>
                </View>
            </ScrollView>
        );
    }
}

export default BuyScreen;
