import React from 'react'
import {StyleSheet, Text, View, Button, TextInput, Linking, AsyncStorage} from 'react-native';
import FlexImage from 'react-native-flex-image';


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
    static navigationOptions = {
        title: 'My profile',
        headerTitleStyle: {},
        headerStyle: {
            backgroundColor: '#645C95'
        },

    };

    constructor(...args) {
        super(...args)
        this.state = {
            temperature: '',
            city: '',
            textField: ''
        }
    }

    componentDidMount() {
        getWheatherJson()
            .then((resp) =>
                this.setState({
                    temperature: JSON.stringify(Math.round(resp.main.temp) - 273),
                    city: JSON.stringify(resp.name),
                }));
        AsyncStorage.getItem('textField').then((value) => {
            this.setState({'textField': value});
        })
    }

    saveData(text) {
        AsyncStorage.setItem('textField', text);
        this.setState({'textField': text})
    }
    textFieldLenght(textField){
        if (textField.length == null){
            return '0'
        } else {
            return textField.length;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileBox}>
                    <FlexImage
                        source={{
                            uri: "https://scontent.fvno3-1.fna.fbcdn.net/v/t1.0-1/p160x160/19601133_1559265897425897_5647389463585728393_n.jpg" +
                            "?_nc_cat=0&oh=63a903065d27d0184e48810f294c07e9&oe=5B5D5AE5"
                        }}
                        style={{height: 120, width: 120}}
                    />

                    <Text style={styles.bigText}>Vytautas Netikšis</Text>
                </View>

                <View style={{alignItems: 'flex-start'}}>
                    <Text style={[styles.statusText, {color: '#0f0f0f0'}, {fontWeight: 'bold'}]}>About me</Text>
                </View>

                <View style={styles.textBox}>
                    <TextInput style={styles.smallText}
                               multiline={true}
                               numberOfLines={10}
                               selectTextOnFocus
                               onChangeText={(textField) => this.saveData(textField)}
                               value={this.state.textField}
                               borderBottomColor='#1C1356'
                    >
                    </TextInput>
                </View>

                <View style={{alignItems: 'flex-end'}}>
                    <Text style={[styles.statusText, {color: 'white'}]}>{this.textFieldLenght(this.state.textField)}/500</Text>
                </View>

                <View style={styles.thirdBox}>
                    <Text style={styles.mediumText}>The temperature
                        in {this.state.city.replace(/"/g, "")} is:</Text>
                    <Text style={styles.bigText}> {this.state.temperature}°C </Text>
                    <Button
                        title="MY GITHUB"
                        onPress={() => {
                            Linking.openURL('https://github.com/eNVy93/ProfileApp')
                        }}
                        color='#1C1356'
                    />
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#645C95',
    },
    profileBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textBox: {
        flex: 1,
        marginLeft: 10,
    },
    thirdBox: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    bigText: {
        fontSize: 30,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    },
    mediumText: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
    },
    smallText: {
        fontSize: 15,
        fontFamily: 'sans-serif'
    },
    statusText: {
        fontSize: 15,
        margin: 5,
        fontFamily: 'sans-serif'
    }

});
