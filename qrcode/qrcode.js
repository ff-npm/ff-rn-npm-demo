
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import QRCode from "react-native-ff-qrcode";
class home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '扫码',
    })

    constructor(props){
        super(props);
        this.state = {
            nativeQrcodeRes: ""
        }
    }

    render() {
        return (
            <View>
                <Button onPress={this.nativeQrcode} title="原生扫描二维码"></Button>
                <View style={{marginTop:20}}><Button onPress={this.photoQrcode} title="从相册选取图片扫描二维码"></Button></View>
                <Text style={{marginTop:20}}>扫码结果{this.state.nativeQrcodeRes}</Text>
                <View style={{marginTop:20}}><Button onPress={()=>this.props.navigation.navigate("scanCode")} title="组件控制"></Button></View>
            </View>
        );
    }

    nativeQrcode = ()=> {
        QRCode.nativeQRCodeWithCallback((res)=>{
            this.setState({nativeQrcodeRes: res});
            alert(res);
        })
    }

    photoQrcode = ()=> {
        QRCode.libraryPhotoQRCodeWithCallback((res)=>{
            this.setState({nativeQrcodeRes: res});
            alert(res);
        })
    }

}
export default home