
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
class home extends Component {

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