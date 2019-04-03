/**
 * 项目主入口文件
 */

 
 import React,{Component} from "react";
 import {StatusBar,View,Text} from "react-native";
 import {Provider} from "react-redux";
 import {PersistGate} from "redux-persist/integration/react";
 import SplashScreen from "react-native-splash-screen";
 import configureStore from "./store/ConfigureStore";
 import AppNavigator from "./container/App";
 const configStore = configureStore();
 

 export default class App extends Component {
   render() {
     return (
        <Provider store = {configStore.store}>
          <PersistGate persistor = {configStore.persistor} loading = {null}>
            <StatusBar 
              animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
              hidden={false}  //是否隐藏状态栏。
              backgroundColor={'#a44323'} //状态栏的背景色
              translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
              barStyle={'default'} // enum('default', 'light-content', 'dark-content')
              networkActivityIndicatorVisible ={true}//仅作用于ios。是否显示正在使用网络。
              showHideTransition={'fade'}
            />
            {/* <View>
              <Text>111111111</Text>
            </View> */}
            <AppNavigator />
          </PersistGate>
        </Provider>
     );
   }
 }