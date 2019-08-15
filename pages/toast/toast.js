import React, { Component } from 'react';
import {View, Text, Button, TextInput, ScrollView, Switch} from "react-native";
import Select from "./../components/Select";
import { showToast, clearToast } from "react-native-ff-toast"

export default class toast extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '扫码',
    })

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            iconList: ["success", "failed", "tips","question","loading1","loading2", "progress"],
            selectValue: "",
            toastTime: ["short", "long"],
            timeAelectValue: "",
            textFont: "14",
            boardColor: "",
            backBoardColor: "",
            contentColor: "",
            switchValue: false
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
                            value={this.state.iconList[this.state.selectValue]}
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
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(textFont) => this.setState({textFont})}
                            value={this.state.textFont}
                            keyboardType="numeric"
                            placeholder="请输入提示的文字的字体大小"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(boardColor) => this.setState({boardColor})}
                            value={this.state.boardColor}
                            placeholder="请输入提示区域的背景颜色 rgba ,分割 如255,255,255,1"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(backBoardColor) => this.setState({backBoardColor})}
                            value={this.state.backBoardColor}
                            placeholder="请输入遮罩区域的背景颜色 rgba ,分割 如255,255,255,1"
                        />
                    </View>
                    <View style={{7:20}}>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(contentColor) => this.setState({contentColor})}
                            value={this.state.contentColor}
                            placeholder="请输入提示文字颜色 rgba ,分割 如255,255,255,1"
                        />
                    </View>
                    <View style={{marginTop: 20, flexDirection: "row",alignItems: "center"}}>
                        <Text>遮罩是否可点击</Text>
                        <Switch
                            value={this.state.switchValue}
                            onValueChange={(value)=>{
                                console.log(value)
                                this.setState((state)=>{
                                    return {
                                        switchValue: !state.switchValue
                                    }
                                })
                            }} 
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <Button onPress={this.showToast1} title="toast"></Button>
                    </View>
                    <View style={{marginTop:20}}>
                        <Button onPress={clearToast} title="清除toast"></Button>
                    </View>
                </View>
            </ScrollView>
        )
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    selectIcon = (index) => {
        console.log(index)
        this.setState((state)=>({
            selectValue: index
        }))
    }

    selectTime = (index) => {
        this.setState((state)=>({
            timeAelectValue: state.toastTime[index]
        }))
    }

    showToast1 = () => {
        if(this.state.iconList[this.state.selectValue] == "progress"){
            let time = 0;
            showToast({
                msg: this.state.text,
                config: {
                    continue: this.state.toastTime[this.state.timeAelectValue],
                    textFont: this.state.textFont,
                    contentColor: this.state.contentColor,
                    boardColor: this.state.boardColor,
                    backBoardColor: this.state.backBoardColor,
                    touchEnable: this.state.switchValue?1:0
                },
                iconType: this.state.iconList[this.state.selectValue],
                callback: clearToast,
                progress: time
            });
            this.timer = setInterval(()=>{
                time += 0.1;
                showToast({
                    msg: this.state.text,
                    config: {
                        continue: this.state.toastTime[this.state.timeAelectValue],
                        textFont: this.state.textFont,
                        contentColor: this.state.contentColor,
                        boardColor: this.state.boardColor,
                        backBoardColor: this.state.backBoardColor,
                        touchEnable: this.state.switchValue?1:0
                    },
                    iconType: this.state.iconList[this.state.selectValue],
                    callback: clearToast,
                    progress: time
                });
                if(time >= 1){
                    console.log(11111111)
                    clearInterval(this.timer);
                    clearToast();
                }
            },1000)
        }else{
            showToast({
                msg: this.state.text,
                config: {
                    continue: this.state.toastTime[this.state.timeAelectValue],
                    textFont: this.state.textFont,
                    contentColor: this.state.contentColor,
                    boardColor: this.state.boardColor,
                    backBoardColor: this.state.backBoardColor,
                    touchEnable: this.state.switchValue?1:0
                },
                iconType: this.state.iconList[this.state.selectValue],
                callback: clearToast
            });
        }
    }

}
