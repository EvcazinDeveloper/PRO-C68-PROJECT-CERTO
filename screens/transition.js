import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Permissions } from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class Transition extends Component {
    constructor(props){
        super(props);
        this.state = {
            domState: "normal",
            hasCameraPermission: null,
            scanned: false,
            scannedData: ""
        }
    }
    cameraPermittor=async domState=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermission: status == "granted",
            domState: domState,
            scanned: false
        })
    }
    render(){
        return(
            <View style={styleSheet.container2}>
                <TouchableOpacity style={styleSheet.button}>
                    <Text style={styleSheet.text2}>
                        Digitalizar QR Code
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styleSheet = StyleSheet.create({
    container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00C7FF",
    },
    text2: {
        color: "white"
    },
    button: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0072FF",
        borderRadius: 15
    }
})