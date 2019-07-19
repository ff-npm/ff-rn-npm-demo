import React, { Component } from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from "react-native";

export default class Select extends Component {

    constructor(props){
        super(props);
        this.state = {
            showOption: false
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={this.props.style} onPress={()=>{this.setState((state)=>({showOption: !state.showOption}))}}>
                    <Text style={{lineHeight: this.props.style.height}}>{this.props.value?this.props.value:this.props.placeholder}</Text>
                </TouchableOpacity>
                {
                    this.state.showOption?(
                        <View>
                            <FlatList
                                data={this.props.data}
                                keyExtractor={(item, index)=> index.toString()}
                                renderItem={({item, index})=>(
                                    <TouchableOpacity onPress={()=>{this.setState({showOption: false});this.props.onChange(index)}} style={{borderBottomColor: "#333333", borderBottomWidth: StyleSheet.hairlineWidth}}>
                                        <Text style={{ backgroundColor: "#eeeeee",lineHeight: 30, paddingHorizontal: 20}}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    ):(<View></View>)
                }
                
            </View>
        )
    }
}
