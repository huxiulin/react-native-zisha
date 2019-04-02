
/**
 * 入口文件
 */
import {Platform} from "react-native";
import React,{Component} from "react";
import Root from "./src/root";
import AndroidPermission from "./src/component/AndroidPermissions";

 export default class MyApp extends Component{
  
  //获取安卓权限
  componentWillMount() {
    if(Platform.OS == "android") {
      AndroidPermiss.requestMultiplePermission()
    }else{
      return false;
    }
  }

  render() {
    return <Root />
  }
 }