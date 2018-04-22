import React from 'react'
import {StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

function getWheatherJson() {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=Vilnius&APPID=da9e842d9489af6cc0f3bcf3fe8d9711')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}


export default class Profile extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {
            temperature: '',
            textField: ''
        }
    }

    componentDidMount() {
        getWheatherJson()
            .then((resp) => this.setState({
                temperature: JSON.stringify(Math.round(resp.main.temp) - 273)
            }))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileBox}>
                    <Image
                        style={{height: 200, width: 200}}
                        source={{uri: "https://seeklogo.com/images/D/dota-2-logo-A8CAC9B4C9-seeklogo.com.png"}}/>
                    <Text style={{fontSize: 30}}>My name</Text>
                </View>
                <View style={styles.textBox}>
                    <TextInput
                        multiline={true}
                        numberOfLines={8}
                        value="PlaceHolder"
                    >
                    </TextInput>
                </View>
                <View style={styles.thirdBox}>

                    <Text>The temperature where I live is: {this.state.temperature} C</Text>
                    <Button
                        title="MY GITHUB"
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
        // justifyContent: 'space-around',
    },
    profileBox: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center'
        // justifyContent: 'space-between',
    },
    textBox: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    thirdBox: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',

    }

});
