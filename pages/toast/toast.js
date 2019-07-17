import React, { Component } from 'react';
import {View, Text, Button, TextInput} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';

export default class toast extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '扫码',
    })

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <View>
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
                        <ModalDropdown
                            options={['success', 'error']}
                            defaultValue="请选择提示图标类型"
                            onSelect={this.selectIcon}
                        />
                    </View>
                    <Button onPress={()=>this.props.navigation.navigate("qrcode")} title="toast"></Button>
                </View>
            </View>
        )
    }

    selectIcon = (index, val) => {

    }

}
