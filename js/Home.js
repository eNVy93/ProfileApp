import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:30}}>My name</Text>
                </View>
                <View>
                    <Image
                        style={{height: 200, width: 200}}
                        source={{uri: "https://seeklogo.com/images/D/dota-2-logo-A8CAC9B4C9-seeklogo.com.png"}}/>
                </View>
                <View>
                    <Button
                        title="My profile"
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
    },
});
