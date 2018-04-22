import React from 'react';
import {StyleSheet, Text, View, Image, Button, ToolbarAndroid} from 'react-native';


export default class Home extends React.Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={{fontSize: 30}}>Vytautas</Text>
                <Image
                    style={{height: 200, width: 200}}
                    source={{uri: "https://scontent.fvno3-1.fna.fbcdn.net/v/t1.0-1/p160x160/19601133_1559265897425897_5647389463585728393_n.jpg" +
                        "?_nc_cat=0&oh=63a903065d27d0184e48810f294c07e9&oe=5B5D5AE5"}}/>
                <Button
                    title="Profile"
                    color='#1C1356'
                    onPress={() => this.props.navigation.navigate('Profile')}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#645C95',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
