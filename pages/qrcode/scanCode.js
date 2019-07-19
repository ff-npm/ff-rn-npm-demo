import React, { Component } from 'react'
import { View, Text, Button } from "react-native";
import { RNQRCode, QrcodeView } from "react-native-ff-qrcode";

export default class scanCode extends Component {

    static navigationOptions = ({ navigation }) => {
        let params = navigation.state.params || {};
        return {
            title: '扫码',
            headerRight: (
                <Button onPress={params.albumScanCode} title="相册"></Button>
            )
        }
    }

    constructor(props){
        super(props);
        this.state = {
            flashStatus: 0
        }
    }

    albumScanCode = ()=>{
        RNQRCode.libraryPhotoQRCodeWithCallback((res)=>{
            console.log(res);
            alert(res);
        })
    }

    componentWillMount() {
        this.props.navigation.setParams({ albumScanCode: this.albumScanCode });
    }

    componentDidMount() {
        RNQRCode.initQrCodeView((res)=> {
            console.log(res);
            alert(res.msg);
            switch (res.code) {
                case 200:
                    alert(res.resp);
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
        });
    }

    openFlash = () => {
        RNQRCode.flashSwitch(this.state.flashStatus);
        this.setState((oldState)=>({
            flashStatus: oldState.flashStatus==1?0:1
        }))
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <QrcodeView style={{flex: 1, backgroundColor:"red"}} />
                {
                    this.state.flashStatus == 1?(
                        <Button style={{position: "absolute", bottom: 20,left: 40}} onPress={this.openFlash} title="关闭闪光灯"></Button>
                    ) : (
                        <Button style={{position: "absolute", bottom: 20,left: 40}} onPress={this.openFlash} title="打开闪光灯"></Button>
                    )
                }
                
            </View>
        )
    }
}
