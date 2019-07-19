import React, { Component } from 'react';
import {View, Text, Button, TextInput, ScrollView} from "react-native";
import Select from "./../components/Select";

export default class toast extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '扫码',
    })

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            iconList: ["success", "failed", "loading"],
            selectValue: "",
            toastTime: ["short", "long"],
            timeAelectValue: ""
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{flex: 1}}>
                <View style={{marginTop:20}}>
                    <View style={{marginTop:20}}>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder="请输入提示的文字"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <Select
                            style={{height:40, borderColor: 'gray', borderWidth: 1, lineHeight: 40}}
                            data={this.state.iconList}
                            placeholder="请选择图标类型"
                            value={this.state.selectValue}
                            onChange={this.selectIcon}
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <Select
                            style={{height:40, borderColor: 'gray', borderWidth: 1, lineHeight: 40,overflow: "visible"}}
                            data={this.state.toastTime}
                            placeholder="请选择展示时长"
                            value={this.state.timeAelectValue}
                            onChange={this.selectTime}
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <Button onPress={()=>this.props.navigation.navigate("qrcode")} title="toast"></Button>
                    </View>
                </View>
            </ScrollView>
        )
    }

    selectIcon = (index) => {
        console.log(index)
        this.setState((state)=>({
            selectValue: state.iconList[index]
        }))
    }

    selectTime = (index) => {
        this.setState((state)=>({
            timeAelectValue: state.toastTime[index]
        }))
    }

}
