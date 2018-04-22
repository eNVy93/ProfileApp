import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>Vytautas</Text>
                <Image
                    style={{height: 200, width: 200}}
                    source={{uri: "https://seeklogo.com/images/D/dota-2-logo-A8CAC9B4C9-seeklogo.com.png"}}/>
                <Button
                    title="Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
