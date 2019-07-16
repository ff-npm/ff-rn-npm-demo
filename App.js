import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import scanCode from "./pages/qrcode/scanCode";
import home from "./home";
import qrcode from "./pages/qrcode/qrcode";
import toast from "./pages/toast/toast";

const AppNavigator = createStackNavigator(
    {
        home: home,
        qrcode: qrcode,
        scanCode: scanCode,
        toast: toast
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
