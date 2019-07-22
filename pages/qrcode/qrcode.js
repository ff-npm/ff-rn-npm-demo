
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {RNQRCode} from "react-native-ff-qrcode";
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
        console.log(RNQRCode)
        RNQRCode.nativeQRCodeWithCallback((res)=>{
            alert(res.msg);
            switch (res.code) {
                case 200:
                    this.setState({nativeQrcodeRes: res.resp});
                    break;
                case 201:
                    RNQRCode.authJump();
                    break;
                case 202:
                    RNQRCode.authJump();
                    break;
                case 203:

                    break;
                default:
                    break;
            }
        })
    }

    photoQrcode = ()=> {
        RNQRCode.libraryPhotoQRCodeWithCallback((res)=>{
            alert(res.msg);
            switch (res.code) {
                case 200:
                    this.setState({nativeQrcodeRes: res.resp});
                    break;
                case 201:
                    RNQRCode.authJump();
                    break;
                case 202:
                    RNQRCode.authJump();
                    break;
                case 203:

                    break;
                default:
                    break;
            }
        })
    }

}
export default home