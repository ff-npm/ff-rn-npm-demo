
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, NativeModules } from "react-native";
class home extends Component {

    static navigationOptions = () => ({
        header: null
    })

    render() {
        return (
            <View>
                <View style={{marginTop:20}}>
                    <Button onPress={()=>this.props.navigation.navigate("qrcode")} title="扫码"></Button>
                </View>
                <View style={{marginTop:20}}>
                    <Button onPress={()=>this.props.navigation.navigate("toast")} title="toast"></Button>
                </View>
            </View>
        );
    }


}
export default home