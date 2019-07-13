import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import scanCode from "./qrcode/scanCode";
import home from "./home";
import qrcode from "./qrcode/qrcode";

const AppNavigator = createStackNavigator(
    {
        home: home,
        qrcode: qrcode,
        scanCode: scanCode
    },
    {
        initialRouteName: "home"
    }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}
