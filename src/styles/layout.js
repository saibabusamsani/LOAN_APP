import { StyleSheet } from "react-native";
import { h, s, w } from "./responsive";

export const layoutStyle=StyleSheet.create({
    home_card:{
        height:h(15),
        width:w(70)
    },
    theam:{
        height:h(5),
        width:w(35)
    },
    input:{
        height:h(4.5),
        width:w(62),
        fontSize:s(1.5)
    },
    form:{
        width:w(95)
    }
})