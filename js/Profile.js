import React from 'react'
import {StyleSheet, Text, View, Image, Button, TextInput, Linking} from 'react-native';
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
    constructor(...args) {
        super(...args)
        this.state = {
            temperature: '',
            city: '',
            textField: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Praesent id interdum arcu. Aenean eu malesuada arcu. Ut ultricies augue' +
            ' vel nisi ornare rhoncus. Phasellus eget volutpat dolor. Curabitur lorem eros' +
            ', sollicitudin id posuere nec, lobortis nec neque. Nulla lorem dui, dictum a accumsan ' +
            'et, fringilla non lectus. Praesent venenatis mauris facilisis urna fringilla, ut bibendum' +
            ' tellus venenatis. Pellentesque vestibulum purus dui, ut pretium lectus aliquam at.'
        }
    }

    componentDidMount() {
        getWheatherJson()
            .then((resp) =>
                this.setState({
                    temperature: JSON.stringify(Math.round(resp.main.temp) - 273),
                    city: JSON.stringify(resp.name)
                }))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileBox}>
                    <FlexImage
                        source={{uri: "https://seeklogo.com/images/D/dota-2-logo-A8CAC9B4C9-seeklogo.com.png"}}
                    style={{height:130,width:130}}
                    />

                    <Text style={styles.bigText}>Vytautas Netikšis</Text>
                </View>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.statusText}>about me</Text>
                </View>
                <View style={styles.textBox}>
                    <TextInput style={styles.smallText}
                               multiline={true}
                               numberOfLines={10}
                               clearButtonMode='while-editing'
                               onChangeText={(textField) => this.setState({textField})}
                               value={this.state.textField}
                    >
                    </TextInput>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.statusText}>88/120</Text>
                </View>
                <View style={styles.thirdBox}>

                    <Text style={styles.smallText}>The temperature
                        in {this.state.city.replace(/"/g, "")} is:</Text>
                    <Text style={styles.bigText}> {this.state.temperature}°C </Text>
                    <Button
                        title="MY GITHUB"
                        onPress={() => {
                            Linking.openURL('https://github.com/eNVy93/ProfileApp')
                        }}
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
        justifyContent: 'space-around',

    },
    profileBox: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textBox: {
        flex: 1,
        backgroundColor: '#bfbfbf',


    },
    thirdBox: {
        flex: 1,
        backgroundColor: '#969696',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    bigText: {
        fontSize: 30,
    },
    mediumText: {
        fontSize: 20,
    },
    smallText: {
        fontSize: 15,
    },
    statusText:{
        color: 'gray',
        fontSize: 15,
    }

});
