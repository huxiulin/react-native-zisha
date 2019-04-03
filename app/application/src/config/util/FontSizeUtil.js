/**
 * 字体设置
 */

 import {Dimensions} from "react-native";

 //设备宽度 dp
 const deviceWidthDp = Dimensions.get("window").width;

 //设计稿 px
 const uiWidthPx = 750;

 // px转dp
 export const pId = (uiElePx) => {
   return uiElePx * deviceWidthDp / uiWidthPx;
 }