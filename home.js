/*
 * @description: 
 * @author: dxj
 * @Date: 2019-07-12 17:52:52
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button, NativeModules, ScrollView } from "react-native";
let arr = Array.from(new Array(30).keys());
class home extends Component {

    static navigationOptions = () => ({
        header: null
    })

    render() {
        return (
            <ScrollView>
                <View style={{marginTop:20}}>
                    <Button onPress={()=>this.props.navigation.navigate("qrcode")} title="扫码"></Button>
                </View>
                <View style={{marginTop:20}}>
                    <Button onPress={()=>this.props.navigation.navigate("toast")} title="toast"></Button>
                </View>
                {
                    arr.map((item)=>(
                        <View key={item} style={{marginTop:20}}>
                            <Button style={{marginVertical: 20}} onPress={()=>{NativeModules.rnmedia.media(item)}} title={item.toString()}></Button>
                        </View>
                    ))
                }
            </ScrollView>
        );
    }


}
export default home