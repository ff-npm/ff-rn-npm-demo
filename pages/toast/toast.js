import React, { Component } from 'react';
import {View, Text, Button} from "react-native";
export default class toast extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '扫码',
    })

    render() {
        return (
            <View>
                <View style={{marginTop:20}}>
                    <Button onPress={()=>this.props.navigation.navigate("qrcode")} title="toast"></Button>
                </View>
            </View>
        )
    }
}
