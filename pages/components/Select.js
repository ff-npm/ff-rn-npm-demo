import React, { Component } from 'react'
import {View, Text, TouchableOpacity, FlatList} from "react-native";
export default class Select extends Component {

    render() {
        return (
            <View>
                <View>
                    <Text>{this.props.vlaue?this.props.vlaue:this.props.placeholder}</Text>
                </View>
                <View style={{position: "absolute",left:0}}>
                    <FlatList
                        data={this.props.data}
                        keyExtractor={(item, index)=> index.toString()}
                        renderItem={(item)=>(

                        )}
                    />
                </View>
            </View>
        )
    }
}
