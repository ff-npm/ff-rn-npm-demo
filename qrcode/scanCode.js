import React, { Component } from 'react'
import { View, Text, Button } from "react-native";
import { QRCodeModule, QrcodeView } from "react-native-ff-qrcode";
export default class scanCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '扫码',
        headerRight: (
            <Button onPress={this.albumScanCode} title="相册"></Button>
        )
    })

    albumScanCode = ()=>{
        QRCodeModule.libraryPhotoQRCodeWithCallback((res)=>{
            console.log(res);
            alert(res);
        })
    }

    componentDidMount() {
        QRCodeModule.initQrCodeView((res)=> {
            console.log(res);
            alert(res);
        });
    }

    render() {
        return (
            <View>
                <QrcodeView style={{flex: 1}} />
            </View>
        )
    }
}
